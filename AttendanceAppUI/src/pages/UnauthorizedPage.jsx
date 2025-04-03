import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleLoginAsAdmin = () => {
    window.location.href = "/usersignup/login";
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Access Denied
      </Typography>
      <Typography variant="body1" gutterBottom>
        You do not have permission to view this page.
      </Typography>
      <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
        <Button variant="contained" color="primary" onClick={handleGoBack}>
          Go Back
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleLoginAsAdmin}
        >
          Login as Admin
        </Button>
      </Box>
    </Box>
  );
};

export default UnauthorizedPage;
