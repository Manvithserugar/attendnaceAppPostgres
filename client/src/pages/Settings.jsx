import React, { useState, useEffect, useCallback } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  List,
  ListItem,
  IconButton,
  CircularProgress,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import AddIcon from "@mui/icons-material/Add";
import useErrorHandler from "../hooks/useErrorHandler";
import ModalDeleteVerify from "../components/ModalDeleteVerify";
import "./Settings.css";
import * as XLSX from "xlsx";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../store/notificationSlice";
import ProtectedComponent from "../components/ProtectedComponent";

import {
  getDropdownOptions,
  addDropdownOption,
  deleteDropdownOption,
  downloadBackup,
} from "../store/settingsSlice";

function Settings() {
  const { handleError } = useErrorHandler();
  const [newOption, setNewOption] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteClass, setDeleteClass] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");

  const dispatch = useDispatch();
  const { options, isLoadingDropdown, errorDropdown } = useSelector(
    (state) => state.settings
  );

  useEffect(() => {
    fetchDropdownOptions();
    console.log("error in settings.jsx", errorDropdown);
  }, []);

  const fetchDropdownOptions = async () => {
    try {
      await dispatch(getDropdownOptions()).unwrap();
    } catch (error) {
      handleError(error || "Failed to fetch dropdown options.");
    }
  };

  const handleOpenModal = useCallback((classId, className) => {
    setDeleteClass(classId);
    setDeleteMessage(`Are you sure you want to delete the class ${className}?`);
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleDownloadBackup = async () => {
    try {
      const backup = await dispatch(downloadBackup()).unwrap();
      console.log(backup);

      const flattenedData = backup.map((item) => ({
        // Flattened to fit the attendedDates array into a single column
        id: item.id,
        name: item.student_name,
        class: item.class_name,
        total: item.total,
        consecutiveClasses: item.consecutive_classes,
        streakOfFour: item.streak_of_four,
        attendedDates: item.attendedDates.join(", "),
      }));

      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(flattenedData);
      XLSX.utils.book_append_sheet(workbook, worksheet, "students_data");
      const excelData = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      const blob = new Blob([excelData], { type: "application/octet-stream" });

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "backup.xlsx";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      dispatch(
        showNotification({
          message: "Backup downloaded successfully!",
          severity: "success",
        })
      );
    } catch (error) {
      console.error("Error during backup download:", error);
      handleError(error || "An error occurred while downloading the backup.");
    }
  };

  const handleAddOption = async () => {
    if (newOption.trim() !== "") {
      try {
        await dispatch(addDropdownOption(newOption)).unwrap();

        dispatch(
          showNotification({
            message: "Dropdown option added successfully",
            severity: "success",
          })
        );
        setNewOption("");
        fetchDropdownOptions();
      } catch (error) {
        handleError(error || "Failed to add dropdown option.");
      }
    }
  };

  const handleDeleteOption = async (optionToDelete) => {
    try {
      await dispatch(deleteDropdownOption(optionToDelete)).unwrap();

      dispatch(
        showNotification({
          message: "Dropdown option deleted successfully",
          severity: "success",
        })
      );
      fetchDropdownOptions();
    } catch (error) {
      handleError(error || "Failed to delete dropdown option.");
    }
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      {isLoadingDropdown && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <CircularProgress />
        </Box>
      )}

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Backup
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 400,
            }}
          ></Box>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-start" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDownloadBackup}
            startIcon={<DownloadIcon />}
          >
            Download Backup
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ mt: 4 }}>
        <CardContent>
          <ProtectedComponent permissionGiven="route.settings.addClass">
            <Typography variant="h6" gutterBottom>
              Manage Dropdown class
            </Typography>
          </ProtectedComponent>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 400,
            }}
          >
            <ProtectedComponent permissionGiven="route.settings.addClass">
              <TextField
                label="New Option"
                variant="outlined"
                value={newOption}
                onChange={(e) => setNewOption(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddOption}
                startIcon={<AddIcon />}
              >
                Add Option
              </Button>
            </ProtectedComponent>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                color: "primary.main",
                marginTop: 2,
                marginBottom: 1,
              }}
            >
              Class List
            </Typography>
            <List>
              {options.map((option) => (
                <ListItem
                  key={option.id}
                  secondaryAction={
                    <ProtectedComponent permissionGiven="route.settings.deleteClass">
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => handleOpenModal(option.id, option.name)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ProtectedComponent>
                  }
                >
                  {option.name}
                </ListItem>
              ))}
            </List>
          </Box>
        </CardContent>
      </Card>
      {deleteClass && (
        <ModalDeleteVerify
          modalOpen={modalOpen}
          handleCloseModal={handleCloseModal}
          handleDelete={() => handleDeleteOption(deleteClass)}
          deleteMessage={deleteMessage}
        />
      )}
    </div>
  );
}

export default Settings;
