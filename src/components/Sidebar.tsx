import {
  Box,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddAdministrator from "./AddAdministrator";
import AddTrigger from "./AddTriggerModal";

const Sidebar = () => {
  const [addTriggerModal, setAddTriggerModal] = useState<boolean>(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Box
        sx={{
          height: "100%",
          width: "100px",
          // bgcolor: "#fff",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        {/* LOGO */}
        <Box
          sx={{
            height: "12%",
            borderRadius: "15px",
            background: "linear-gradient(160deg, #1D1D1D 0%, #2C2C2C 100%)",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <img src="/public/Logo.svg" alt="" style={{}} />
        </Box>

        {/* MENU */}
        <List
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          sx={{
            boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.25)",
            height: "90%",
            width: "100px",
            background: "linear-gradient(95deg, #1D1D1D 0%, #2C2C2C 100%)",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 999,
            p: "15px",
            transition: "width 0.5s ease",
            "&:hover": {
              width: "325px",
            },
          }}
        >
          {/* Wrapper Menu Items */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "100%",
              height: "80%",
            }}
          >
            {/* Dashboard */}
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                height: "65px",
                borderRadius: "15px",
                justifyContent: "center",
                // background: "linear-gradient(130deg, #7000F4, #9D00F2)",
                background:
                  window.location.pathname === "/"
                    ? "linear-gradient(150deg, #7000F4 0%, #9D00F2 100%)"
                    : "transparent",
                "&:hover": {
                  // bgcolor: "#7000F4",
                  background:
                    "linear-gradient(150deg, #7000F4 0%, #9D00F2 100%)",
                },
              }}
              disablePadding
            >
              <ListItemButton
                onClick={() => (window.location.href = "/")}
                disableRipple
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  gap: "25px",
                  pl: "19px",
                  pr: "0",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "0",
                  }}
                >
                  <img src="/public/Home.svg" alt="Administrator" />
                </ListItemIcon>
                <Collapse in={expanded} orientation="horizontal" timeout="auto">
                  <Typography
                    sx={{
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                      fontSize: "20px",
                      p: "0",
                      opacity: expanded ? 1 : 0,
                      transform: expanded
                        ? "translateX(0)"
                        : "translateX(-20px)",
                      transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                  >
                    Dashboard
                  </Typography>
                </Collapse>
              </ListItemButton>
            </ListItem>
            {/* Administrator */}
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                height: "65px",
                borderRadius: "15px",
                justifyContent: "center",
                background:
                  window.location.pathname === "/Administrator"
                    ? "linear-gradient(150deg, #7000F4 0%, #9D00F2 100%)"
                    : "transparent",
                "&:hover": {
                  // bgcolor: "#7000F4",
                  background:
                    "linear-gradient(150deg, #7000F4 0%, #9D00F2 100%)",
                },
              }}
              disablePadding
            >
              <ListItemButton
                onClick={() => (window.location.href = "/Administrator")}
                disableRipple
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  gap: "25px",
                  pl: "19px",
                  pr: "0",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "0",
                  }}
                >
                  <img src="/public/Administrator.svg" alt="Administrator" />
                </ListItemIcon>
                <Collapse in={expanded} orientation="horizontal" timeout="auto">
                  <Typography
                    sx={{
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                      fontSize: "20px",
                      p: "0",
                      opacity: expanded ? 1 : 0,
                      transform: expanded
                        ? "translateX(0)"
                        : "translateX(-20px)",
                      transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                  >
                    Administrator
                  </Typography>
                </Collapse>
              </ListItemButton>
            </ListItem>
            {/* Activity Log */}
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                height: "65px",
                borderRadius: "15px",
                justifyContent: "center",
                background:
                  window.location.pathname === "/Log"
                    ? "linear-gradient(150deg, #7000F4 0%, #9D00F2 100%)"
                    : "transparent",
                "&:hover": {
                  // bgcolor: "#7000F4",
                  background:
                    "linear-gradient(150deg, #7000F4 0%, #9D00F2 100%)",
                },
              }}
              disablePadding
            >
              <ListItemButton
                onClick={() => (window.location.href = "/Log")}
                disableRipple
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  gap: "25px",
                  pl: "19px",
                  pr: "0",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "0",
                  }}
                >
                  <img src="/public/Log.svg" alt="Log" />
                </ListItemIcon>
                <Collapse in={expanded} orientation="horizontal" timeout="auto">
                  <Typography
                    sx={{
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                      width: "200px",
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                      fontSize: "20px",
                      p: "0",
                      opacity: expanded ? 1 : 0,
                      transform: expanded
                        ? "translateX(0)"
                        : "translateX(-20px)",
                      transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                  >
                    Activity Log
                  </Typography>
                </Collapse>
              </ListItemButton>
            </ListItem>
            {/* Trigger */}
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                height: "65px",
                borderRadius: "15px",
                justifyContent: "center",
                background:
                  window.location.pathname === "/Trigger" || addTriggerModal
                    ? "linear-gradient(150deg, #7000F4 0%, #9D00F2 100%)"
                    : "transparent",
                "&:hover": {
                  // bgcolor: "#7000F4",
                  background:
                    "linear-gradient(150deg, #7000F4 0%, #9D00F2 100%)",
                },
              }}
              disablePadding
            >
              <ListItemButton
                // onClick={() => (window.location.href = "/Trigger")}
                onClick={() => setAddTriggerModal(true)}
                disableRipple
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  gap: "25px",
                  pl: "19px",
                  pr: "0",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "0",
                  }}
                >
                  <img src="/public/Trigger.svg" alt="Administrator" />
                </ListItemIcon>
                <Collapse in={expanded} orientation="horizontal" timeout="auto">
                  <Typography
                    sx={{
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                      fontSize: "20px",
                      p: "0",
                      opacity: expanded ? 1 : 0,
                      transform: expanded
                        ? "translateX(0)"
                        : "translateX(-20px)",
                      transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                  >
                    Trigger
                  </Typography>
                </Collapse>
              </ListItemButton>
            </ListItem>
            {/* Setting */}
            <ListItem
              sx={{
                display: "flex",
                alignItems: "center",
                height: "65px",
                borderRadius: "15px",
                justifyContent: "center",
                background:
                  window.location.pathname === "/Setting"
                    ? "linear-gradient(150deg, #7000F4 0%, #9D00F2 100%)"
                    : "transparent",
                "&:hover": {
                  // bgcolor: "#7000F4",
                  background:
                    "linear-gradient(150deg, #7000F4 0%, #9D00F2 100%)",
                },
              }}
              disablePadding
            >
              <ListItemButton
                onClick={() => (window.location.href = "/Setting")}
                disableRipple
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  gap: "25px",
                  pl: "19px",
                  pr: "0",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: "0",
                  }}
                >
                  <img src="/public/Setting.svg" alt="Administrator" />
                </ListItemIcon>
                <Collapse in={expanded} orientation="horizontal" timeout="auto">
                  <Typography
                    sx={{
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                      fontFamily: "Montserrat",
                      fontWeight: "500",
                      fontSize: "20px",
                      p: "0",
                      opacity: expanded ? 1 : 0,
                      transform: expanded
                        ? "translateX(0)"
                        : "translateX(-20px)",
                      transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                  >
                    Setting
                  </Typography>
                </Collapse>
              </ListItemButton>
            </ListItem>
          </Box>
          {/* Exit */}
          <ListItem
            sx={{
              display: "flex",
              alignItems: "center",
              height: "65px",
              borderRadius: "15px",
              justifyContent: "center",
              background:
                window.location.pathname === "/Login"
                  ? "linear-gradient(150deg, #7000F4 0%, #9D00F2 100%)"
                  : "transparent",
              "&:hover": {
                // bgcolor: "#7000F4",
                background: "linear-gradient(150deg, #7000F4 0%, #9D00F2 100%)",
              },
            }}
            disablePadding
          >
            <ListItemButton
              onClick={() => (window.location.href = "/Login")}
              disableRipple
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                gap: "25px",
                pl: "15px",
                pr: "0",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "0",
                }}
              >
                <img src="/public/Exit.svg" alt="Administrator" />
              </ListItemIcon>
              <Collapse in={expanded} orientation="horizontal" timeout="auto">
                <Typography
                  sx={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    fontFamily: "Montserrat",
                    fontWeight: "500",
                    fontSize: "20px",
                    p: "0",
                    opacity: expanded ? 1 : 0,
                    transform: expanded ? "translateX(0)" : "translateX(-20px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                  }}
                >
                  Exit
                </Typography>
              </Collapse>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box className="modal-area">
        <AddTrigger
          open={addTriggerModal}
          onClose={() => setAddTriggerModal(false)}
        />
      </Box>
    </>
  );
};

export default Sidebar;
