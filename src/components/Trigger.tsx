import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

interface TriggerProps {
  triggerName: string;
  triggerDescription: string;
  // onRemove: () => void;
}

const Trigger: React.FC<TriggerProps> = (props) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const toggleExpand = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
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

  return (
    <div>
      {/* Trigger Card */}
      <Box
        sx={{
          width: "100%",
          height: expanded ? "450px" : "73px",
          //   height: "58px",
          //   height: "450px",
          borderRadius: "11px",
          background: "#2E2E2E",
          border: "solid 1px #5E60CE",
          p: "10px 20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Trigger List */}
        <Box
          sx={{
            width: "100%",
            height: "58px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            // bgcolor: "#2e2e",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "21px",
              fontWeight: "700",
              color: "#fff",
            }}
          >
            {/* Trigger Name */}
            {props.triggerName}
          </Typography>
          <Button
            onClick={toggleExpand}
            sx={{
              width: "20px",
              height: "20px",
              minWidth: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DropArrow open={expanded} />
          </Button>
        </Box>
        {/* Field Trigger Form */}
        {expanded && (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              // bgcolor: "#000",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            {/* Trigger Name */}
            <Box
              sx={{
                width: "100%",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "21px",
                  color: "#fff",
                }}
              >
                Trigger Name
              </Typography>
              <TextField
                value={props.triggerName}
                required
                id="outlined-required"
                inputProps={{
                  sx: {
                    color: "#fff", // Warna teks di dalam input
                    height: "auto",
                  },
                }}
                sx={{
                  width: "100%", // Lebar TextField
                  height: "46px", // Tinggi TextField
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "#2e2e2e", // Background input field
                    borderRadius: "11px", // Border radius pada input field
                    "& fieldset": {
                      border: "solid 2px #5E60CE",
                    },
                    "&:hover fieldset": {
                      borderColor: "#5E60CE", // Border saat hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#5246DB", // Border saat focused
                    },
                  },
                }}
              />
            </Box>
            {/* Trigger */}
            <Box
              sx={{
                width: "100%",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "21px",
                  color: "#fff",
                }}
              >
                Trigger
              </Typography>
              <TextField
                value={props.triggerDescription}
                id="outlined-multiline-flexible"
                multiline
                maxRows={4}
                inputProps={{
                  sx: {
                    color: "#fff",
                    height: "125px",
                  },
                }}
                sx={{
                  width: "100%",
                  height: "125px",
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "#2e2e2e", // Background input field
                    borderRadius: "11px", // Border radius pada input field
                    "& fieldset": {
                      border: "solid 2px #5E60CE",
                    },
                    "&:hover fieldset": {
                      borderColor: "#5E60CE", // Border saat hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#5246DB", // Border saat focused
                    },
                  },
                  "& .MuiInputBase-input": {
                    maxHeight: "100%",
                    color: "#fff",
                    overflowY: "auto",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": {
                      display: "none",
                    },
                  },
                }}
              />
            </Box>
            {/* Button */}
            <Box
              sx={{
                width: "100%",
                height: "auto",
                //   bgcolor: "#fff",
                display: "flex",
                justifyContent: "end",
                gap: "20px",
              }}
            >
              <Button
                // onClick={props.onRemove}
                sx={{
                  border: "1px solid #FF0000",
                  color: "#fff",
                  borderRadius: "5px",
                  textTransform: "capitalize",
                  fontFamily: "Montserrat",
                  fontSize: "13px",
                  fontWeight: "500",
                  height: "30px",

                  "&:hover": {
                    backgroundColor: "#FF0000",
                    color: "#fff",
                  },
                }}
              >
                Remove Trigger
              </Button>
              <Button
                sx={{
                  width: "118px",
                  height: "30px",
                  borderRadius: "3px",
                  background:
                    "linear-gradient(75deg, #4EA8DE 0%, #5E60CE 100%)",
                  color: "#fff",
                  textTransform: "capitalize",
                  fontFamily: "Montserrat",
                  fontSize: "13px",
                  fontWeight: "500",
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
        )}
      </Box>
    </div>
  );
};

export default Trigger;
