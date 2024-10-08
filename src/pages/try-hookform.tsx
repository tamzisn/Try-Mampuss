import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Paper,
  Typography,
} from "@mui/material";

interface UserInput {
  fullName: string;
  food: string;
  approvesTutorial: boolean;
}

const defaultValues: UserInput = {
  fullName: "John Doe",
  food: "",
  approvesTutorial: true,
};

function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserInput>({
    defaultValues,
    mode: "onTouched",
  });

  const onSubmitHandler = (values: UserInput) => {
    console.log(`Submitted`);
    console.table(values);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 2,
          width: { xs: "90%", sm: "500px" },
          backgroundColor: "#ffffff",
        }}
      >
        <Typography variant="h4" gutterBottom align="center" color="#5246DB">
          User Feedback Form
        </Typography>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Box sx={{ mb: 2 }}>
            <TextField
              {...register("fullName", { required: "Full Name is required" })}
              id="fullName"
              label="Full Name"
              variant="outlined"
              error={!!errors.fullName}
              helperText={errors.fullName ? errors.fullName.message : ""}
              fullWidth
              sx={{ backgroundColor: "#f9f9f9" }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <FormControl fullWidth variant="outlined" error={!!errors.food}>
              <InputLabel id="food-label">Favorite Food</InputLabel>
              <Select
                {...register("food", {
                  required: "Food selection is required",
                })}
                labelId="food-label"
                id="food"
                label="Favorite Food"
                sx={{ backgroundColor: "#f9f9f9" }}
              >
                <MenuItem value="" disabled>
                  Please Select...
                </MenuItem>
                <MenuItem value="pizza">Pizza</MenuItem>
                <MenuItem value="burger">Burger</MenuItem>
                <MenuItem value="ice-cream">Ice Cream</MenuItem>
              </Select>
              <FormHelperText>
                {errors.food ? errors.food.message : ""}
              </FormHelperText>
            </FormControl>
          </Box>

          <Box sx={{ mb: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  {...register("approvesTutorial")}
                  id="approves-tutorial"
                  color="primary"
                />
              }
              label="Do you approve this tutorial?"
            />
            {errors.approvesTutorial && (
              <p className="error-message">{errors.approvesTutorial.message}</p>
            )}
          </Box>

          <Button variant="contained" color="primary" type="submit" fullWidth>
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default HookForm;
