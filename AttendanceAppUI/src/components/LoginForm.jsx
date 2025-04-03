import React from "react";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const GreyText = styled("span")({
  color: "grey",
});

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "#1976d2", // MUI primary color
  "&:hover": {
    textDecoration: "underline",
  },
});

const LoginForm = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur", // Validates when a field loses focus
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            label="Email"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{ required: "Password is required" }}
        render={({ field, fieldState }) => (
          <TextField
            {...field}
            type="password"
            label="Password"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
          />
        )}
      />
      <Button type="submit" variant="contained">
        Log In
      </Button>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <GreyText>Not an user? </GreyText>
        <StyledLink to="/usersignup/signup" replace>
          Sign up
        </StyledLink>
      </Box>
    </Box>
  );
};

export default LoginForm;
