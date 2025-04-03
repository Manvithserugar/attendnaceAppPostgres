import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import View from "./pages/View";
import Manage from "./pages/Manage";
import Settings from "./pages/Settings";
import UserSignUp from "./pages/UserSignUp";
import { NotificationProvider } from "./NotificationContext";
import SnackbarNotification from "./components/SnackbarNotification";
import StreakNotification from "./components/StreakNotification";
import SchoolRounded from "@mui/icons-material/SchoolRounded";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Breadcrumbs,
} from "@mui/material";
import { styled, ThemeProvider } from "@mui/material";
import theme from "./theme";

const StyledLink = styled(Link)({
  color: "white",
  textDecoration: "none",
  transition: "all 0.1s ease",
  "&:hover": {
    fontSize: "1.1rem",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NotificationProvider>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <StyledLink to="/">
                Attendance App
                <SchoolRounded />
              </StyledLink>
            </Typography>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator="|"
                sx={{
                  "& .MuiBreadcrumbs-separator": {
                    color: "white",
                  },
                }}
              >
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/view">View Attendance</StyledLink>
                <StyledLink to="/manage">Manage Students</StyledLink>
                <StyledLink to="/settings">Settings</StyledLink>
                <Typography
                  component="span"
                  onClick={() => (window.location.href = "/usersignup")}
                  sx={{
                    cursor: "pointer",
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  Sign Up
                </Typography>
              </Breadcrumbs>
              <StreakNotification />
            </Box>
          </Toolbar>
        </AppBar>
        <div>
          <Container maxWidth="lg" sx={{ mt: 4, padding: { xs: 2, md: 3 } }}>
            <SnackbarNotification />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/view" element={<View />} />
              <Route path="/manage" element={<Manage />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/usersignup/*" element={<UserSignUp />} />
            </Routes>
          </Container>
        </div>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;
