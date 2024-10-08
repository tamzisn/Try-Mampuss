import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import TriggerForm from "./TriggerForm";
import Trigger from "./Trigger";

interface AddTriggerModalProps {
  open: boolean;
  onClose: () => void;
}

const AddTriggerModal: React.FC<AddTriggerModalProps> = (props) => {
  const handleClose = () => {
    props.onClose();
  };
  const [triggerForms, setTriggerForms] = useState<number[]>([]);

  const handleAddTriggerForm = () => {
    console.log("Form Added");

    setTriggerForms((prevForms) => [...prevForms, prevForms.length]);
  };

  const handleDeleteTriggerForm = (id: number) => {
    console.log("Form Deleted");
    setTriggerForms((prevForms) => prevForms.filter((formId) => formId !== id));
  };

  const [triggers, setTriggers] = useState<
    { id: number; name: string; description: string }[]
  >([]);
  const handleAddTrigger = (triggerData: {
    id: number;
    name: string;
    description: string;
  }) => {
    setTriggers((prevTriggers) => [...prevTriggers, triggerData]);
  };

  // const removeTrigger = (id: number) => {
  //   setTriggers(triggers.filter((trigger) => trigger.id !== id));
  // };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={props.open}>
          <Box
            sx={{
              borderRadius: "10px",
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "1312px",
              height: "717px",
              bgcolor: "#171717",
              backgroundImage: 'url("/public/BgAddTrigger.png")',
              boxShadow: 24,
              px: 10,
              py: 4,
              outline: "none",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* Button Close Modal */}
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                width: "70px",
                height: "70px",
                position: "absolute",
                right: 8,
                top: 8,
                color: "#fff",
              }}
            >
              <CloseIcon
                sx={{
                  width: "60px",
                  height: "60px",
                }}
              />
            </IconButton>

            {/* Title */}
            <Box
              sx={{
                width: "100%",
                height: "auto",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                // bgcolor: "#2e2e",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  height: "100%",
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "48px",
                }}
              >
                ADD TRIGGER HERE!
              </Typography>
              {/* Add Input Trigger Button */}
              <Button
                onClick={handleAddTriggerForm}
                sx={{
                  width: "42px",
                  height: "42px",
                  minWidth: "42px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="./public/Plus.svg" alt="" />
              </Button>
            </Box>
            {/* Trigger Wrapper */}
            <Box
              sx={{
                width: "100%",
                height: "493px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                overflowY: "auto",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {/* Trigger Form */}
              {triggerForms.map((id) => (
                <TriggerForm
                  key={id}
                  deleteTriggerForm={() => handleDeleteTriggerForm(id)}
                  onSubmit={handleAddTrigger}
                />
              ))}

              {/* Trigger Card */}
              {triggers.map((trigger) => (
                <Trigger
                  key={trigger.id}
                  triggerName={trigger.name}
                  triggerDescription={trigger.description}
                  // onRemove={() => removeTrigger(trigger.id)}
                />
              ))}
            </Box>

            {/* Buttons */}
            <Box
              sx={{
                // bgcolor: "#2e2e",
                width: "100%",
                height: "auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "20px",
              }}
            >
              <Button
                onClick={handleClose}
                sx={{
                  border: "1px solid #fff",
                  color: "#fff",
                  borderRadius: "5px",
                  width: "175px",
                  textTransform: "capitalize",
                  fontFamily: "Montserrat",
                  fontSize: "20px",
                  fontWeight: "500",
                  height: "45px",
                  "&:hover": {
                    backgroundColor: "#fff",
                    color: "#000",
                    borderRadius: "5px",
                  },
                }}
              >
                Cancel
              </Button>

              <Button
                sx={{
                  width: "212px",
                  border: "1px solid #5E60CE",
                  // bgcolor: "#5E60CE",
                  background:
                    "linear-gradient(75deg, #4EA8DE 0%, #5E60CE 100%)",
                  color: "#fff",
                  borderRadius: "5px",
                  textTransform: "capitalize",
                  fontFamily: "Montserrat",
                  fontSize: "20px",
                  fontWeight: "500",
                  height: "45px",
                  "&:hover": {
                    background: "linear-gradient(230deg, #fff 50%, #fff 100%)",
                    color: "#5E60CE",
                  },
                }}
              >
                Add Trigger
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddTriggerModal;
