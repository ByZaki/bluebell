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
import useStore from "../store/store";

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
        definitions={{ "#": /[0-9]/ }}
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
  const user = useStore((state) => state.user);
  const userId = user ? user.id : null;

  const [settingId, setSettingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    full_name: user?.full_name || "",
    phone_number: user?.phone_number || "",
    email: user?.email || "",
  });

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorName, setErrorName] = useState(false);

  useEffect(() => {
    const fetchUserSettings = async () => {
      if (userId) {
        try {
          setSettingId(userId);
          const response = await getOneUserSettingService(userId);
          if (response) {
            setFormData(response);
          }
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchUserSettings();
  }, [userId]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    setErrorEmail(false);
    setErrorPhone(false);
    setErrorName(false);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const isValidName = validateLength(formData.full_name, setErrorName);
    const isValidEmail = validateEmail(formData.email, setErrorEmail);
    const isValidPhone = validatePhone(formData.phone_number, setErrorPhone);

    if (!isValidName || !isValidPhone || !isValidEmail || !settingId) return;

    try {
      await updateUserSettingService(settingId, formData);
      setToast({
        show: true,
        title: "Success",
        message: "This user has been successfully modified!",
        severity: "success",
      });
    } catch (error) {
      setToast({
        show: true,
        title: "Error",
        message: "This user has not been modified. Please, try again!",
        severity: "error",
      });
    }
  };

  return (
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
                  value={formData.full_name}
                  onChange={handleChange}
                  helperText={errorName && "Wrong name"}
                  error={errorName}
                  required
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Phone number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  name="phone_number"
                  id="formatted-text-mask-input"
                  helperText={errorPhone && "Wrong phone number"}
                  error={errorPhone}
                  InputProps={{
                    inputComponent: TextMaskCustom as any,
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  id="email"
                  type="text"
                  name="email"
                  label="Email"
                  value={formData.email}
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
  );
}
