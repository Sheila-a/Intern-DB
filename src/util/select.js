import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [sortStudents, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "30%",
        zIndex: "0",
      }}
    >
      <FormControl fullWidth className="">
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortStudents}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem>First Name</MenuItem>
          <MenuItem>Last Name</MenuItem>
          <MenuItem>Scores</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
