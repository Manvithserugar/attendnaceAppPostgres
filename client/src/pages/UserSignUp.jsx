import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser, loginUser, logUserOut } from "../store/oAuthSlice";
import { Box, CircularProgress, Button } from "@mui/material";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import useErrorHandler from "../hooks/useErrorHandler";
import ModalDeleteVerify from "../components/ModalDeleteVerify";
import { showNotification } from "../store/notificationSlice";

function UserSignUp() {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("");

  const { handleError } = useErrorHandler();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleLogout = async () => {
    const resultAction = await dispatch(logUserOut());
    debugger;
    if (logUserOut.fulfilled.match(resultAction)) {
      navigate("/usersignup/login");
      dispatch(
        showNotification({
          message: "user successfully logged out",
          severity: "success",
        })
      );
    }
  };

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setDeleteMessage(`Are you sure you want to logout?`);
    setModalOpen(true);
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        <Button
          variant="outlined"
          color="error"
          onClick={() => handleOpenModal()}
          sx={{ borderColor: "red", color: "red" }}
        >
          Logout
        </Button>
      </Box>

      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <CircularProgress />
        </Box>
      )}

      <Routes>
        <Route path="/" element={<Navigate to="signup" />} />
        <Route path="signup" element={<SignupForm onSubmit={handleSignup} />} />
        <Route path="login" element={<LoginForm onSubmit={handleLogin} />} />
      </Routes>

      {modalOpen && (
        <ModalDeleteVerify
          modalOpen={modalOpen}
          handleCloseModal={handleCloseModal}
          handleDelete={handleLogout}
          deleteMessage={deleteMessage}
          btnText="LOGOUT"
        />
      )}
    </>
  );
}

export default UserSignUp;
