// src/components/customComponents/modalMap/MapModal.js

import React from "react";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";

const MapModal = ({
  isOpen,
  onClose,
  locationName,
  onLocationNameChange,
  locationRadius,
  onLocationRadiusChange,
  onDelete,
  onSave,
  locID = "",
  locName = "",
  locRadius = "",
  textSize = "12px",
  deleteLabel = "Delete",
  saveLabel = "Save",
  modalTitle = "Location Settings",
  nameLabel = "Set Location Name",
  radiusLabel = "Set Radius",
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" sx={{ fontSize: textSize, mb: 2 }}>
          {modalTitle}
        </Typography>

        <Typography variant="h7" sx={{ fontSize: textSize }}>
          ID: {locID}
        </Typography>
        <Typography sx={{ fontSize: textSize }}>Location: {locName}</Typography>

        <Typography sx={{ fontSize: textSize, marginBottom: "10px" }}>
          Radius: {locRadius}
        </Typography>

        <Typography variant="h7" component="h2" sx={{ fontSize: textSize }}>
          {nameLabel}
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Location Name"
          variant="outlined"
          value={locationName}
          onChange={onLocationNameChange}
          InputProps={{ sx: { fontSize: textSize } }}
          type="text"
        />

        <Typography variant="h7" component="h2" sx={{ fontSize: textSize }}>
          {radiusLabel}
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Radius"
          variant="outlined"
          value={locationRadius}
          onChange={onLocationRadiusChange}
          InputProps={{ sx: { fontSize: textSize } }}
          type="number"
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#FF7704", fontSize: textSize }}
            onClick={onDelete}
          >
            {deleteLabel}
          </Button>

          <Button
            variant="contained"
            sx={{ backgroundColor: "#FF7704", fontSize: textSize }}
            onClick={onSave}
          >
            {saveLabel}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default MapModal;
