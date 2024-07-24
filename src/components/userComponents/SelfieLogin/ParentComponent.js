 
import React from "react";
import { Button } from "@mui/material";
import MapModal from "../../customComponents/modalMap/MapModal";
import useMapModalImage from "./useMapModal";

const ParentComponent = () => {
   const {
    isModalOpen,
    openModal,
    closeModal,
    locationName,
    setLocationName,
    locationRadius,
    setLocationRadius,
    handleChangeName,
    handleChangeRadius,
  } = useMapModalImage();

  const handleDelete = () => {
    setLocationName("");
    setLocationRadius("");
    closeModal();
  };

  const handleSave = () => {
    console.log("Save button clicked");
     closeModal();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Button variant="contained" color="primary" onClick={openModal}>
        Open Modal
      </Button>
      <MapModal
        isOpen={isModalOpen}
        onClose={closeModal}
        locationName={locationName}
        onLocationNameChange={handleChangeName}
        locationRadius={locationRadius}
        onLocationRadiusChange={handleChangeRadius}
        onDelete={handleDelete}
        onSave={handleSave}
        locID="1234"
        locName="Central Park"
        locRadius="50"
      />
    </div>
  );
};

export default ParentComponent;
