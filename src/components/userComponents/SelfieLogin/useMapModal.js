import { useState } from "react";

const useMapModalImage = () => {
   const [isModalOpen, setModalOpen] = useState(false);

   const [locationName, setLocationName] = useState("");
  const [locationRadius, setLocationRadius] = useState("");

   const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

   const handleChangeName = (event) => {
    setLocationName(event.target.value);
  };

  const handleChangeRadius = (event) => {
    setLocationRadius(event.target.value);
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    locationName,
    setLocationName,
    locationRadius,
    setLocationRadius,
    handleChangeName,
    handleChangeRadius,
  };
};

export default useMapModalImage;
