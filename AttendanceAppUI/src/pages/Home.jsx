import { useState, useEffect, useContext } from "react";
import { format } from "date-fns";
import studentService from "../services/studentService";

import {
  TextField,
  Button,
  Pagination,
  Box,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { NotificationContext } from "../NotificationContext";
import useErrorHandler from "../hooks/useErrorHandler";
import SearchIcon from "@mui/icons-material/Search";
import "./Home.css";

function Home() {
  const { showNotification } = useContext(NotificationContext);
  const { handleError } = useErrorHandler();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  const [students, setStudents] = useState([]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);

  const studentsPerPage = 5;

  const fetchStudents = async () => {
    setIsLoading(true);
    try {
      const response = await studentService.getStudents();
      setStudents(response);
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredStudents = students.filter((student) =>
    student.student_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleSelectStudent = (event, studentId) => {
    if (event.target.checked) {
      setSelectedStudentIds([...selectedStudentIds, studentId]);
    } else {
      setSelectedStudentIds(
        selectedStudentIds.filter((id) => id !== studentId)
      );
    }
  };

  const handleMarkAttendance = async () => {
    console.log("handleMarkAttendance called");
    if (selectedStudentIds.length === 0) {
      showNotification("Please select at least one student.", "warning");
      return;
    }
    const formattedDate = selectedDate;
    try {
      const response = await studentService.markAttendance(
        formattedDate,
        selectedStudentIds
      );
      if (response.status === 201) {
        showNotification(
          "Attendance for selected students marked successfully!"
        );
        fetchStudents();
      }
    } catch (error) {
      handleError(error);
    }
    setSelectedStudentIds([]);
  };

  return (
    <div className="home-container">
      <Container
        className="home-container-inner"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Add Attendance</h1>

        <Button
          variant="contained"
          color="primary"
          onClick={handleMarkAttendance}
          disabled={selectedStudentIds.length === 0}
          size="medium"
        >
          Mark Attendance
        </Button>
      </Container>
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <CircularProgress />
        </Box>
      )}
      <TextField
        label="Search students..."
        variant="outlined"
        value={searchQuery}
        onChange={handleSearch}
        sx={{ mb: 2, width: "100%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Select</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Student ID</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Total Attendance</TableCell>
              <TableCell>Consecutive classes</TableCell>
              <TableCell>Streak Of 4</TableCell>
              <TableCell>Last 5 Classes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentStudents.map((student) => (
              <TableRow key={student.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    edge="end"
                    onChange={(event) => handleSelectStudent(event, student.id)}
                    checked={selectedStudentIds.includes(student.id)}
                  />
                </TableCell>
                <TableCell>{student.student_name}</TableCell>
                <TableCell>{student.id}</TableCell>
                <TableCell>{student.class_name}</TableCell>
                <TableCell>{student.total}</TableCell>
                <TableCell>{student.consecutive_classes}</TableCell>
                <TableCell>{student.streak_of_four}</TableCell>
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "4px",
                    }}
                  >
                    {student.last4Dates.map((date, index) => (
                      <div key={index} style={{ display: "block" }}>
                        {format(new Date(date), "dd/MM/yyyy")}
                      </div>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </div>
  );
}

export default Home;
