import React from "react";
import Modal from "../modal";
import CreateEventForm from "./create-event-form";

const CreateEventModal = ({ setIsOpen }) => {

  return (
    <Modal title={"Create Event"} setIsOpen={setIsOpen}>
      <CreateEventForm />
    </Modal>
  )
};

export default CreateEventModal;