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
import useErrorHandler from "../hooks/useErrorHandler";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentsAttendance,
  clearErrorAttendance,
  clearStudentsAttendance,
} from "../store/studentsSlice";
import "./View.css";

const maxDate = format(new Date(), "yyyy-MM-dd");

function View() {
  console.log("view rendered");

  const dispatch = useDispatch();
  const { studentsAttendance, isLoadingAttendance, errorAttendance } =
    useSelector((state) => state.students);
  const { handleError } = useErrorHandler();
  const [selectedDate, setSelectedDate] = useState(maxDate);

  const handleDateChange = (event) => {
    setSelectedDate(format(new Date(event.target.value), "yyyy-MM-dd"));
  };

  useEffect(() => {
    dispatch(getStudentsAttendance(selectedDate));

    return () => {
      dispatch(clearStudentsAttendance());
    };
  }, [selectedDate, dispatch]);

  useEffect(() => {
    if (errorAttendance && errorAttendance.status !== 404) {
      console.log("error while retrieving attendance", errorAttendance);

      handleError(errorAttendance);
    }
    return () => {
      dispatch(clearErrorAttendance());
    };
  }, [errorAttendance, dispatch]);

  return (
    <div className="view-container">
      <h1>View Attendance</h1>

      {isLoadingAttendance ? (
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <TextField
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            variant="outlined"
            sx={{ mb: 2, width: "100%" }}
            inputProps={{
              max: maxDate,
            }}
          />

          {studentsAttendance.length > 0 ? (
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
                  {studentsAttendance.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.student_name}</TableCell>
                      <TableCell>{record.id}</TableCell>
                      <TableCell>{record.total}</TableCell>
                      <TableCell>{record.consecutive_classes}</TableCell>
                      <TableCell>{record.streak_of_four}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Box sx={{ textAlign: "center", my: 2 }}>
              <h4>No attendance records found for this date.</h4>
            </Box>
          )}
        </>
      )}
    </div>
  );
}

export default View;
