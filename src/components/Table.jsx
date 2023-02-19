import React, { useState } from "react";
import { studentData } from "../data/studentData";
import BasicSelect from "../util/select";
import { Stack } from "@mui/material";
// import _ from "lodash";
import PropTypes from "prop-types";
// import { Sorting } from "../util";
// import Sorting from "../util";
// import SortGrades from "../util";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Pagination from "./Pagination";
import {
  Table,
  TableContainer,
  Paper,
  TableBody,
  TableRow,
} from "@mui/material";

// import Pagination from "@mui/material/Pagination";
import {
  StyledTableCell,
  StyledTableRow,
  StyledTableHead,
} from "../assets/styles/tableStyle";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
// const pageSize = 6;
function Tables() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // to be able to sort firstname, lastname and scores
  const [sdata, setSData] = useState(studentData);
  const [orders, setorders] = useState("ASC");
  // const [paginatedPost, setPaginatedPost] = useState();
  const Sorting = (cof) => {
    if (orders === "ASC") {
      const sorted = [...sdata].sort((a, b) =>
        a[cof].toLowerCase() > b[cof].toLowerCase() ? 1 : -1
      );
      setSData(sorted);
      setorders("DSC");
    }
    if (orders === "DSC") {
      const sorted = [...sdata].sort((a, b) =>
        a[cof].toLowerCase() < b[cof].toLowerCase() ? 1 : -1
      );
      setSData(sorted);
      setorders("ASC");
    }
  };
  const SortGrades = (cof) => {
    if (orders === "ASC") {
      const sorted = [...sdata].sort((a, b) => a.overall - b.overall);

      setSData(sorted);
      setorders("DSC");
    }
    if (orders === "DSC") {
      const sorted = [...sdata].sort((a, b) => b.overall - a.overall);
      setSData(sorted);
      setorders("ASC");
    }
  };

  // to get number of students per page
  // const [currentPage] = useState(1);
  // const [postPerPage] = useState(6);

  // // get current posts
  // const lastStudentIndex = currentPage * postPerPage;
  // const firstStudentIndex = lastStudentIndex - postPerPage;
  // const sortMe = studentData.sort(function (a, b) {
  //   return b.overall - a.overall;
  // });
  // const pageCount = sdata ? Math.ceil(sdata.length / pageSize) : 0;
  // if (pageCount === 1) return null;
  // const pages = _.range(1, pageCount + 1);
  // setPaginatedPost(_(sdata).slice(0).take(pageSize).value());

  return (
    <>
      {" "}
      <Stack
        borderRadius="5px"
        // direction="row"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        // m="3vh 5vh"
        mb="3vh"
        padding="2vh 3vh"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px",

          // backgroundColor: "white",
        }}
      >
        <h3>Dashboard</h3>
        <h4>Sort by:</h4>
        <p onClick={() => Sorting("firstName")}>First Name</p>
        <p onClick={() => Sorting("lastName")}>Last Name</p>
        <p onClick={() => SortGrades("overall")}>Scores</p>
        <BasicSelect />
      </Stack>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="General" {...a11yProps(0)} />
            <Tab label="Front End" {...a11yProps(1)} />
            <Tab label="Back End" {...a11yProps(2)} />
            <Tab label="Web 3" {...a11yProps(3)} />
            <Tab label="Product Design" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <TableContainer
            component={Paper}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "5px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px",

              // margin: "0vh 5vh",
              // padding: "3vh",
            }}
          >
            <Table aria-label="customized table" style={{ maxWidth: "100%" }}>
              <StyledTableHead
                style={{ maxWidth: "100%", backgroundColor: "red" }}
              >
                <TableRow style={{ backgroundColor: "red" }}>
                  {/* <StyledTableCell className="TBHead">ID</StyledTableCell> */}
                  {/* <StyledTableCell align="center">Picture</StyledTableCell> */}
                  <StyledTableCell align="left" className="TBHead">
                    First Name
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="TBHead"
                    // onClick={() => sorting("lastName")}
                  >
                    Last Name
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Sex
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Grade 1
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Grade 2
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Overall Grade
                  </StyledTableCell>
                </TableRow>
              </StyledTableHead>
              <TableBody>
                {sdata
                  //.sort(function (a, b) {
                  //  return b.overall - a.overall;
                  //})
                  //.slice(firstStudentIndex, lastStudentIndex)
                  .map((data) => (
                    <StyledTableRow
                      key={data.id}
                      className="styledtR"
                      style={{ cursor: "pointer" }}
                    >
                      {/* <StyledTableCell component="th" scope="row">
                        {data.id}
                      </StyledTableCell> */}
                      {/* <StyledTableCell align="center" width="60">
                  <img src={data.pic} alt="" width="70%" />
                </StyledTableCell> */}
                      <StyledTableCell align="left">
                        {data.firstName}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.lastName}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.sex}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.grade1}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.grade2}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.grade1 + data.grade2}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TableContainer
            component={Paper}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "5px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px",

              // margin: "0vh 5vh",
              // padding: "3vh",
            }}
          >
            <Table aria-label="customized table" style={{ maxWidth: "100%" }}>
              <StyledTableHead
                style={{ maxWidth: "100%", backgroundColor: "red" }}
              >
                <TableRow style={{ backgroundColor: "red" }}>
                  {/* <StyledTableCell className="TBHead">ID</StyledTableCell> */}
                  {/* <StyledTableCell align="center">Picture</StyledTableCell> */}
                  <StyledTableCell align="left" className="TBHead">
                    First Name
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="TBHead"
                    // onClick={() => sorting("lastName")}
                  >
                    Last Name
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Sex
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Grade 1
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Grade 2
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Overall Grade
                  </StyledTableCell>
                </TableRow>
              </StyledTableHead>
              <TableBody>
                {sdata
                  //.sort(function (a, b) {
                  //  return b.overall - a.overall;
                  //})
                  //.slice(postPerPage, lastStudentIndex)
                  .slice(10, 20)
                  .map((data) => (
                    <StyledTableRow
                      key={data.id}
                      className="styledtR"
                      style={{ cursor: "pointer" }}
                    >
                      {/* <StyledTableCell component="th" scope="row">
                        {data.id}
                      </StyledTableCell> */}
                      {/* <StyledTableCell align="center" width="60">
                  <img src={data.pic} alt="" width="70%" />
                </StyledTableCell> */}
                      <StyledTableCell align="left">
                        {data.firstName}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.lastName}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.sex}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.grade1}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.grade2}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.grade1 + data.grade2}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TableContainer
            component={Paper}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "5px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px",

              // margin: "0vh 5vh",
              // padding: "3vh",
            }}
          >
            <Table aria-label="customized table" style={{ maxWidth: "100%" }}>
              <StyledTableHead
                style={{ maxWidth: "100%", backgroundColor: "red" }}
              >
                <TableRow style={{ backgroundColor: "red" }}>
                  {/* <StyledTableCell className="TBHead">ID</StyledTableCell> */}
                  {/* <StyledTableCell align="center">Picture</StyledTableCell> */}
                  <StyledTableCell align="left" className="TBHead">
                    First Name
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="TBHead"
                    // onClick={() => sorting("lastName")}
                  >
                    Last Name
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Sex
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Grade 1
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Grade 2
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Overall Grade
                  </StyledTableCell>
                </TableRow>
              </StyledTableHead>
              <TableBody>
                {sdata
                  //.sort(function (a, b) {
                  //  return b.overall - a.overall;
                  //})
                  //.slice(postPerPage, lastStudentIndex)
                  .slice(20, 30)
                  .map((data) => (
                    <StyledTableRow
                      key={data.id}
                      className="styledtR"
                      style={{ cursor: "pointer" }}
                    >
                      {/* <StyledTableCell component="th" scope="row">
                        {data.id}
                      </StyledTableCell> */}
                      {/* <StyledTableCell align="center" width="60">
                  <img src={data.pic} alt="" width="70%" />
                </StyledTableCell> */}
                      <StyledTableCell align="left">
                        {data.firstName}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.lastName}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.sex}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.grade1}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.grade2}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.grade1 + data.grade2}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TableContainer
            component={Paper}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "5px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px",

              // margin: "0vh 5vh",
              // padding: "3vh",
            }}
          >
            <Table aria-label="customized table" style={{ maxWidth: "100%" }}>
              <StyledTableHead
                style={{ maxWidth: "100%", backgroundColor: "red" }}
              >
                <TableRow style={{ backgroundColor: "red" }}>
                  {/* <StyledTableCell className="TBHead">ID</StyledTableCell> */}
                  {/* <StyledTableCell align="center">Picture</StyledTableCell> */}
                  <StyledTableCell align="left" className="TBHead">
                    First Name
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="TBHead"
                    // onClick={() => sorting("lastName")}
                  >
                    Last Name
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Sex
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Grade 1
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Grade 2
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Overall Grade
                  </StyledTableCell>
                </TableRow>
              </StyledTableHead>
              <TableBody>
                {sdata
                  //.sort(function (a, b) {
                  //  return b.overall - a.overall;
                  //})
                  //.slice(postPerPage, lastStudentIndex)
                  .slice(30, 40)
                  .map((data) => (
                    <StyledTableRow
                      key={data.id}
                      className="styledtR"
                      style={{ cursor: "pointer" }}
                    >
                      {/* <StyledTableCell component="th" scope="row">
                        {data.id}
                      </StyledTableCell> */}
                      {/* <StyledTableCell align="center" width="60">
                  <img src={data.pic} alt="" width="70%" />
                </StyledTableCell> */}
                      <StyledTableCell align="left">
                        {data.firstName}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.lastName}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.sex}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.grade1}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.grade2}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.grade1 + data.grade2}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <TableContainer
            component={Paper}
            style={{
              width: "100%",
              backgroundColor: "white",
              borderRadius: "5px",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px",

              // margin: "0vh 5vh",
              // padding: "3vh",
            }}
          >
            <Table aria-label="customized table" style={{ maxWidth: "100%" }}>
              <StyledTableHead
                style={{ maxWidth: "100%", backgroundColor: "red" }}
              >
                <TableRow style={{ backgroundColor: "red" }}>
                  {/* <StyledTableCell className="TBHead">ID</StyledTableCell> */}
                  {/* <StyledTableCell align="center">Picture</StyledTableCell> */}
                  <StyledTableCell align="left" className="TBHead">
                    First Name
                  </StyledTableCell>
                  <StyledTableCell
                    align="center"
                    className="TBHead"
                    // onClick={() => sorting("lastName")}
                  >
                    Last Name
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Sex
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Grade 1
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Grade 2
                  </StyledTableCell>
                  <StyledTableCell align="center" className="TBHead">
                    Overall Grade
                  </StyledTableCell>
                </TableRow>
              </StyledTableHead>
              <TableBody>
                {sdata
                  //.sort(function (a, b) {
                  //  return b.overall - a.overall;
                  //})
                  //.slice(postPerPage, lastStudentIndex)
                  .slice(40, 50)
                  .map((data) => (
                    <StyledTableRow
                      key={data.id}
                      className="styledtR"
                      style={{ cursor: "pointer" }}
                    >
                      {/* <StyledTableCell component="th" scope="row">
                        {data.id}
                      </StyledTableCell> */}
                      {/* <StyledTableCell align="center" width="60">
                  <img src={data.pic} alt="" width="70%" />
                </StyledTableCell> */}
                      <StyledTableCell align="left">
                        {data.firstName}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.lastName}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.sex}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.grade1}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.grade2}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {data.grade1 + data.grade2}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>
      </Box>
      {/* <Pagination
        count={10}
        // studentsPerPage={studentsPerPage}
        // totalStudents={studentData.length}
        // paginate={paginate}
        shape="rounded"
        style={{ margin: "2vh auto 0vh auto" }}
      /> */}
    </>
  );
}

export default Tables;
