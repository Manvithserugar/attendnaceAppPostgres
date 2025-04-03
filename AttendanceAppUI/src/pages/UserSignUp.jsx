import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser, loginUser } from "../store/oAuthSlice";
import { Box, CircularProgress } from "@mui/material";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import useErrorHandler from "../hooks/useErrorHandler";

function UserSignUp() {
  const { handleError } = useErrorHandler();
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.oAuth);
  useEffect(() => {
    if (error) {
      console.error("Authentication Error:", error);
      handleError(error);
    }
  }, [error]);

  const handleSignup = async (user) => {
    const resultAction = await dispatch(signupUser(user));
    if (signupUser.fulfilled.match(resultAction)) {
      window.location.href = "/";
    }
  };

  const handleLogin = async (user) => {
    const resultAction = await dispatch(loginUser(user));
    if (loginUser.fulfilled.match(resultAction)) {
      window.location.href = "/";
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
