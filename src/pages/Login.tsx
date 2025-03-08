import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import logo from "@assets/logo.svg";
import { validateEmail, validatePassword } from "../utils";
import useStore from "../store/store";
import { Link } from "react-router-dom";
import { useSnackbarStore } from "../store/useSnackbarStore";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const setToast = useSnackbarStore((store) => store.setSnackbar);

  const login = useStore((state) => state.login);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email")?.toString() ?? "";
    const password = formData.get("password")?.toString() ?? "";

    const isValidEmail = validateEmail(email, setErrorEmail);
    const isValidPassword = validatePassword(password, setErrorPassword);

    if (!isValidEmail || !isValidPassword) {
      setErrorEmail(!isValidEmail);
      setErrorPassword(!isValidPassword);
      return;
    }

    const { success, message } = await login(email, password);

    if (success) {
      setToast({
        show: true,
        title: "success",
        message,
        severity: "success",
      });
    } else {
      setToast({
        show: true,
        title: "error",
        message,
        severity: "error",
      });
    }
  };

  return (
    <Stack width="100%" direction="row" justifyContent="center">
      <Stack
        width={320}
        height="100vh"
        justifyContent="space-between"
        alignItems="center"
        paddingY="20px"
      >
        <img src={logo} alt="Logo" />

        <Stack width="100%" alignItems="center" spacing={2}>
          <Typography variant="h5" component="h2">
            Welcome back
          </Typography>
          <Typography sx={{ color: "#72767C" }}>
            Enter your email and password to sign in!
          </Typography>
          <Stack
            width="100%"
            component="form"
            spacing={2}
            onSubmit={handleSubmit}
          >
            <TextField
              name="email"
              type="email"
              variant="outlined"
              label="Email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errorEmail) setErrorEmail(false);
              }}
              helperText={errorEmail ? "Wrong email" : ""}
              error={errorEmail}
              required
            />

            <FormControl variant="outlined" error={errorPassword} required>
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errorPassword) setErrorPassword(false);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <FormHelperText>
                {errorPassword && "Wrong password"}
              </FormHelperText>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              sx={{ padding: "16.5px 14px", textTransform: "none" }}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={1} justifyContent="center">
          <Link
            to="/term-of-use"
            target="_blank"
            style={{
              color: "#265B82",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Terms of use
          </Link>
          <Typography sx={{ mx: 1 }}>|</Typography>
          <Link
            to="/privacy"
            target="_blank"
            style={{
              color: "#265B82",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Privacy policy
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
