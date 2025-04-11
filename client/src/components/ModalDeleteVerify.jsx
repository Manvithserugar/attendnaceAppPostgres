import React from "react";
import {
  Button,
  Box,
  Typography,
  Modal,
  Backdrop,
  Fade,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

const ModalDeleteVerify = ({
  modalOpen,
  handleCloseModal,
  handleDelete,
  deleteMessage,
}) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={modalOpen}
      onClose={handleCloseModal}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={modalOpen}>
        <Box className="modal-style" sx={{ position: "relative", padding: 2 }}>
          {/* Close Icon */}
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Modal Content */}
          <Typography
            id="transition-modal-description"
            color="error"
            sx={{ mt: 0.5 }}
          >
            {deleteMessage}
          </Typography>
          <Box sx={{ mt: 4, display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              size="medium"
              onClick={handleCloseModal}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              size="medium"
              onClick={() => {
                handleDelete();
                handleCloseModal();
              }}
              color="error"
            >
              Delete
            </Button>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalDeleteVerify;
