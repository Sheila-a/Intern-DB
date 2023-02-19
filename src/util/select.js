import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import { studentData } from "../data/studentData";
// import { useState } from "react";

export default function BasicSelect() {
  // const [sdata, setSData] = useState(studentData);
  // const [orders, setorders] = useState("ASC");

  // const sorting = (cof) => {
  //   if (orders === "ASC") {
  //     const sorted = [...sdata].sort((a, b) =>
  //       a[cof].toLowerCase() > b[cof].toLowerCase() ? 1 : -1
  //     );
  //   }
  // };
  const [sortStudents, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "30%",
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
          <MenuItem
          // onClick={() => sorting("firstName")}
          >
            First Name
          </MenuItem>
          <MenuItem
          // onClick={() => sorting("lastName")}
          >
            Last Name
          </MenuItem>
          <MenuItem
          // onClick={() => sorting("overall")}
          >
            Scores
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
