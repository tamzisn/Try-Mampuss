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
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import FileCard from "./FileCard";
interface ImportConfigurationProps {
  open: boolean;
  onClose: () => void;
}

const ImportConfiguration: React.FC<ImportConfigurationProps> = (props) => {
  const [files, setFiles] = useState<{ name: string; size: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null);
    const newFiles = acceptedFiles.map((file) => ({
      name: file.name,
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
    }));

    console.log("Accepted Files:", acceptedFiles);

    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
  }, []);

  const onDropRejected = useCallback((rejectedFiles: any) => {
    const rejectedFile = rejectedFiles[0];
    if (rejectedFile.errors[0].code === "file-too-large") {
      setError("File size exceeds the 10GB limit.");
    } else if (rejectedFile.errors[0].code === "file-invalid-type") {
      setError("Invalid file type. Only ZIP files are allowed.");
    }
    console.log("Rejected Files:", rejectedFiles);
    setOpenSnackbar(true);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    accept: {
      "application/zip": [".zip"],
    },
    maxSize: 10 * 1024 * 1024 * 1024,
  });
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

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
              bgcolor: "#202020",
              backgroundImage: 'url("/public/Bg Import.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              //   opacity: "0.1",
              boxShadow: 24,
              px: 10,
              py: 4,
              //   p: 4,
              outline: "none",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
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
                // bgcolor: "#2e2e",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // pr: "23px",
              }}
            >
              <CloseIcon
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "60px",
                  height: "60px",
                  // pr: "20px",
                }}
              />
            </IconButton>
            {/* Title */}
            <Box
              sx={{
                width: "100%",
                height: "15%",
                // bgcolor: "#fff",
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
                IMPORT CONFIGURATION
              </Typography>
            </Box>
            {/* Input */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                // bgcolor: "#000",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              {/* Top */}
              <Box
                sx={{
                  width: "100%",
                  height: "85%",
                  //   bgcolor: "#000",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                {/* Drop Area */}
                <Box
                  {...getRootProps()}
                  sx={{
                    width: "100%",
                    height: "75%",
                    bgcolor: "#292929",
                    borderRadius: "4px",
                    border: "2px dashed #5390D9",
                    pt: "20px",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                >
                  <input {...getInputProps()} />

                  {/* Text */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "10%",
                      pl: "40px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        width: "100%",
                        height: "100%",
                        fontFamily: "Montserrat",
                        fontWeight: "800",
                        fontSize: "25px",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Upload Files
                    </Typography>
                  </Box>

                  {/* Main Content */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "90%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "215px",
                        height: "170px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <Box>
                        <img src="/public/Dnd.svg" alt="Drag and Drop Icon" />
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          pb: "10px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Montserrat",
                            fontSize: "16px",
                            fontWeight: "700",
                            color: "#fff",
                          }}
                        >
                          {isDragActive
                            ? "Drop the files here..."
                            : "Drag and Drop files here"}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Montserrat",
                            fontSize: "12px",
                            fontWeight: "300",
                            color: "#fff",
                          }}
                        >
                          Files Supported ZIP only.
                        </Typography>
                      </Box>

                      <Button
                        sx={{
                          width: "95px",
                          height: "28px",
                          color: "#fff",
                          bgcolor: "#535353",
                          fontFamily: "Montserrat",
                          fontSize: "12px",
                          fontWeight: "600",
                          textTransform: "capitalize",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          const fileInput = document.querySelector(
                            'input[type="file"]'
                          ) as HTMLInputElement;
                          if (fileInput) {
                            fileInput.click();
                          }
                        }}
                      >
                        Choose File
                      </Button>

                      <Typography
                        sx={{
                          fontFamily: "Montserrat",
                          fontSize: "11px",
                          fontWeight: "300",
                          color: "#fff",
                        }}
                      >
                        Maximum size 10gb
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {/* File */}
                {files.map((file, index) => (
                  <FileCard
                    key={index}
                    fileName={file.name}
                    fileSize={file.size}
                    onRemove={() => removeFile(index)}
                  />
                ))}
              </Box>
              {/* Button */}
              <Box
                sx={{
                  width: "100%",
                  height: "11%",
                  //   bgcolor: "#000",
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
                    // bgcolor: "#535353",
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
                    width: "128px",
                    border: "1px solid #5E60CE",
                    bgcolor: "#5E60CE",
                    color: "#fff",
                    borderRadius: "5px",
                    textTransform: "capitalize",
                    fontFamily: "Montserrat",
                    fontSize: "20px",
                    fontWeight: "500",
                    height: "45px",
                    disply: "flex",
                    gap: "10px",
                    // "&:hover": {
                    //   backgroundColor: "#fff",
                    //   color: "#5E60CE",
                    //   borderRadius: "5px",
                    // },
                  }}
                >
                  Import
                  <img
                    src="/public/Import.svg"
                    alt="/"
                    style={{ width: "17px", height: "17px" }}
                  />
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ImportConfiguration;
