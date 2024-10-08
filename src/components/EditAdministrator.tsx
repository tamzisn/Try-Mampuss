import React, { useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  Typography,
  IconButton,
  TextField,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "../assets/User";

const roles: Array<string> = ["Super Admin", "Admin", "Visitor"];
const DropArrow = ({ open }: { open: boolean }) => (
  <img
    src="/public/DownArrow.svg"
    alt="custom icon"
    style={{
      width: "19px",
      height: "13px",
      transition: "transform 0.3s ease",
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
    }}
  />
);

interface EditAdministratorProps {
  open: boolean;
  onClose: () => void;
  user: User;
}

interface FormInputs {
  name: string;
  email: string;
  role: string;
}

const EditAdministrator: React.FC<EditAdministratorProps> = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpenRole = () => setOpen(true);
  const handleCloseRole = () => setOpen(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      name: props.user.name,
      email: props.user.email,
      role: props.user.role,
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    props.onClose();
    reset();
  };
  const handleClose = () => {
    reset();
    props.onClose();
  };

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
              width: "1106px",
              height: "647px",
              bgcolor: "#171717",
              backgroundImage: 'url("/public/BgAdministrator.png")',
              boxShadow: 24,
              px: 10,
              py: 4,
              outline: "none",
              display: "flex",
              flexDirection: "column",
              gap: "60px",
            }}
            component="form"
            onSubmit={handleSubmit(onSubmit)} // Integrasi submit handler
          >
            {/* Button Close */}
            <IconButton
              aria-label="close"
              onClick={props.onClose}
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
                height: "15%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "50px",
                }}
              >
                EDIT ADMINISTRATOR
              </Typography>
            </Box>

            {/* Input Fields */}
            <Box
              sx={{
                width: "100%",
                height: "85%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {/* Administrator Name */}
              <Box
                sx={{
                  width: "100%",
                  height: "24%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "23",
                    fontWeight: "400",
                    color: "#fff",
                  }}
                >
                  Administrator Name
                </Typography>
                <TextField
                  {...register("name", { required: "Name is required" })}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                  variant="outlined"
                  sx={{
                    bgcolor: "#262626",
                    borderRadius: "8px",
                    height: "60px",
                    "& .MuiOutlinedInput-root fieldset": {
                      borderColor: "transparent",
                    },
                    "& .MuiOutlinedInput-root:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                      borderColor: "transparent",
                    },
                  }}
                  inputProps={{
                    style: { color: "#fff" },
                  }}
                />
              </Box>

              {/* Email */}
              <Box
                sx={{
                  width: "100%",
                  height: "24%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "23",
                    fontWeight: "400",
                    color: "#fff",
                  }}
                >
                  Email
                </Typography>
                <TextField
                  {...register("email", { required: "Email is required" })}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  variant="outlined"
                  sx={{
                    bgcolor: "#262626",
                    borderRadius: "8px",
                    height: "60px",
                    "& .MuiOutlinedInput-root fieldset": {
                      borderColor: "transparent",
                    },
                    "& .MuiOutlinedInput-root:hover fieldset": {
                      borderColor: "transparent",
                    },
                    "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                      borderColor: "transparent",
                    },
                  }}
                  inputProps={{
                    style: { color: "#fff" },
                  }}
                />
              </Box>

              {/* Role */}
              <Box
                sx={{
                  width: "100%",
                  height: "24%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "3px",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "23",
                    fontWeight: "400",
                    color: "#fff",
                  }}
                >
                  Role
                </Typography>
                <FormControl
                  variant="outlined"
                  sx={{
                    bgcolor: "#262626",
                    borderRadius: "8px",
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "transparent",
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "transparent",
                      },
                    },
                    height: "60px",
                  }}
                >
                  <Select
                    {...register("role", { required: "Role is required" })}
                    defaultValue={props.user.role}
                    onOpen={handleOpenRole}
                    onClose={handleCloseRole}
                    IconComponent={() => <DropArrow open={open} />}
                    sx={{
                      pr: "20px",

                      color: "#fff",
                      "& .MuiSelect-icon": {
                        color: "#fff",
                      },
                    }}
                    inputProps={{
                      style: { color: "#fff" },
                    }}
                  >
                    {roles.map((option: string, optionIndex) => (
                      <MenuItem key={optionIndex} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.role && (
                    <Typography
                      sx={{
                        color: "red",
                        fontFamily: "Montserrat",
                        fontSize: "23",
                        fontWeight: "500",
                      }}
                    >
                      {errors.role.message}
                    </Typography>
                  )}
                </FormControl>
              </Box>

              {/* Buttons */}
              <Box
                sx={{
                  width: "100%",
                  height: "24%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: "20px",
                }}
              >
                <Button
                  onClick={props.onClose}
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
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  sx={{
                    border: "1px solid #FF0000",
                    color: "#fff",
                    borderRadius: "5px",
                    textTransform: "capitalize",
                    fontFamily: "Montserrat",
                    fontSize: "20px",
                    fontWeight: "500",
                    height: "45px",

                    "&:hover": {
                      backgroundColor: "#FF0000",
                      color: "#fff",
                    },
                  }}
                >
                  Remove Administrator
                </Button>
                <Button
                  type="submit"
                  sx={{
                    border: "1px solid #5E60CE",
                    bgcolor: "#5E60CE",
                    color: "#fff",
                    borderRadius: "5px",
                    textTransform: "capitalize",
                    fontFamily: "Montserrat",
                    fontSize: "20px",
                    fontWeight: "500",
                    height: "45px",
                    background:
                      "linear-gradient(230deg, #5E60CE 50%, #4EA8DE 100%)",
                    "&:hover": {
                      background:
                        "linear-gradient(230deg, #fff 50%, #fff 100%)",
                      color: "#5E60CE",
                    },
                  }}
                >
                  Edit Administrator
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default EditAdministrator;
