import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
  Switch,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import React, { useState } from "react";

import { initialUsers, User } from "../assets/User";

const DropArrow = ({ open }: { open: boolean }) => (
  <img
    src="/public/DropArrow.svg"
    alt="custom icon"
    style={{
      width: "19px",
      height: "14px",
      transition: "transform 0.3s ease",
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
    }}
  />
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const users = initialUsers.map((user: User) => user.name);

const Log = () => {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  const [open, setOpen] = useState(false);

  const handleOpenRole = () => setOpen(true);
  const handleCloseRole = () => setOpen(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        // bgcolor: "#2C2C2C",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* Filter and Search */}
      <Box
        sx={{
          width: "100%",
          height: "8%",
          borderRadius: "15px",
          // bgcolor: "red",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Text & Filters */}
        <Box
          sx={{
            width: "70%",
            height: "100%",
            // bgcolor: "#2cc",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // gap: "17px",
          }}
        >
          {/* Text */}
          <Box
            sx={{
              // bgcolor: "#2e2e",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "36px",
                fontWeight: "900",
                color: "#fff",
              }}
            >
              APPLICATION LOG
            </Typography>
          </Box>
          {/* Filters */}
          <Box
            sx={{
              // bgcolor: "#2e2e",
              height: "100%",
              width: "62%",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* User */}
            <Box
              sx={{
                width: "34%",
                maxWidth: "30%",
                height: "100%",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControl sx={{ width: "100%", height: "100%" }}>
                <Select
                  multiple
                  displayEmpty
                  onOpen={handleOpenRole}
                  onClose={handleCloseRole}
                  IconComponent={() => <DropArrow open={open} />}
                  value={personName}
                  onChange={handleChange}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <span>Users</span>;
                    }
                    return (
                      <span style={{ fontSize: "16px" }}>
                        {selected.join(", ")}
                      </span>
                    );
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        width: "10%",
                        maxWidth: "none",
                      },
                    },
                  }}
                  inputProps={{ "aria-label": "Without label" }}
                  sx={{
                    width: "100%",
                    height: "100%",
                    pr: "20px",

                    color: "#fff",
                    "& .MuiSelect-select": {
                      color: "#fff",
                      fontFamily: "Montserrat",
                      fontSize: "24px",
                      fontWeight: "400",
                      display: "flex",
                      alignItems: "center",
                      padding: "16.5 32 14",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#5246DB",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#5246DB",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#5246DB",
                    },
                    "& .MuiSelect-icon": {
                      color: "#fff",
                    },
                  }}
                >
                  <MenuItem disabled value="">
                    <span>Users</span>
                  </MenuItem>
                  {users.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      sx={{
                        color: "#5246DB",
                        width: "100%",
                      }}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            {/* StartDate */}
            <Box
              sx={{
                width: "33%",
                height: "100%",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControl sx={{ width: "100%", height: "100%" }}>
                <TextField
                  type="date"
                  placeholder="Start Date"
                  label="Start Date"
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      color: "#fff",
                      fontFamily: "Montserrat",
                      fontSize: "15px",
                      fontWeight: "400",
                    },
                  }}
                  sx={{
                    width: "100%",
                    height: "100%",
                    color: "#fff",
                    "& .MuiInputBase-input": {
                      color: "#fff",
                      fontFamily: "Montserrat",
                      fontSize: "24px",
                      fontWeight: "400",
                      padding: "16.5 32 14",
                      cursor: "pointer",
                    },
                    "& .MuiOutlinedInput-root": {
                      // Default border
                      "& fieldset": {
                        borderColor: "#5246DB",
                      },
                      // Border saat hover
                      "&:hover fieldset": {
                        borderColor: "#5246DB",
                      },
                      // Border saat fokus
                      "&.Mui-focused fieldset": {
                        borderColor: "#5246DB",
                      },
                    },
                  }}
                  InputProps={{
                    sx: {
                      height: "100%",
                      color: "#fff",
                    },
                  }}
                />
              </FormControl>
            </Box>

            {/* EndDate */}
            <Box
              sx={{
                width: "33%",
                height: "100%",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormControl sx={{ width: "100%", height: "100%" }}>
                <TextField
                  type="date"
                  label="End Date"
                  InputLabelProps={{
                    shrink: true,
                    style: {
                      color: "#fff",
                      fontFamily: "Montserrat",
                      fontSize: "15px",
                      fontWeight: "400",
                    },
                  }}
                  sx={{
                    width: "100%",
                    height: "100%",
                    "& .MuiInputBase-input": {
                      color: "#fff",
                      fontFamily: "Montserrat",
                      fontSize: "24px",
                      fontWeight: "400",
                      padding: "16.5 32 14",
                      cursor: "pointer",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#5246DB",
                      },
                      "&:hover fieldset": {
                        borderColor: "#5246DB",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#5246DB",
                      },
                      "& .MuiSvgIcon-root": {
                        color: "#fff",
                      },
                    },
                  }}
                  InputProps={{
                    sx: {
                      height: "100%",
                    },
                  }}
                />
              </FormControl>
            </Box>
          </Box>
        </Box>

        {/* Search */}
        <Box
          sx={{
            width: "23%",
            height: "100%",
            // bgcolor: "#2cc",
            borderRadius: "5px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            variant="outlined"
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              borderRadius: "5px",

              "& .MuiOutlinedInput-root": {
                height: "100%",
                padding: "0",
                borderColor: "#332A98",
                "& fieldset": {
                  borderColor: "#332A98", // Default border color
                },
                "&:hover fieldset": {
                  borderColor: "#332A98", // Hover border color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#332A98", // Focused border color
                },
                "& input": {
                  padding: "0 8px",
                },
              },
            }}
            InputProps={{
              sx: {
                color: "#fff",
                fontFamily: "Montserrat",
                fontSize: "20px",
                fontWeight: "400",
                height: "100%",
                width: "100%",
              },
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    pr: "10px",
                  }}
                >
                  <img
                    src="/public/Search.svg"
                    alt="icon"
                    style={{ width: "24px", height: "24px" }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      {/* Content */}
      <Box
        sx={{
          width: "100%",
          height: "90%",
          // bgcolor: "#2c2c2c",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Log */}
        <Box
          sx={{
            width: "100%",
            height: "90%",
            borderRadius: "15px",
            bgcolor: "#252525",
            display: "flex",
            flexDirection: "column",
            px: "25px",
            pt: "15px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "50px",
              // bgcolor: "#332A98",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Text */}
            <Box
              sx={{
                // bgcolor: "#2cc",
                height: "100%",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Montserrat",
                  fontSize: "20px",
                  fontWeight: "800",
                }}
              >
                VM PROD 1
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Montserrat",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                has been removed from shutdown list by
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Montserrat",
                  fontSize: "20px",
                  fontWeight: "800",
                }}
              >
                ADMIN-TWO
              </Typography>
            </Box>
            {/* Date */}
            <Box
              sx={{
                height: "100%",
                width: "192px",
                border: "1px solid #5246DB",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "24px",
                  fontWeight: "400",
                  color: "#fff",
                }}
              >
                mm/dd/yyyy
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Switch */}
        <Box
          sx={{
            width: "100%",
            height: "10%",
            // bgcolor: "#2e2e",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              width: "208px",
              height: "100%",
              display: "flex",
              alignItems: "center",
              jusifyContent: "center",
              // bgcolor: "#000",
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontFamily: "Montserrat",
                fontSize: "24px",
                fontWeight: "400",
              }}
            >
              Switch Data log
            </Typography>
          </Box>
          <Box
            sx={{
              width: "80px",
              height: "100%",
              display: "flex",
              alignItems: "center",
              jusifyContent: "center",
              // bgcolor: "#000",
            }}
          >
            {/* <Switch
              size="medium"
              sx={{
                "& .MuiSwitch-root": {
                  width: 70,
                  height: 35,
                },
                "& .MuiSwitch-switchBase": {
                  color: "#464646",
                  "&.Mui-checked": {
                    color: "#5E60CE",
                  },
                  "&.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: "#5E60CE",
                  },
                },
                "& .MuiSwitch-track": {
                  backgroundColor: "#464646",
                },
                "& .MuiSwitch-thumb": {
                  backgroundColor: "#5390D9",
                  // width: 35,
                  // height: 35,
                },
              }}
            /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Log;
