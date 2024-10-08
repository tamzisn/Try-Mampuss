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
  Select,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

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

interface AddAdministratorProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  role: string;
}

const AddAdministrator: React.FC<AddAdministratorProps> = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpenRole = () => setOpen(true);
  const handleCloseRole = () => setOpen(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "Your Name",
      email: "example@gmail.com",
      // role: roles[2],
    },
  });

  const onSubmit = (data: FormData) => {
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
        onClose={handleClose}
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
          >
            {/* Button Close */}
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
                height: "15%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  height: "100%",
                  fontFamily: "Montserrat",
                  fontWeight: "900",
                  fontSize: "50px",
                }}
              >
                ADD ADMINISTRATOR
              </Typography>
            </Box>
            {/* Input */}
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                width: "100%",
                height: "85%",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {/* Administrator */}
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
                  id="outlined-basic"
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
                  inputProps={{
                    style: { color: "#fff" },
                  }}
                />
                {errors.name && (
                  <Typography
                    sx={{
                      color: "red",
                      fontFamily: "Montserrat",
                      fontSize: "23",
                      fontWeight: "500",
                    }}
                  >
                    {errors.name.message}
                  </Typography>
                )}
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
                  id="outlined-basic"
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
                  inputProps={{
                    style: { color: "#fff" },
                  }}
                />
                {errors.email && (
                  <Typography
                    sx={{
                      color: "red",
                      fontFamily: "Montserrat",
                      fontSize: "23",
                      fontWeight: "500",
                    }}
                  >
                    {errors.email.message}
                  </Typography>
                )}
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
                    defaultValue={roles[2]}
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
              {/* Button */}
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
                    },
                  }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  sx={{
                    color: "#fff",
                    borderRadius: "5px",
                    textTransform: "capitalize",
                    fontFamily: "Montserrat",
                    fontSize: "20px",
                    fontWeight: "500",
                    height: "45px",
                    background:
                      "linear-gradient(180deg, #5E60CE 10%, #5390D9 80%)",
                    "&:hover": {
                      background:
                        "linear-gradient(230deg, #fff 50%, #fff 100%)",
                      color: "#5E60CE",
                    },
                  }}
                >
                  Add Administrator
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddAdministrator;
