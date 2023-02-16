import { Box, ListItem, Stack } from "@mui/material";
import React from "react";
import { studentData } from "../data/studentData";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "../assets/styles/tableStyle";
import arrow from "../assets/image/double-arrow.png";
function Body() {
  return (
    <Box>
      <Stack
        direction="row"
        m="5vh 12vh"
        borderRadius="5px"
        bgcolor="#23a5d56b"
      >
        <Stack
          width="25%"
          style={{
            background: "linear-gradient( #e73c7e, #23a6d5)",
          }}
        >
          <h1>Learnable</h1>
          <Stack>
            <h2>Dashboard</h2>
          </Stack>
          <Stack></Stack>
          <Stack></Stack>
          <Stack></Stack>
          <Stack></Stack>
        </Stack>
        <Stack width="75%">
          <Stack
            direction="row"
            display="flex"
            padding="2vh 5vh"
            style={{
              backgroundColor: "white",
            }}
          >
            <ListItem>jjj</ListItem>
            <h2>Intern Scoreboard</h2>{" "}
            <img src={arrow} alt="" width="5%" style={{ objectFit: "cover" }} />{" "}
            <h2>Intern Scoreboard</h2>
          </Stack>
          <Stack
            borderRadius="5px"
            m="3vh 5vh"
            padding="2vh 3vh"
            style={{
              backgroundColor: "white",
            }}
          >
            <h3>Dashboard</h3>
          </Stack>
          <Stack
            borderRadius="5px"
            m="0vh 5vh"
            padding="3vh"
            style={{
              backgroundColor: "white",
            }}
          >
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>ID</StyledTableCell>
                    <StyledTableCell align="right">Picture</StyledTableCell>
                    <StyledTableCell align="right">First Name</StyledTableCell>
                    <StyledTableCell align="right">Last Name</StyledTableCell>
                    <StyledTableCell align="right">Sex</StyledTableCell>
                    <StyledTableCell align="right">Grade 1</StyledTableCell>
                    <StyledTableCell align="right">Grade 2</StyledTableCell>
                    <StyledTableCell align="right">
                      Overall Grade
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentData.map((data, index) => (
                    <StyledTableRow key={data.id}>
                      <StyledTableCell component="th" scope="row">
                        {data.id}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {data.pic}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {data.firstName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {data.lastName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {data.sex}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {data.grade1}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {data.grade2}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {data.grade1 + data.grade2}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Body;
