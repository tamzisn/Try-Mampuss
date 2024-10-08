import { Box, IconButton, Typography, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { useForm } from "react-hook-form";

interface TriggerFormProps {
  deleteTriggerForm: () => void;
  onSubmit: (data: { id: number; name: string; description: string }) => void;
}
interface TriggerForm {
  id: number;
  name: string;
  description: string;
}

const TriggerForm: React.FC<TriggerFormProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TriggerForm>({
    defaultValues: {
      name: "example trigger",
      description: "example description",
    },
  });
  const onSubmit = (data: TriggerForm) => {
    console.log(data);
    reset();
    props.deleteTriggerForm();
    props.onSubmit(data);
  };
  return (
    <div>
      {/* Trigger Form */}
      <Box
        sx={{
          p: "20px 25px",
          width: "100%",
          height: "400px",
          bgcolor: "#282828",
          border: "solid 1px #5E60CE",
          borderRadius: "11px",
        }}
      >
        {/* Button Delete Form */}
        <Box
          sx={{
            width: "100%",
            height: "22px",
            display: "flex",
            justifyContent: "flex-end",
            // bgcolor: "#2e2e",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={props.deleteTriggerForm}
            sx={{
              width: "22px",
              height: "22px",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CloseIcon
              sx={{
                width: "22px",
                height: "22px",
              }}
            />
          </IconButton>
        </Box>
        {/* Trigger Form */}
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            width: "100%",
            height: "100%",
            // bgcolor: "#000",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Trigger Name */}
          <Box
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "700",
                fontSize: "21px",
                color: "#fff",
              }}
            >
              Trigger Name
            </Typography>
            <TextField
              {...register("name", { required: "Name is required" })}
              required
              id="outlined-required"
              inputProps={{
                sx: {
                  color: "#fff",
                  height: "auto",
                },
              }}
              sx={{
                width: "100%",
                height: "46px",
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#2e2e2e",
                  borderRadius: "11px",
                  "& fieldset": {
                    border: "solid 2px #5E60CE",
                  },
                  "&:hover fieldset": {
                    borderColor: "#5E60CE",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#5246DB",
                  },
                },
              }}
            />
          </Box>
          {/* Trigger */}
          <Box
            sx={{
              width: "100%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "700",
                fontSize: "21px",
                color: "#fff",
              }}
            >
              Trigger
            </Typography>
            <TextField
              {...register("description", {
                required: "Description is required",
              })}
              id="outlined-multiline-flexible"
              multiline
              maxRows={4}
              inputProps={{
                sx: {
                  color: "#fff",
                  height: "125px",
                },
              }}
              sx={{
                width: "100%",
                height: "125px",
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#2e2e2e",
                  borderRadius: "11px",
                  "& fieldset": {
                    border: "solid 2px #5E60CE",
                  },
                  "&:hover fieldset": {
                    borderColor: "#5E60CE",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#5246DB",
                  },
                },
                "& .MuiInputBase-input": {
                  maxHeight: "100%",
                  color: "#fff",
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  "&::-webkit-scrollbar": {
                    display: "none",
                  },
                },
              }}
            />
          </Box>
          {/* Button */}
          <Box
            sx={{
              width: "100%",
              height: "30px",
              // bgcolor: "#2cc",
              display: "flex",
              // alignItems: "end",
              justifyContent: "end",
              gap: "20px",
            }}
          >
            <Button
              type="submit"
              sx={{
                width: "118px",
                height: "30px",
                borderRadius: "3px",
                background: "linear-gradient(75deg, #4EA8DE 0%, #5E60CE 100%)",
                color: "#fff",
                fontFamily: "Montserrat",
                fontWeight: "500",
                textTransform: "capitalize",
                fontSize: "13px",
                "&:hover": {
                  background: "linear-gradient(230deg, #fff 50%, #fff 100%)",
                  color: "#5E60CE",
                },
              }}
            >
              Add Trigger
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default TriggerForm;
