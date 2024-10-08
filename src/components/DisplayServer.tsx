import { Box, Typography, Button } from "@mui/material";

type Server = {
  id: number;
  name: string;
  desc: string;
};

interface DisplayServerProps {
  server: Server;
  handleOnDrag: (
    e: React.DragEvent,
    index: number,
    server: Server,
    dragItem: any
  ) => void;
  handleDelete: (server: Server) => void;
  dragEnter: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  // dragEnd: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  index: number;
  dragItem: any;
  dragOverItem: any;
  handleSort: () => void;
}

const DisplayServer: React.FC<DisplayServerProps> = (props) => {
  // console.log(`Index of server: ${props.index}`);
  return (
    <Box
      key={props.server.id}
      draggable
      onDragStart={(e) => {
        props.handleOnDrag(e, props.index, props.server, props.dragItem);
        props.dragItem.current = props.index;
      }}
      onDragEnter={(e) => {
        props.dragEnter(e, props.index);
        props.dragOverItem.current = props.index;
      }}
      onDragEnd={(e) => {
        // props.dragEnd(e, props.index);
        props.handleSort();
      }}
      onDragOver={(e) => e.preventDefault()}
      sx={{
        width: "274px",
        height: "190px",
        bgcolor: "rgba(35, 28, 111, 0.2)",
        borderRadius: "10px",
        display: "flex",
        // flexDirection: 'column',
        // paddingY: '10px',
        gap: "10px",
        border: "1px solid rgba(56, 56, 56, 0.6)",
        pr: "10px",
        flexShrink: 0,
        animation: "slideIn 0.5s ease-in-out forwards",
      }}
    >
      <Box
        sx={{
          width: "10px",
          height: "100%",
          background: "linear-gradient(175deg, #5E60CE 0%, #5390D9 100%)",
          borderTopLeftRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          width: "230px",
          flexDirection: "column",
          gap: "39px",
          // justifyContent: 'center',
          paddingY: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            draggable="false"
            src="/public/Server.svg"
            alt=""
            style={{ width: "70px", height: "70px" }}
          />
          <Box>
            <Button
              sx={{
                padding: 0,
                minWidth: 0,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => props.handleDelete(props.server)}
            >
              <img
                draggable="false"
                src="/public/Button Delete Server.svg"
                alt=""
                style={{
                  width: "20px",
                  height: "20px",
                  alignItems: "end",
                  display: "flex",
                }}
              />
            </Button>
          </Box>
        </Box>
        <Box>
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
      </Box>
    </Box>
  );
};

export default DisplayServer;
