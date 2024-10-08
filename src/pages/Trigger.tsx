import React from "react";
import AddTrigger from "../components/AddTriggerModal";

const Trigger = () => {
  const [open, setOpen] = React.useState(true);
  return (
    <div>
      {/* <AddTrigger
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      /> */}
    </div>
  );
};

export default Trigger;
