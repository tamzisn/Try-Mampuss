import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Collapse from "@mui/material/Collapse";

const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <svg>
      <Box
        component="polygon"
        points="0,100 50,0, 100,100"
        sx={(theme) => ({
          fill: theme.palette.common.white,
          stroke: theme.palette.divider,
          strokeWidth: 1,
        })}
      />
    </svg>
  </Paper>
);

export default function HoverCollapse() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Box
      sx={{ height: "100vh", bgcolor: "#7000f4" }}
      //   onMouseEnter={() => setexpanded(true)}
      //   onMouseLeave={() => setexpanded(false)}
    >
      <div>
        <Box
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
          sx={{ width: "200px", height: "500px", bgcolor: "#2c2c2c" }}
        >
          <Collapse
            orientation="horizontal"
            in={expanded}
            collapsedSize={40}
            sx={{ width: expanded ? 325 : 200, height: "90%" }}
          >
            {icon}
          </Collapse>
        </Box>
      </div>
    </Box>
  );
}
