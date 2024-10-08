import { Avatar, Box, Typography } from "@mui/material";

const Topbar = () => {
  function stringAvatar(name: string) {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <Box
      sx={{
        height: "12%",
        width: "100%",
        // bgcolor: "#2C2C2C",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      {/* Malifax */}
      <Box
        sx={{
          height: "100%",
          width: "22%",
          borderRadius: "15px",
          //   bgcolor: "#2cc",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src="/public/Malifax.svg" alt="" />
      </Box>
      {/* Welcome and User */}
      <Box
        sx={{
          height: "100%",
          width: "78%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Welcome */}
        <Box
          sx={{
            width: "495px",
            height: "100%",
            // bgcolor: '#fff',
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              color: "#fff",
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "30px",
                fontFamily: "Montserrat",
              }}
            >
              WELCOME,
            </Typography>
            <Typography
              sx={{
                fontWeight: "regular",
                fontFamily: "Montserrat",
                fontSize: "30px",
              }}
            >
              ADMIN-ONE
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: "regular",
              fontFamily: "Montserrat",
              fontSize: "18px",
              color: "#A9A9A9",
            }}
          >
            Let’s keep everything running smoothly and prevent any issues today.
          </Typography>
        </Box>
        {/* User Profile */}
        <Box
          sx={{
            width: "250px",
            height: "100%",
            // bgcolor: '#fff',
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "regular",
              fontFamily: "Montserrat",
              fontSize: "20px",
              color: "#fff",
            }}
          >
            ADMIN-ONE
          </Typography>
          <Avatar {...stringAvatar("Admin One")} />
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
