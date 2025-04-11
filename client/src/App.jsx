import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import View from "./pages/View";
import Manage from "./pages/Manage";
import Settings from "./pages/Settings";
import UserSignUp from "./pages/UserSignUp";
import SnackbarNotification from "./components/SnackbarNotification";
import StreakNotification from "./components/StreakNotification";
import SchoolRounded from "@mui/icons-material/SchoolRounded";
import { useNavigate } from "react-router-dom";
import { setNavigate } from "./utilities/utility";
import ProtectedRoute from "./components/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { fetchRolePermissions } from "./store/oAuthSlice";
import useErrorHandler from "./hooks/useErrorHandler";

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Breadcrumbs,
  CircularProgress,
} from "@mui/material";
import { styled, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { showNotification } from "./store/notificationSlice";

const StyledLink = styled(Link)({
  color: "white",
  textDecoration: "none",
  transition: "all 0.1s ease",
  "&:hover": {
    fontSize: "1.1rem",
  },
});

function App() {
  const [loading, setLoading] = useState(true);
  const { handleError } = useErrorHandler();
  const dispatch = useDispatch();
  const { permissions } = useSelector((state) => state.oAuth);

  const navigate = useNavigate();
  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

  const fetchUserRolePermissions = async () => {
    try {
      const { role } = await dispatch(fetchRolePermissions()).unwrap();
      if (role !== "admin")
        dispatch(
          showNotification({
            message:
              "since you are not an admin, you dont have access to all the resources",
            severity: "warning",
          })
        );
    } catch (err) {
      console.log("error while fetching permissions", err);
      setLoading(false);
      handleError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserRolePermissions();
  }, []);

  return loading ? (
    <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
      <CircularProgress />
    </Box>
  ) : (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
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
              <StyledLink to="/usersignup">Sign Up</StyledLink>
            </Breadcrumbs>
            <StreakNotification />
          </Box>
        </Toolbar>
      </AppBar>
      <div>
        <Container maxWidth="lg" sx={{ mt: 4, padding: { xs: 2, md: 3 } }}>
          <SnackbarNotification />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute
                  permissionGiven="route.home"
                  permissionsList={permissions}
                  element={<Home />}
                />
              }
            />
            <Route
              path="/view"
              element={
                <ProtectedRoute
                  permissionGiven="route.view"
                  permissionsList={permissions}
                  element={<View />}
                />
              }
            />
            <Route
              path="/manage"
              element={
                <ProtectedRoute
                  permissionGiven="route.manage"
                  permissionsList={permissions}
                  element={<Manage />}
                />
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute
                  permissionGiven="route.settings"
                  permissionsList={permissions}
                  element={<Settings />}
                />
              }
            />
            <Route path="/usersignup/*" element={<UserSignUp />} />
          </Routes>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
