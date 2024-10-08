import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import AdministratorCard from "../components/AdministratorCard";
import AddAdministrator from "../components/AddAdministrator";
import EditAdministrator from "../components/EditAdministrator";
import ImportConfiguration from "../components/ImportConfiguration";
import { User, initialUsers } from "../assets/User";
import Laptop from "../../public/Laptop.svg";

const Administrator = () => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [addAdministratorModal, setAddAdministratorModal] =
    useState<boolean>(false);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        // bgcolor: "#fff",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          width: "100%",
          height: "30%",
          bgcolor: "#262626",
          backgroundImage: 'url("/public/BG Administrator.svg")',
          borderRadius: "10px",
          display: "flex",
          position: "relative", // Set relative to allow absolute positioning inside
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "20%",
            // bgcolor: "#fff",
          }}
        >
          <img
            draggable="false"
            src={Laptop}
            alt=""
            style={{
              height: "150%",
              position: "absolute",
              top: "-50px",
              left: "-35px",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "80%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "auto",
              height: "100%",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <Typography
              sx={{
                fontWeight: "900",
                fontFamily: "Montserrat",
                fontSize: "60px",
                color: "#fff",
                lineHeight: "0.6",
              }}
            >
              MANAGE
            </Typography>
            <Typography
              sx={{
                fontWeight: "900",
                fontFamily: "Montserrat",
                fontSize: "60px",
                color: "#fff",
              }}
            >
              ADMINISTRATOR
            </Typography>
          </Box>
          {/* Add Administrator */}
          <Box
            sx={{
              width: "auto",
              height: "100%",
              justifyContent: "end",
              display: "flex",
              alignItems: "end",
              paddingRight: "30px",
              paddingBottom: "20px",
            }}
          >
            <Button
              onClick={() => setAddAdministratorModal(true)}
              sx={{
                border: "1px solid #5246DB",
                color: "#fff",
                borderRadius: "5px",
                padding: "0px 10px",
                minWidth: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  background:
                    "linear-gradient(180deg, #5E60CE 10%, #5390D9 80%)",
                  color: "#fff",
                  borderRadius: "5px",
                },
              }}
            >
              <Box
                sx={{
                  width: "200px",
                  height: "41px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    // height: "100%",
                    display: "flex",
                    alignItems: "center",
                    textTransform: "capitalize",
                    fontFamily: "Montserrat",
                    fontWeight: "400",
                    fontSize: "24",
                    color: "#fff",
                  }}
                >
                  Add Administrator
                </Typography>
                <Box
                  sx={{
                    height: "100%",
                    // bgcolor: "#2e2e",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/public/Arrow.svg"
                    alt=""
                    style={{
                      height: "15px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  />
                </Box>
              </Box>
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Container List User */}
      <Box
        sx={{
          width: "100%",
          height: "70%",
          // bgcolor: "#2cc",
          maxHeight: "530px",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "scrollbar-width": "none",
        }}
      >
        {/* User List */}
        <AdministratorCard
          user={{
            id: 0,
            name: "Novan",
            email: "novan@malifax.net",
            role: "Visitor",
          }}
        />
      </Box>

      <Box className="modal-area">
        <AddAdministrator
          open={addAdministratorModal}
          onClose={() => setAddAdministratorModal(false)}
        />
      </Box>
    </Box>
  );
};

export default Administrator;
