import React, { useState, useEffect, useContext, useCallback } from "react";
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
import { NotificationContext } from "../NotificationContext";
import useErrorHandler from "../hooks/useErrorHandler";
import settingsService from "../services/settingsService";
import ModalDeleteVerify from "../components/ModalDeleteVerify";
import "./Settings.css";
import * as XLSX from "xlsx";

function Settings() {
  const { showNotification } = useContext(NotificationContext);
  const { handleError } = useErrorHandler();
  const [isLoading, setIsLoading] = useState(false);
  const [newOption, setNewOption] = useState("");
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteClass, setDeleteClass] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");

  useEffect(() => {
    fetchDropdownOptions();
  }, []);

  const fetchDropdownOptions = async () => {
    setIsLoading(true);
    try {
      const response = await settingsService.getDropdownOptions();
      setDropdownOptions(response);
    } catch (error) {
      if (error.response.status === 404) {
        setDropdownOptions([]);
        return;
      } else {
        handleError(error);
      }
    } finally {
      setIsLoading(false);
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
      const response = await settingsService.downloadBackup();

      const flattenedData = response.map((item) => ({
        // flattened to fit the attendedDates array into a single column
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
    } catch (error) {
      handleError(error);
    }
  };

  const handleAddOption = async () => {
    if (newOption.trim() !== "") {
      try {
        await settingsService.addDropdownOption(newOption.trim());
        const updatedOptions = await settingsService.getDropdownOptions();
        setDropdownOptions(updatedOptions);
        setNewOption("");
        showNotification("Dropdown option added successfully", "success");
      } catch (error) {
        console.error("Error adding dropdown option:", error);
        if (error.response.status === 404) {
          setDropdownOptions([]);
          showNotification("Could not find relevant data.", "warning");
          return;
        } else {
          handleError(error);
        }
      }
    }
  };

  const handleDeleteOption = async (optionToDelete) => {
    try {
      await settingsService.deleteDropdownOption(optionToDelete);
      const updatedOptions = await settingsService.getDropdownOptions();
      setDropdownOptions(updatedOptions);
      showNotification("Dropdown option deleted successfully", "success");
    } catch (error) {
      if (error.response.status === 404) {
        setDropdownOptions([]);
        showNotification(
          "could not find any relevant data for operation",
          "warning"
        );
        return;
      } else {
        handleError(error);
      }
    }
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      {isLoading && (
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
          <Typography variant="h6" gutterBottom>
            Manage Dropdown class
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              maxWidth: 400,
            }}
          >
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
            <List>
              {dropdownOptions.map((option) => (
                <ListItem
                  key={option.id}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => handleOpenModal(option.id, option.name)}
                    >
                      <DeleteIcon />
                    </IconButton>
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
