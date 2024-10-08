import React, { useState } from "react";
import "./DropArea.css";

const DropArea = () => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        setShowDrop(false);
      }}
      className={showDrop ? "drop-area" : "hide-drop"}
    ></section>
  );
};

export default DropArea;
