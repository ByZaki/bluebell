import { Box, Button, FormControl, Stack, TextField } from "@mui/material";
import React, { FormEvent, useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import { useNavigate } from "react-router";
import { validateEmail, validatePhone } from "../../utils";
import { validateLength } from "../../utils/ValidateName";
// import { validatePhone } from "../../utils/validatePhone";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

interface ComponentTechnicianProps {
  onSubmit: (data: any) => void;
  value?: any; // ✅ Принимаем данные для редактирования
}

const TextMaskCustom = React.forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="+998 ## ### ## ##"
        definitions={{
          "#": /[1-9]/,
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

const generateRandomId = () => {
  return Array.from({ length: 6 }, () =>
    Math.floor(Math.random() * 100)
      .toString()
      .padStart(2, "0")
  ).join("-");
};

export default function ComponentTechnician({
  onSubmit,
  value,
}: ComponentTechnicianProps) {
  const [values, setValues] = useState({
    full_name: value?.full_name || "",
    textmask: value?.phone_number || "+0 000 000 0000",
    email: value?.email || "",
  });

  const [shopId, setShopId] = useState(value?.shop_id || generateRandomId());
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (value) {
      setValues({
        full_name: value.full_name,
        textmask: value.phone_number,
        email: value.email,
      });
      setShopId(value.shop_id);
    }
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    errorEmail && setErrorEmail(false);
    errorPhone && setErrorPhone(false);
    errorName && setErrorName(false);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const data = {
      full_name: values.full_name,
      phone_number: values.textmask,
      email: values.email,
      shop_id: shopId,
      status: value ? value.status : "Unblocked",
      date_created: value
        ? value.date_created
        : new Date().toISOString().split("T")[0],
    };

    const isValidName = validateLength(data.full_name, setErrorName);
    const isValidEmail = validateEmail(data.email, setErrorEmail);
    const isValidPhone = validatePhone(data.phone_number, setErrorPhone);

    if (!isValidName || !isValidPhone || !isValidEmail) return;

    onSubmit(data);
    navigate("/technician");
  };

  return (
    <Box width="660px">
      <form onSubmit={handleSubmit}>
        <Stack gap="15px" marginY="25px">
          <FormControl fullWidth>
            <TextField
              id="full_name"
              type="text"
              name="full_name"
              label="Full name"
              value={values.full_name}
              onChange={handleChange}
              helperText={errorName && "Wrong name"}
              error={errorName}
              required
            />
          </FormControl>

          <FormControl fullWidth>
            <TextField
              label="Phone number"
              value={values.textmask}
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
              value={values.email}
              onChange={handleChange}
              helperText={errorEmail && "Wrong email"}
              error={errorEmail}
            />
          </FormControl>

          <FormControl>
            <TextField
              id="shop_id"
              type="text"
              name="shop_id"
              label="Shop ID"
              value={shopId}
              disabled
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
          {value ? "Update" : "Create"}
        </Button>
      </form>
    </Box>
  );
}
