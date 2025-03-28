import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import useErrorHandler from "../hooks/useErrorHandler";
import oauthService from "../services/oauthService";

function UserSignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const { handleError } = useErrorHandler();
  const navigate = useNavigate();
  const handleSignup = async (user) => {
    setIsLoading(true);
    console.log("Signup Data:", user);
    try {
      const response = await oauthService.signupUser(user);
      if (response.status === 201) navigate("/");
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (user) => {
    setIsLoading(true);
    console.log("Signup Data:", user);
    try {
      const response = await oauthService.loginUser(user);
      if (response.status === 200) navigate("/");
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <CircularProgress />
        </Box>
      )}
      {!isLoading && (
        <Routes>
          <Route path="/" element={<Navigate to="signup" />} />
          <Route
            path="signup"
            element={<SignupForm onSubmit={handleSignup} />}
          />
          <Route path="login" element={<LoginForm onSubmit={handleLogin} />} />
        </Routes>
      )}
    </>
  );
}

export default UserSignUp;
