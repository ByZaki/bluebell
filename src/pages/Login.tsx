import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import logo from "@assets/logo.svg";
import { validateEmail, validatePassword } from "../utils";
import useStore from "../store/store";
import { useNavigate } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const login = useStore((state) => state.login);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (email) {
  //     validateEmail(email, setErrorEmail);
  //   }
  // }, [email]);

  // useEffect(() => {
  //   if (password) {
  //     validatePassword(password, setErrorPassword);
  //   }
  // }, [password]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const email = formData.get("email")?.toString() ?? "";
    const password = formData.get("password")?.toString() ?? "";

    const isValidEmail = validateEmail(email, setErrorEmail);
    const isValidPassword = validatePassword(password, setErrorPassword);

    setErrorEmail(!isValidEmail);
    setErrorPassword(!isValidPassword);

    if (!isValidEmail || !isValidPassword) return;

    const { success, message } = await login(email, password);

    console.log(message);

    if (success) {
      navigate("/");
    }
  };

  // const handleClickShowPassword = () => setShowPassword((show) => !show);

  // const handleMouseDownPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

  // const handleMouseUpPassword = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   event.preventDefault();
  // };

  return (
    <Stack width="100%" direction="row" justifyContent="center">
      <Stack
        width={320}
        height="100vh"
        justifyContent="space-between"
        alignItems="center"
        paddingY="20px"
      >
        <Link href="/#" variant="h5" color="primary" underline="none">
          <img src={logo} alt="Logo" />
        </Link>

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
                if (errorEmail) setErrorEmail(false); // Убираем ошибку при изменении текста
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
                  if (errorPassword) setErrorPassword(false); // Убираем ошибку при изменении текста
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

        <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
          <Link href="#" underline="none">
            Terms of use
          </Link>
          <Typography>|</Typography>
          <Link href="#" underline="none">
            Privacy policy
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
