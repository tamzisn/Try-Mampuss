import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

interface FileProps {
  fileName: string;
  fileSize: string;
  onRemove: () => void;
  // index: number;
}

const FileCard: React.FC<FileProps> = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "20%",
        bgcolor: "#292929",
        borderRadius: "4px",
        border: "2px solid #5390D9",
        position: "relative",
      }}
    >
      {/* Tombol Close */}
      <IconButton
        sx={{
          position: "absolute",
          top: "5px",
          right: "5px",
          color: "#fff",
        }}
        aria-label="close"
        onClick={props.onRemove} // Menggunakan callback dari props
      >
        <CloseIcon />
      </IconButton>

      {/* Kontainer File */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          pl: "25px",
          gap: "20px",
        }}
      >
        {/* Ikon File */}
        <Box
          sx={{
            width: "50px",
            height: "50px",
            border: "0.55px solid #5390D9",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/public/Zip.svg" // Ikon file, bisa disesuaikan
              alt="File Icon"
              style={{ width: "23px", height: "26px" }}
            />
          </Box>
        </Box>

        {/* Nama File & Ukuran */}
        <Box
          sx={{
            width: "85%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Montserrat",
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "16px",
            }}
          >
            {props.fileName} {/* Nama file dari props */}
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontFamily: "Montserrat",
              fontWeight: "500",
              fontSize: "13.5px",
              lineHeight: "16px",
            }}
          >
            {props.fileSize} {/* Ukuran file dari props */}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FileCard;
