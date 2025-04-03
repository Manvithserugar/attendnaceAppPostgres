import React, { useState, useEffect, useContext } from "react";
import { IconButton, Badge, Menu, MenuItem, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { NotificationContext } from "../NotificationContext";
import notificationService from "../APIs/notificationService";
import { useDispatch, useSelector } from "react-redux";
import {
  addNotification,
  clearNotifications,
} from "../store/notificationSlice";

function StreakNotification() {
  const { notifications, notificationsCount } = useSelector(
    (state) => state.notification
  );

  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const [unreadCount, setUnreadCount] = useState(notificationsCount);
  const open = Boolean(anchorEl);

  useEffect(() => {
    setUnreadCount(notificationsCount);
  }, [notificationsCount]);

  useEffect(() => {
    const eventSource = new EventSource("/api/v1/sse");

    eventSource.onmessage = async (event) => {
      try {
        const notificationData = JSON.parse(event.data);

        if (notificationData.data) {
          dispatch(addNotification(notificationData));
        }
      } catch (error) {
        console.error("Error parsing SSE event data:", error);
      }
    };

    eventSource.onerror = (error) => {
      console.error("SSE error:", error);
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = async () => {
    setAnchorEl(null);
    dispatch(clearNotifications());
    setUnreadCount(0);
    try {
      await notificationService.acknowledgeNotification();
      console.log("Notification acknowledged to backend");
    } catch (error) {
      console.error("Error acknowledging notification:", error);
    }
  };

  return (
    <div>
      <IconButton color="inherit" onClick={handleClick}>
        <Badge badgeContent={unreadCount} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {notifications?.length === 0 ? (
          <MenuItem disabled>
            <Typography variant="body2">No new notifications</Typography>
          </MenuItem>
        ) : (
          notifications.map((notification, index) => (
            <MenuItem
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", marginBottom: 1 }}
              >
                {notification.message}
              </Typography>

              {notification.data.map((student) => (
                <Typography
                  variant="body2"
                  key={student.id}
                  sx={{ marginLeft: 2, marginBottom: 0.5 }}
                >
                  <strong>ID:</strong> {student.id} - <strong>Name:</strong>{" "}
                  {student.name}
                </Typography>
              ))}
            </MenuItem>
          ))
        )}
      </Menu>
    </div>
  );
}

export default StreakNotification;
