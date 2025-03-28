import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
  useMemo,
} from "react";
import { format } from "date-fns";
import studentService from "../services/studentService";
import ModalDeleteVerify from "../components/ModalDeleteVerify";
import {
  TextField,
  Button,
  List,
  ListItem,
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Pagination,
  CircularProgress,
  Modal,
  Backdrop,
  Fade,
  MenuItem,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { NotificationContext } from "../NotificationContext";
import useErrorHandler from "../hooks/useErrorHandler";
import "./Manage.css";
import settingsService from "../services/settingsService";

function Manage() {
  const { showNotification } = useContext(NotificationContext);
  const { handleError } = useErrorHandler();
  const [studentId, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editStudentId, setEditStudentId] = useState("");
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteStudent, setDeleteStudent] = useState("");
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState("");
  const studentsPerPage = 5;

  const formRef = useRef(null);
  const classNameRef = useRef("");

  useEffect(() => {
    fetchDropdownOptions();
    fetchStudents();
  }, []);

  useEffect(() => {
    if (!name && !email && !phone) {
      setIsEditing(false);
      setEditStudentId("");
    }
  }, [name, email, phone]);

  const fetchDropdownOptions = async () => {
    try {
      const response = await settingsService.getDropdownOptions();
      setDropdownOptions(response);
    } catch (error) {
      if (error.response.status === 404) {
        setStudents([]);
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

  useEffect(() => {
    if (editStudentId) {
      fetchStudentDetails(editStudentId);
    }
  }, [editStudentId]);

  const filteredStudents = useMemo(() => {
    return students.filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [students, searchQuery]);

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  const handleSearch = useCallback((event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((event, value) => {
    setCurrentPage(value);
  }, []);

  const fetchStudentDetails = async (id) => {
    const student = await studentService.getStudentDetailsById(id);
    try {
      if (student) {
        setStudentId(student.id);
        setName(student.name);
        setEmail(student.email);
        setPhone(student.phone);
        setSelectedClass(student.class_id);
      }
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

  const clearFields = useCallback(() => {
    setStudentId("");
    setEditStudentId("");
    setName("");
    setEmail("");
    setPhone("");
    setSelectedClass("");
    setIsEditing(false);
    console.log("all fields cleared");
  }, []);

  const handleEdit = useCallback(
    async (id) => {
      setIsEditing(true);
      setEditStudentId(id); //triggers the useEffect to fetch student details by id
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth" });
      }
    },
    [students]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isEditing) {
      await handleUpdate(editStudentId);
    } else {
      await handleAdd();
    }
  };

  const fetchStudents = async () => {
    setIsLoading(true);
    try {
      const response = await studentService.getStudentsDetails();
      setStudents(response);
    } catch (error) {
      if (error.response.status === 404) {
        setStudents([]);
        showNotification(
          "could not find any relevant data for operation",
          "warning"
        );
        return;
      } else {
        handleError(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (studentId) => {
    setIsLoading(true);
    try {
      await studentService.deleteStudent(studentId);
      showNotification("Student deleted successfully", "success");
      fetchStudents();
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
      setDeleteStudent("");
    }
  };

  const handleUpdate = async (studentId) => {
    setIsLoading(true);
    try {
      await studentService.updateStudent(studentId, {
        name,
        email,
        phone,
        classId: selectedClass,
      });
      showNotification("Student updated successfully", "success");
      clearFields();
      fetchStudents();
      setIsEditing(false);
      setEditStudentId("");
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAdd = async () => {
    setIsLoading(true);
    try {
      const response = await studentService.addStudent({
        name,
        email,
        phone,
        selectedClass,
      });

      showNotification("Student added successfully", "success");
      clearFields();
      fetchStudents();
    } catch (error) {
      handleError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenModal = useCallback((studentId, studentName) => {
    setDeleteStudent(studentId);
    setDeleteMessage(`Are you sure you want to delete ${studentName}?`);
    setModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <div className="manage-container">
      <h1>Manage Students</h1>
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <CircularProgress />
        </Box>
      )}
      <Box
        ref={formRef}
        component="form"
        onSubmit={handleSubmit}
        className="form-container"
      >
        {isEditing && <h3>Student Id: {studentId}</h3>}
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Phone"
          variant="outlined"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <TextField
          select
          label="Class"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          variant="outlined"
          required
        >
          {dropdownOptions.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>

        <Box className="form-actions">
          <div className="form-actions-inner">
            <Button
              type="button"
              variant="contained"
              size="medium"
              color="primary"
              onClick={clearFields}
            >
              Clear
            </Button>
            <Button
              type="submit"
              variant="contained"
              size="medium"
              color="primary"
              sx={{ width: "20%", marginRight: 0 }}
            >
              {isEditing ? "Update Student" : "Add Student"}
            </Button>
          </div>
        </Box>
      </Box>
      <TextField
        label="Search students..."
        variant="outlined"
        value={searchQuery}
        onChange={handleSearch}
        sx={{ mb: 2, width: "100%" }}
      />
      <List>
        {currentStudents.map((student) => (
          <ListItem
            key={student.id}
            sx={{ display: "flex", justifyContent: "center", padding: 0 }}
          >
            <Card
              sx={{
                marginBottom: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: 2,
                width: "80%",
              }}
            >
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ marginBottom: 2 }}
                >
                  Student Id: {student.id}
                </Typography>
                <Typography variant="h5">{student.name}</Typography>
              </CardContent>
              <CardActions sx={{ marginRight: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<EditIcon />}
                  size="medium"
                  onClick={() => handleEdit(student.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  size="medium"
                  onClick={() => handleOpenModal(student.id, student.name)}
                  color="error"
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>

      {deleteStudent && (
        <ModalDeleteVerify
          modalOpen={modalOpen}
          handleCloseModal={handleCloseModal}
          handleDelete={() => handleDelete(deleteStudent)}
          deleteMessage={deleteMessage}
        />
      )}
    </div>
  );
}

export default Manage;
