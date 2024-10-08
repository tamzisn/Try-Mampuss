import { Box } from "@mui/material";
import React from "react";
import Dashboard from "./components/Container";

const Layout = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#2eee",
      }}
    >
      <Dashboard />
    </Box>
  );
};

export default Layout;
