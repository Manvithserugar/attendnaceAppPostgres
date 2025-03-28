import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Box,
} from "@mui/material";
import studentService from "../services/studentService";
import useErrorHandler from "../hooks/useErrorHandler";
import "./View.css";

const maxDate = format(new Date(), "yyyy-MM-dd");

function View() {
  const { handleError } = useErrorHandler();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(maxDate);
  const [students, setStudents] = useState([]);

  const handleDateChange = (event) => {
    setSelectedDate(format(new Date(event.target.value), "yyyy-MM-dd"));
  };

  const fetchStudents = async () => {
    setIsLoading(true);
    try {
      const response = await studentService.getStudents(selectedDate);
      if (response && response.length > 0) {
        setStudents(response);
      }
    } catch (error) {
      if (error.response.status === 404) {
        setStudents([]);
        return;
      } else {
        handleError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [selectedDate]);

  return (
    <div className="view-container">
      <h1>View Attendance</h1>
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <CircularProgress />
        </Box>
      )}
      <TextField
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        variant="outlined"
        sx={{ mb: 2, width: "100%" }}
        slotProps={{
          input: {
            onClick: (e) => e.target.showPicker(),
            max: maxDate,
          },
        }}
      />

      {students.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student Name</TableCell>
                <TableCell>Student ID</TableCell>
                <TableCell>Total Attendance</TableCell>
                <TableCell>Consecutive Classes</TableCell>
                <TableCell>Streak Of 4</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((record) => {
                return (
                  <TableRow key={record.id}>
                    <TableCell>{record.student_name}</TableCell>
                    <TableCell>{record.id}</TableCell>
                    <TableCell>{record.total}</TableCell>
                    <TableCell>{record.consecutive_classes}</TableCell>
                    <TableCell>{record.streak_of_four}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <h4>No Attendance taken for this date</h4>
      )}
    </div>
  );
}

export default View;
