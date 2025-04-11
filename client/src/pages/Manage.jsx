import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { useForm, Controller } from "react-hook-form";
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
  MenuItem,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useErrorHandler from "../hooks/useErrorHandler";
import "./Manage.css";

import {
  deleteStudentById,
  getStudentsDetails,
  updateStudent,
  addStudent,
} from "../store/studentsSlice";
import { useDispatch, useSelector } from "react-redux";
import studentAPI from "../APIs/studentAPI";
import { showNotification } from "../store/notificationSlice";
import { getDropdownOptions } from "../store/settingsSlice";

function Manage() {
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      selectedClass: "",
    },
  });

  const { handleError } = useErrorHandler();
  const [studentId, setStudentId] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editStudentId, setEditStudentId] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteStudent, setDeleteStudent] = useState("");
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState("");
  const studentsPerPage = 5;

  const formRef = useRef(null);

  const dispatch = useDispatch();
  const { studentsDetails, isLoadingStudentsDetails } = useSelector(
    (state) => state.students
  );

  useEffect(() => {
    fetchDropdownOptions();
    fetchStudents();
  }, []);

  useEffect(() => {
    const { name, email, phone } = getValues();
    if (!name && !email && !phone) {
      setIsEditing(false);
      setEditStudentId("");
    }
  }, [getValues]);

  const fetchDropdownOptions = async () => {
    try {
      const options = await dispatch(getDropdownOptions()).unwrap();
      setDropdownOptions(options);
    } catch (error) {
      handleError(error || "Failed to fetch dropdown options.");
    }
  };

  useEffect(() => {
    if (editStudentId) {
      fetchStudentDetails(editStudentId);
    }
  }, [editStudentId]);

  const filteredStudents = useMemo(() => {
    return studentsDetails.filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [studentsDetails, searchQuery]);

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
    const student = await studentAPI.getStudentDetailsById(id);
    try {
      if (student) {
        setStudentId(student.id);
        setValue("name", student.name);
        setValue("email", student.email);
        setValue("phone", student.phone);
        setValue("selectedClass", student.class_id);
      }
    } catch (error) {
      if (error.response.status === 404) {
        setDropdownOptions([]);
        dispatch(
          showNotification({
            message: "could not find any relevant data for operation",
            severity: "warning",
          })
        );
        return;
      } else {
        handleError(error);
      }
    }
  };

  const clearFields = useCallback(() => {
    setStudentId("");
    reset();
    setIsEditing(false);
    setEditStudentId("");
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
    [studentsDetails]
  );

  const onSubmit = async (student) => {
    if (isEditing) {
      await handleUpdate(editStudentId, student);
    } else {
      await handleAdd(student);
    }
  };

  const fetchStudents = async () => {
    try {
      await dispatch(getStudentsDetails()).unwrap();
    } catch (error) {
      console.log("error at fetch students, manage.jsx", error);

      handleError(error || "Failed to fetch students.");
    }
  };

  const handleDelete = async (studentId) => {
    try {
      await dispatch(deleteStudentById(studentId)).unwrap();

      dispatch(
        showNotification({
          message: "Student deleted successfully",
          severity: "success",
        })
      );
      await fetchStudents();
      setDeleteStudent("");
    } catch (error) {
      handleError(error || "An error occurred while deleting.");
    }
  };

  const handleUpdate = async (studentId, student) => {
    const updatedBody = { ...student, classId: student.selectedClass };
    delete updatedBody.selectedClass;
    console.log(updatedBody);

    try {
      await dispatch(updateStudent({ id: studentId, updatedBody })).unwrap();

      dispatch(
        showNotification({
          message: "Student updated successfully",
          severity: "success",
        })
      );
      clearFields();
      await fetchStudents();
      setIsEditing(false);
    } catch (error) {
      const errorMessage =
        error?.status === 400
          ? "Same email or phone already exists"
          : error?.data || "An error occurred while updating";
      handleError(errorMessage);
    }
  };

  const handleAdd = async (student) => {
    try {
      await dispatch(addStudent(student)).unwrap();

      dispatch(
        showNotification({
          message: "Student added successfully",
          severity: "success",
        })
      );
      clearFields();
      await fetchStudents();
    } catch (error) {
      const errorMessage =
        error?.status === 400
          ? "Same email or phone already exists"
          : error?.data || "An error occurred while updating";
      handleError(errorMessage);
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
      {isLoadingStudentsDetails && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
          <CircularProgress />
        </Box>
      )}
      <Box
        component="form"
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className="form-container"
      >
        {isEditing && <h3>Student Id: {studentId}</h3>}

        <Controller
          name="name"
          control={control}
          rules={{
            required: "Name is required",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Name"
              variant="outlined"
              error={!!errors.name}
              helperText={errors.name?.message}
              required
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="outlined"
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message}
              required
            />
          )}
        />

        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Phone is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Phone must be a 10-digit number",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Phone"
              variant="outlined"
              error={!!errors.phone}
              helperText={errors.phone?.message}
              required
            />
          )}
        />

        <Controller
          name="selectedClass"
          control={control}
          rules={{
            required: "Class is required",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              select
              label="Class"
              variant="outlined"
              error={!!errors.selectedClass}
              helperText={errors.selectedClass?.message}
              required
            >
              {dropdownOptions.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          )}
        />

        <Box className="form-actions">
          <div className="form-actions-inner">
            <Button
              type="button"
              variant="contained"
              size="medium"
              color="primary"
              onClick={() => clearFields()} // Resets the form
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
