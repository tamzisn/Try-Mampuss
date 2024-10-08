import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import { Box, Button, ListItem } from "@mui/material";

export default function NestedList() {
  const [expanded, setExpanded] = React.useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <List
      //   disablePadding
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      sx={{
        ml: "50px",
        mt: "50px",
        // width: expanded ? "300px" : "72px",
        // maxWidth: "300px",
        height: "300px",
        bgcolor: "#2c2c2c",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        borderRadius: "15px",
        px: "10px",
        "&:hover": {
          width: "300px",
        },
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItem
        sx={{
          display: "flex",
          alignItems: "center",
          //   padding: "8px 16px",
          height: "65px",
          borderRadius: "15px",
          justifyContent: "center",
          backgroundColor: "#7000F4",
        }}
        disablePadding
      >
        <ListItemButton disableRipple sx={{}}>
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
                paddingLeft: "10px",
                display: "flex",
                alignItems: "center",
                pl: "20px",
              }}
            >
              Administrator
            </Typography>
          </Collapse>
        </ListItemButton>
      </ListItem>
      <ListItem
        sx={{
          display: "flex",
          alignItems: "center",
          //   padding: "8px 16px",
          height: "65px",
          borderRadius: "15px",
          justifyContent: "center",
          backgroundColor: "#7000F4",
        }}
        disablePadding
      >
        <ListItemButton disableRipple sx={{}}>
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
                paddingLeft: "10px",
                display: "flex",
                alignItems: "center",
                pl: "20px",
              }}
            >
              Administrator
            </Typography>
          </Collapse>
        </ListItemButton>
      </ListItem>
    </List>

    // <Box
    //   sx={{
    //     width: "100vw",
    //     height: "100vh",
    //     display: "flex",
    //     margin: "auto",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   {/* <List
    //     sx={{
    //       width: "100px",
    //       height: "800px",
    //       bgcolor: "#2c2c2c",
    //       borderRadius: "15px",
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //       p: "0",
    //       py: "15px",
    //       //   px: "10px",
    //     }}
    //   >
    //     <Button
    //       sx={{
    //         p: "0",
    //         width: "75px",
    //         height: "75px",
    //         bgcolor: "#7000f4",
    //         borderRadius: "15px",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "center",
    //         // gap: "20px",
    //       }}
    //     >
    //       <ListItemIcon
    //         sx={{
    //           minWidth: "0",
    //         }}
    //       >
    //         <img src="/public/Home.svg" alt="" />
    //       </ListItemIcon>
    //       <Collapse in={expanded} orientation="horizontal" timeout="auto">
    //         <Typography
    //           sx={{
    //             color: "#fff",
    //             fontFamily: "Montserrat",
    //             fontWeight: "500",
    //             fontSize: "25px",
    //             display: "flex",
    //             alignItems: "center",
    //           }}
    //         >
    //           Administrator
    //         </Typography>
    //       </Collapse>
    //     </Button>
    //   </List> */}

    // </Box>
  );
}
