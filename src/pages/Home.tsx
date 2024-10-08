import React, { useEffect, useState } from "react";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import DisplayServer from "../components/DisplayServer";
import ListServer from "../components/ListServer";
import DropArea from "../components/DropArea";
import { useFormState } from "react-hook-form";

const Home = () => {
  type Server = {
    id: number;
    name: string;
    desc: string;
  };

  const [left, setLeft] = useState<Server[]>([
    { id: 1, name: "SERVER ONE", desc: "LOREM IPSUM DOLOR" },
    { id: 2, name: "SERVER TWO", desc: "LOREM IPSUM DOLOR" },
    { id: 3, name: "SERVER THREE", desc: "LOREM IPSUM DOLOR" },
    { id: 4, name: "SERVER FOUR", desc: "LOREM IPSUM DOLOR" },
    { id: 5, name: "SERVER FIVE", desc: "LOREM IPSUM DOLOR" },
    { id: 6, name: "SERVER SIX", desc: "LOREM IPSUM DOLOR" },
    { id: 7, name: "SERVER SEVEN", desc: "LOREM IPSUM DOLOR" },
    { id: 8, name: "SERVER EIGHT", desc: "LOREM IPSUM DOLOR" },
    { id: 9, name: "SERVER NINE", desc: "LOREM IPSUM DOLOR" },
    { id: 10, name: "SERVER TEN", desc: "LOREM IPSUM DOLOR" },
    { id: 11, name: "SERVER ELEVEN", desc: "LOREM IPSUM DOLOR" },
    { id: 12, name: "SERVER TWELVE", desc: "LOREM IPSUM DOLOR" },
    { id: 13, name: "SERVER THIRTEEN", desc: "LOREM IPSUM DOLOR" },
    { id: 14, name: "SERVER FOURTEEN", desc: "LOREM IPSUM DOLOR" },
    { id: 15, name: "SERVER FIVETEEN", desc: "LOREM IPSUM DOLOR" },
    { id: 16, name: "SERVER SIXTEEN", desc: "LOREM IPSUM DOLOR" },
    { id: 17, name: "SERVER SEVENTEEN", desc: "LOREM IPSUM DOLOR" },
    { id: 18, name: "SERVER EIGHTEEN", desc: "LOREM IPSUM DOLOR" },
  ]);
  const [filteredLeft, setFilteredServers] = useState<Server[]>(left);

  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const results = left.filter((left) =>
      left.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServers(results);
  }, [searchTerm, left]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const [right, setRight] = useState<Server[]>([]);

  // const [searchTermRight, setSearchTermRight] = useState<string>("");
  // const [filteredRight, setFilteredRight] = useState<Server[]>(right);
  // useEffect(() => {
  //   const resultsRight = right.filter((rightServer) =>
  //     rightServer.name.toLowerCase().includes(searchTermRight.toLowerCase())
  //   );
  //   setFilteredRight(resultsRight);
  // }, [searchTermRight, right]);
  // const handleSearchChangeRight = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   setSearchTermRight(event.target.value);
  // };

  function handleOnDrag(e: React.DragEvent, index: number, server: Server) {
    e.dataTransfer.setData("server", JSON.stringify(server));
    console.log("drag started", index);
  }

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    console.log("drag enter", index);
  };
  // const onDragEnd = (e: React.DragEvent<HTMLDivElement>, index: number) => {
  //   console.log("drag end", index);
  // };
  const dragItem = React.useRef<any>(null);
  const dragOverItem = React.useRef<any>(null);

  const handleSort = () => {
    let _right = [...right];

    const draggedItemContent = _right.splice(dragItem.current, 1)[0];

    _right.splice(dragOverItem.current, 0, draggedItemContent);

    dragItem.current = null;
    dragOverItem.current = null;

    setRight(_right);
  };

  function handleOnDrop(e: React.DragEvent, targetArea: "left" | "right") {
    e.preventDefault();
    const serverData = e.dataTransfer.getData("server");
    const server: Server = JSON.parse(serverData);

    if (targetArea === "left") {
      if (!left.some((item) => item.id === server.id)) {
        setLeft([...left, server]);
        setRight(right.filter((item) => item.id !== server.id));
      }
    } else if (targetArea === "right") {
      if (!right.some((item) => item.id === server.id)) {
        setRight([...right, server]);
        setLeft(left.filter((item) => item.id !== server.id));
      }
    }
  }

  function handleOnDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  function handleButtonAdd(server: Server) {
    if (!right.some((item) => item.id === server.id)) {
      setRight([...right, server]);
      setLeft(left.filter((item) => item.id !== server.id));
    }
  }

  function handleDelete(server: Server) {
    setRight(right.filter((item) => item.id !== server.id));
    setLeft([...left, server]);
  }

  const totalServers = left.length + right.length;
  const movedServersCount = right.length;

  return (
    <Box
      sx={{
        width: "100%",
        height: "85.5%",
        // bgcolor: "#2C2C",
        borderRadius: "15px",
        display: "flex",
        gap: "20px",
      }}
    >
      {/* Left Area Server */}
      <Box
        sx={{
          height: "100%",
          maxHeight: "100%",
          width: "22%",
          // bgcolor: "#2C2C2C",
          background: "linear-gradient(125deg, #1D1D1D 0%, #2C2C2C 100%)",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: "15px",
          gap: "17px",
        }}
      >
        {/* Text and Search */}
        <Box
          sx={{
            width: "87%",
            height: "12%",
            // bgcolor: '#5E60CE',
            display: "flex",
            color: "#fff",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "20px",
                fontFamily: "Montserrat",
              }}
            >
              Virtual
            </Typography>
            <Typography
              sx={{
                fontWeight: "700",
                fontSize: "20px",
                fontFamily: "Montserrat",
              }}
            >
              Machines
            </Typography>
          </Box>
          {/* Search */}
          <TextField
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            sx={{
              width: "160px",
              display: "flex",
              justifyContent: "center",
              borderRadius: "5px",
              height: "35px",
              "& .MuiOutlinedInput-root": {
                height: "35px",
                padding: "0",
                borderColor: "#332A98",
                "& fieldset": {
                  borderColor: "#332A98",
                },
                "&:hover fieldset": {
                  borderColor: "#332A98",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#332A98",
                },
                "& input": {
                  padding: "0 8px",
                },
              },
            }}
            InputProps={{
              sx: {
                color: "#fff",
              },
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <img draggable="false" src="/public/Search.svg" alt="icon" />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Container Server */}
        <Box
          onDrop={(e) => handleOnDrop(e, "left")}
          onDragOver={handleOnDragOver}
          sx={{
            width: "92%",
            height: "81%",
            maxHeight: "596px",
            overflowY: "auto",
            // bgcolor: "#2e2e",
            pr: "8px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            "&::-webkit-scrollbar": {
              display: "none",
            },
            "scrollbar-width": "none",
          }}
        >
          {/* List Server  */}
          {filteredLeft.map((server, index) => (
            <ListServer
              key={server.id}
              handleButtonAdd={handleButtonAdd}
              server={server}
              handleOnDrag={handleOnDrag}
              index={index}
            />
          ))}
        </Box>
      </Box>

      {/* Right Area Server */}
      <Box
        sx={{
          height: "100%",
          width: "78%",
          // bgcolor: '#5246DB',
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* Top Area */}
        <Box
          sx={{
            width: "100%",
            height: "13%",
            // bgcolor: '#2C2C2C',
            display: "flex",
            gap: "20px",
          }}
        >
          {/* Left Area */}
          <Box
            sx={{
              width: "50%",
              height: "100%",
              display: "flex",
              // alignItems: 'center',
              // justifyContent: 'space-between',
              // bgcolor: "#2C2C2C",
              background: "linear-gradient(175deg, #1D1D1D 0%, #2C2C2C 100%)",
              borderRadius: "15px",
              px: "20px",
              // gap: '20px',
            }}
          >
            <Typography
              sx={{
                fontWeight: "900",
                fontFamily: "Montserrat",
                fontSize: "30px",
                color: "#fff",
              }}
            >
              {/* jumlah server yang di pindah di right */}
              {movedServersCount} OUT OF
            </Typography>
            <Typography
              sx={{
                fontWeight: "900",
                fontFamily: "Montserrat",
                fontSize: "80px",
                // color: "#5E60CE",
                background: "linear-gradient(80deg, #5E60CE 0%, #5390D9 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                width: "180px",
              }}
            >
              {/* jumlah semua server */}
              {totalServers}
            </Typography>
            <Typography
              sx={{
                fontWeight: "regular",
                fontFamily: "Montserrat",
                fontSize: "16px",
                color: "#fff",
                width: "180px",
                alignItems: "end",
                display: "flex",
                pb: "8px",
              }}
            >
              Virtual Machine Is On Auto Shutdown
            </Typography>
          </Box>

          {/* Right Area */}
          <Box
            sx={{
              width: "50%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              // bgcolor: "#2C2C2C",
              background: "linear-gradient(175deg, #1D1D1D 0%, #2C2C2C 100%)",

              borderRadius: "15px",
              gap: "30px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "80px",
                fontWeight: "900",
                // color: "#5E60CE",
                background: "linear-gradient(80deg, #5E60CE 0%, #5390D9 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              4
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "40px",
                fontWeight: "900",
                color: "#fff",
                alignItems: "end",
                display: "flex",
                justifyContent: "center",
              }}
            >
              TIMES
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontWeight: "400",
                color: "#fff",
                width: "220px",
                alignItems: "end",
                display: "flex",
                padding: "10px",
              }}
            >
              Electricity Outage Happened This Month
            </Typography>
          </Box>
        </Box>

        {/* Bottom Area */}
        <Box
          sx={{
            width: "100%",
            height: "87%",
            // maxWidth: "100%",
            maxHeight: "87%",
            // bgcolor: "#2C2c",
            borderRadius: "15px",
            border: "1px solid #7101F4",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            // padding: "20px",
            paddingX: "20px",
            pt: "20px",
          }}
        >
          {/* Text and Search */}
          <Box
            sx={{
              height: "50px",
              width: "100%",
              // bgcolor: '#7101F4',
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                sx={{
                  lineHeight: "1",
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "#fff",
                  width: "190px",
                  alignItems: "center",
                }}
              >
                Virtual Machines To Shutdown
              </Typography>
            </Box>
            <TextField
              variant="outlined"
              // value={searchTermRight}
              // onChange={handleSearchChangeRight}
              // placeholder="Search"
              sx={{
                width: "231px",
                display: "flex",
                justifyContent: "center",
                // bgcolor: '#fff',
                borderRadius: "5px",
                height: "35px",
                "& .MuiOutlinedInput-root": {
                  height: "35px",
                  padding: "0",
                  borderColor: "#332A98", // Set the border color
                  "& fieldset": {
                    borderColor: "#332A98", // Default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#332A98", // Hover border color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#332A98", // Focused border color
                  },
                  "& input": {
                    padding: "0 8px",
                  },
                },
              }}
              InputProps={{
                sx: {
                  color: "#fff",
                },
                endAdornment: (
                  <InputAdornment
                    position="end"
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <img src="/public/Search.svg" alt="icon" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Container Server */}
          <Box
            onDrop={(e) => handleOnDrop(e, "right")}
            onDragOver={handleOnDragOver}
            sx={{
              width: "100%",
              height: "455px",
              // bgcolor: "#eaea",
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              // maxWidth: "100%",
              overflow: "auto",
              // maxHeight: "400px",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              "scrollbar-width": "none",
            }}
          >
            {/* Display Server */}
            {/* {filteredRight.map((server, index) => (
              <DisplayServer
                key={server.id}
                handleDelete={handleDelete}
                handleOnDrag={handleOnDrag}
                server={server}
                index={index}
                dragEnter={onDragEnter}
                // dragEnd={onDragEnd}
                dragItem={dragItem}
                dragOverItem={dragOverItem}
                handleSort={handleSort}
              />
            ))} */}
            {right.map((server, index) => (
              <DisplayServer
                key={server.id}
                handleDelete={handleDelete}
                handleOnDrag={handleOnDrag}
                server={server}
                index={index}
                dragEnter={onDragEnter}
                // dragEnd={onDragEnd}
                dragItem={dragItem}
                dragOverItem={dragOverItem}
                handleSort={handleSort}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
