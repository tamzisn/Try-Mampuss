import React from "react";
import { Box, Typography, Button } from "@mui/material";

type Server = {
  id: number;
  name: string;
  desc: string;
};

interface ListServerProps {
  server: Server;
  handleOnDrag: (e: React.DragEvent, index: number, server: Server) => void;
  handleButtonAdd: (server: Server) => void;
  index: number;
}
const ListServer: React.FC<ListServerProps> = (props) => {
  return (
    <Box
      key={props.server.id}
      draggable
      onDragStart={(e) => props.handleOnDrag(e, props.index, props.server)}
      sx={{
        flexShrink: 0,
        // bgcolor: "#161616",
        background:
          "linear-gradient(90deg, #48008D 0%, #161616 21%, #161616 100%)",
        width: "100%",
        borderRadius: "10px",
        height: "65px",
        display: "flex",
        justifyContent: "space-between",
        pr: "10px",
        // pl: '30px',
        cursor: "pointer",
        // marginBottom: "10px",
      }}
    >
      <Box
        sx={{
          width: "7px",
          height: "100%",
          bgcolor: "#5E60CE",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      ></Box>
      {/* Text */}
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat",
            lineHeight: "1",
            fontWeight: "medium",
            fontSize: "16px",
            color: "#fff",
          }}
        >
          {props.server.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Montserrat",
            lineHeight: "1",
            fontWeight: "medium",
            fontSize: "16px",
            color: "#fff",
          }}
        >
          {props.server.desc}
        </Typography>
      </Box>

      {/* Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          sx={{
            padding: 0,
            minWidth: 0,
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => props.handleButtonAdd(props.server)}
        >
          <img
            draggable="false"
            src="/public/Button Add Server.svg"
            alt="Add"
            style={{ width: "24px", height: "24px" }}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default ListServer;
