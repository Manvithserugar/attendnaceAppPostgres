import { useState, useEffect } from "react";
import { format } from "date-fns";

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

import ProtectedComponent from "../components/ProtectedComponent";

import useErrorHandler from "../hooks/useErrorHandler";
import SearchIcon from "@mui/icons-material/Search";
import "./Home.css";

import { useDispatch, useSelector } from "react-redux";
import {
  getStudentsAttendance,
  clearStudentsAttendance,
  clearErrorAttendance,
  markAttendance,
} from "../store/studentsSlice";

import { showNotification } from "../store/notificationSlice";

function Home() {
  const dispatch = useDispatch();
  const { studentsAttendance, isLoadingAttendance, errorAttendance } =
    useSelector((state) => state.students);

  const { handleError } = useErrorHandler();

  useEffect(() => {
    dispatch(getStudentsAttendance());

    return () => {
      dispatch(clearStudentsAttendance());
    };
  }, [dispatch]);

  useEffect(() => {
    if (errorAttendance) {
      handleError(errorAttendance);
    }
    return () => {
      dispatch(clearErrorAttendance());
    };
  }, [errorAttendance, dispatch]);

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStudentIds, setSelectedStudentIds] = useState([]);

  const studentsPerPage = 5;

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredStudents = studentsAttendance.filter((student) =>
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
      dispatch(
        showNotification({
          message: "Please select at least one student.",
          severity: "warning",
        })
      );
      return;
    }

    const date = new Date();
    const formattedDate = format(date, "yyyy-MM-dd");

    const resultAction = await dispatch(
      markAttendance({ date: formattedDate, studentIds: selectedStudentIds })
    );

    if (markAttendance.fulfilled.match(resultAction)) {
      dispatch(
        showNotification({
          message: "Attendance for selected students marked successfully!",
        })
      );
      dispatch(getStudentsAttendance());
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
        <ProtectedComponent permissionGiven="route.home.addAttendance">
          <Button
            variant="contained"
            color="primary"
            onClick={handleMarkAttendance}
            disabled={selectedStudentIds.length === 0}
            size="medium"
          >
            Mark Attendance
          </Button>
        </ProtectedComponent>
      </Container>
      {isLoadingAttendance && (
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
              <ProtectedComponent permissionGiven="route.home.addAttendance">
                <TableCell>Select</TableCell>
              </ProtectedComponent>
              <TableCell>Student Name</TableCell>
              <TableCell>Student ID</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Total Attendance</TableCell>
              <TableCell>Consecutive classes</TableCell>
              <TableCell>Streak Of 4</TableCell>
              <TableCell>Last 4 Classes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentStudents.length > 0 ? (
              currentStudents.map((student) => (
                <TableRow key={student.id}>
                  <ProtectedComponent permissionGiven="route.home.addAttendance">
                    <TableCell padding="checkbox">
                      <Checkbox
                        edge="end"
                        onChange={(event) =>
                          handleSelectStudent(event, student.id)
                        }
                        checked={selectedStudentIds.includes(student.id)}
                      />
                    </TableCell>
                  </ProtectedComponent>
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
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No students found.
                </TableCell>
              </TableRow>
            )}
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
