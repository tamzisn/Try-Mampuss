import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./Login.css";
// import BackgroundLogin from "../../public/BackgroundTexture.png";

const Login = () => {
  const BgImage = "/BackgroundTexture.png";
  return (
    <Box
      sx={{
        width: "100vw",
        backgroundImage: `url(${BgImage})`,
        height: "100vh",
        bgcolor: "#000",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "100%",
          //   bgcolor: "#fff",
          display: "flex",
          pt: "30px",
          justifyContent: "center",
          //   alignItems: "center",
        }}
      >
        <img
          src="/public/Illustration.png"
          alt=""
          style={{
            objectFit: "contain",
            width: "900px",
            height: "830px",
          }}
        />
      </Box>

      <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          //   bgcolor: "#fff",
          pt: "50px",
        }}
      >
        {/* Image */}
        <Box
          sx={{
            width: "90%",
            height: "70px",
            // bgcolor: "#2eee",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              //   height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="/public/Mampuss.svg" alt="" />
          </Box>
          <Box
            sx={{
              //   height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="/public/MalifaxWhite.svg" alt="" />
          </Box>
        </Box>
        {/* Login */}
        <Box
          sx={{
            width: "90%",
            height: "750px",
            // bgcolor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "520px",
              height: "400px",
              //   bgcolor: "#000",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              //   justifyContent: "center",
              gap: "90px",
            }}
          >
            {/* Text */}
            <Box
              sx={{
                height: "105px",
                width: "100%",
                // bgcolor: "#2cc",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "86px",
                  fontWeight: "900",
                  color: "#fff",
                  lineHeight: "86px",
                }}
              >
                Hi Admin!
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "23px",
                  fontWeight: "400",
                  color: "#fff",
                }}
              >
                Welcome to MAMPUSS
              </Typography>
            </Box>
            {/* Button */}
            <Box
              sx={{
                width: "100%",
                height: "70px",
                // bgcolor: "#2cc",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={() => (window.location.href = "/")}
                sx={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "57px",
                  // bgcolor: "#5E60CE",
                  background:
                    "linear-gradient(90deg, #5E60CE 0%, #5390D9 100%)",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <img src="/public/Microsoft.svg" alt="" />
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    fontSize: "23px",
                    color: "#fff",
                    textTransform: "capitalize",
                  }}
                >
                  Sign in with Microsoft
                </Typography>
              </Button>
            </Box>
            {/* Text */}
            <Box
              sx={{
                width: "100%",
                height: "47px",
                // bgcolor: "#2cc",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Montserrat",
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "#999999",
                  textAlign: "center",
                }}
              >
                If you believe you should have access but are unable to log in,
                please contact your administrator for assistance.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
