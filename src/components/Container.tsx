import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../index.css";
import BackgroundImage from "./../../public/BackgroundTexture.png";

const Container = function (props: React.PropsWithChildren) {
  const BgImage = "/BackgroundTexture.png";
  return (
    <Box
      id="Dashboard"
      sx={{
        width: "100vw",
        backgroundImage: `url(${BgImage})`,
        height: "100vh",
        bgcolor: "#121212",
      }}
    >
      <Box
        sx={{
          paddingTop: "40px",

          width: "87vw",
          height: "88vh",
          maxHeight: "88vh",
          // backgroundColor: "#eaea",
          display: "flex",
          gap: "20px",
          margin: "auto",
        }}
      >
        <Sidebar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: "20px",
            // bgcolor: "#2ee",
          }}
        >
          <Topbar />
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};

export default Container;
