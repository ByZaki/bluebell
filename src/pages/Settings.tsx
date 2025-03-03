import PageHeader from "../components/PageHeader";
import CustomBreadcrumbs from "../components/CustomBreadcrumbs";
import { Box, Button, FormControl, Stack, TextField } from "@mui/material";
import React, { FormEvent, useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import { validateLength, validateEmail, validatePhone } from "../utils";
import { useSnackbarStore } from "../store/useSnackbarStore";
import {
  getOneUserSettingService,
  updateUserSettingService,
} from "../services/SettingsService";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="+998 ## ### ## ##"
        definitions={{
          "#": /[0-9]/,
        }}
        inputRef={ref}
        onAccept={(value: any) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  }
);

export default function Settings() {
  const setToast = useSnackbarStore((store) => store.setSnackbar);

  const [settingId, setSettingId] = useState<number | null>(null);
  const [user, setUser] = useState({
    full_name: "",
    textmask: "",
    email: "",
  });

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorName, setErrorName] = useState(false);

  useEffect(() => {
    const authStore = localStorage.getItem("authStore");
    if (authStore) {
      try {
        const parsedStore = JSON.parse(authStore);
        const userId = parsedStore?.state?.user?.data?.id;

        if (userId) {
          setSettingId(userId);
          const data = async () => {
            try {
              const response = await getOneUserSettingService(userId);
              setUser({
                full_name: response.full_name,
                textmask: response.phone_number,
                email: response.email,
              });
            } catch (error) {
              console.log(error);
            }
          };
          data();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
    setErrorEmail(false);
    setErrorPhone(false);
    setErrorName(false);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const data = {
      full_name: user.full_name,
      phone_number: user.textmask,
      email: user.email,
    };

    const isValidName = validateLength(data.full_name, setErrorName);
    const isValidEmail = validateEmail(data.email, setErrorEmail);
    const isValidPhone = validatePhone(data.phone_number, setErrorPhone);

    if (!isValidName || !isValidPhone || !isValidEmail || !settingId) return;

    try {
      await updateUserSettingService(settingId, data);
      setToast({
        show: true,
        title: "success",
        message: "This user has been successfully modified!",
        severity: "success",
      });
    } catch (error) {
      setToast({
        show: true,
        title: "Error",
        message: "this user has not been modified. Please, try it again!",
        severity: "error",
      });
    }
  };

  return (
    <>
      <Stack>
        <CustomBreadcrumbs>Settings</CustomBreadcrumbs>

        <PageHeader title="Settings" />

        <Stack>
          <Box width="660px">
            <form onSubmit={handleSubmit}>
              <Stack gap="15px" marginY="25px">
                <FormControl fullWidth>
                  <TextField
                    id="full_name"
                    type="text"
                    name="full_name"
                    label="Full name"
                    value={user.full_name}
                    onChange={handleChange}
                    helperText={errorName && "Wrong name"}
                    error={errorName}
                    required
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    label="Phone number"
                    value={user.textmask}
                    onChange={handleChange}
                    name="textmask"
                    id="formatted-text-mask-input"
                    helperText={errorPhone && "Wrong phone number"}
                    error={errorPhone}
                    slotProps={{
                      input: () => {
                        return { inputComponent: TextMaskCustom as any };
                      },
                    }}
                  />
                </FormControl>
                <FormControl fullWidth>
                  <TextField
                    id="email"
                    type="text"
                    name="email"
                    label="Email"
                    value={user.email}
                    onChange={handleChange}
                    helperText={errorEmail && "Wrong email"}
                    error={errorEmail}
                  />
                </FormControl>
              </Stack>

              <Button
                type="submit"
                size="large"
                variant="contained"
                sx={{
                  paddingY: "14px",
                  minWidth: "208px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                Save
              </Button>
            </form>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

// export default function ComponentTechnician({
//   onSubmit,
//   value,
// }: ComponentTechnicianProps) {
//   const [values, setValues] = useState({
//     full_name: value?.full_name,
//     textmask: value?.phone_number,
//     email: value?.email,
//   });
// }
