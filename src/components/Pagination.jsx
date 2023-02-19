// // import React from "react";

// // const Pagination = () => {
// //   const arr = [
// //     { firstName: "Lili", score: 72 },
// //     { firstName: "Derek", score: 90 },
// //     { firstName: "Jason", score: 48 },
// //     { firstName: "Emily", score: 33 },
// //   ];
// //   const sortMe = arr.sort(function (a, b) {
// //     return b.score - a.score;
// //   });
// //   return (
// //     <div>
// //       <ul>
// //         <li onClick={sortMe}>First Name - Score</li>
// //         {arr.map((datum) => (
// //           <li>
// //             {datum.firstName} - {datum.score}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };
// // second trial...uuurrrghh
// // export default Pagination;
// // import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
// // import React, { useEffect, useState } from "react";
// // import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
// // import { studentData } from "../data/studentData";
// // import {
// //   Table,
// //   TableContainer,
// //   Paper,
// //   TableBody,
// //   TableRow,
// // } from "@mui/material";

// // // import Pagination from "@mui/material/Pagination";
// // import {
// //   StyledTableCell,
// //   StyledTableRow,
// //   StyledTableHead,
// // } from "../assets/styles/tableStyle";
// // // const items = studentData;
// // // const items = [...Array(33).keys()];

// // function Items({ currentItems }) {
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [postPerPage] = useState(6);

// //   // // get current posts
// //   const lastStudentIndex = currentPage * postPerPage;
// //   const firstStudentIndex = lastStudentIndex - postPerPage;
// //   return (
// //     <div className="items">
// //       {currentItems &&
// //         currentItems.map((item) => (
// //           <div>
// //             {/* <h3>Item #{item}</h3>
// //             <h3>Item #{item}</h3> */}
// //             <TableContainer
// //               component={Paper}
// //               style={{
// //                 width: "100%",
// //                 backgroundColor: "white",
// //                 borderRadius: "5px",
// //                 boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px",
// //               }}
// //             >
// //               <Table aria-label="customized table" style={{ maxWidth: "100%" }}>
// //                 <StyledTableHead
// //                   style={{ maxWidth: "100%", backgroundColor: "red" }}
// //                 >
// //                   <TableRow style={{ backgroundColor: "red" }}>
// //                     {/* <StyledTableCell>ID</StyledTableCell> */}
// //                     {/* <StyledTableCell align="center">Picture</StyledTableCell> */}
// //                     <StyledTableCell align="left" className="TBHead">
// //                       First Name
// //                     </StyledTableCell>
// //                     <StyledTableCell
// //                       align="center"
// //                       className="TBHead"
// //                       // onClick={() => sorting("lastName")}
// //                     >
// //                       Last Name
// //                     </StyledTableCell>
// //                     <StyledTableCell align="center" className="TBHead">
// //                       Sex
// //                     </StyledTableCell>
// //                     <StyledTableCell align="center" className="TBHead">
// //                       Grade 1
// //                     </StyledTableCell>
// //                     <StyledTableCell align="center" className="TBHead">
// //                       Grade 2
// //                     </StyledTableCell>
// //                     <StyledTableCell align="center" className="TBHead">
// //                       Overall Grade
// //                     </StyledTableCell>
// //                   </TableRow>
// //                 </StyledTableHead>
// //                 <TableBody>
// //                   {studentData
// //                     //.sort(function (a, b) {
// //                     //  return b.overall - a.overall;
// //                     //})
// //                     .slice(firstStudentIndex, lastStudentIndex)
// //                     .map((data) => (
// //                       <StyledTableRow
// //                         key={data.id}
// //                         className="styledtR"
// //                         style={{ cursor: "pointer" }}
// //                       >
// //                         {/* <StyledTableCell component="th" scope="row">
// //                   {data.id}
// //                 </StyledTableCell> */}
// //                         {/* <StyledTableCell align="center" width="60">
// //                   <img src={data.pic} alt="" width="70%" />
// //                 </StyledTableCell> */}
// //                         <StyledTableCell align="left">
// //                           {data.firstName}
// //                         </StyledTableCell>
// //                         <StyledTableCell align="center">
// //                           {data.lastName}
// //                         </StyledTableCell>
// //                         <StyledTableCell align="center">
// //                           {data.sex}
// //                         </StyledTableCell>
// //                         <StyledTableCell align="center">
// //                           {data.grade1}
// //                         </StyledTableCell>
// //                         <StyledTableCell align="center">
// //                           {data.grade2}
// //                         </StyledTableCell>
// //                         <StyledTableCell align="center">
// //                           {data.grade1 + data.grade2}
// //                         </StyledTableCell>
// //                       </StyledTableRow>
// //                     ))}
// //                 </TableBody>
// //               </Table>
// //             </TableContainer>
// //           </div>
// //         ))}
// //     </div>
// //   );
// // }

// // function PaginatedItems({ itemsPerPage }) {
// //   // We start with an empty list of items.
// //   const [currentItems, setCurrentItems] = useState(null);
// //   const [pageCount, setPageCount] = useState(0);
// //   // Here we use item offsets; we could also use page offsets
// //   // following the API or data you're working with.
// //   const [itemOffset, setItemOffset] = useState(0);

// //   useEffect(() => {
// //     // Fetch items from another resources.
// //     const endOffset = itemOffset + itemsPerPage;
// //     console.log(`Loading items from ${itemOffset} to ${endOffset}`);
// //     setCurrentItems(studentData.slice(itemOffset, endOffset));
// //     setPageCount(Math.ceil(studentData.length / itemsPerPage));
// //   }, [itemOffset, itemsPerPage]);

// //   // Invoke when user click to request another page.
// //   const handlePageClick = (event) => {
// //     const newOffset = (event.selected * itemsPerPage) % studentData.length;
// //     console.log(
// //       `User requested page number ${event.selected}, which is offset ${newOffset}`
// //     );
// //     setItemOffset(newOffset);
// //   };

// //   return (
// //     <>
// //       <Items currentItems={currentItems} />
// //       <ReactPaginate
// //         nextLabel=">"
// //         onPageChange={handlePageClick}
// //         pageRangeDisplayed={3}
// //         marginPagesDisplayed={2}
// //         pageCount={pageCount}
// //         previousLabel="<"
// //         pageClassName="page-item"
// //         pageLinkClassName="page-link"
// //         previousClassName="page-item"
// //         previousLinkClassName="page-link"
// //         nextClassName="page-item"
// //         nextLinkClassName="page-link"
// //         breakLabel="..."
// //         breakClassName="page-item"
// //         breakLinkClassName="page-link"
// //         containerClassName="pagination"
// //         activeClassName="active"
// //         renderOnZeroPageCount={null}
// //       />
// //     </>
// //   );
// // }

// // // Add a <div id="container"> to your HTML to see the componend rendered.
// // // ReactDOM.render(
// // //   <PaginatedItems itemsPerPage={4} />,
// // //   document.getElementById("container")
// // // );

// // export default PaginatedItems;

// import * as React from "react";
// import { useState } from "react";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import { studentData } from "../data/studentData";
// import {
//   Table,
//   TableContainer,
//   Paper,
//   TableBody,
//   TableRow,
// } from "@mui/material";

// // import Pagination from "@mui/material/Pagination";
// import {
//   StyledTableCell,
//   StyledTableRow,
//   StyledTableHead,
// } from "../assets/styles/tableStyle";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const [currentPage, setCurrentPage] = useState(1);
//   const [postPerPage] = useState(10);

//   // // get current posts
//   const lastStudentIndex = currentPage * postPerPage;
//   const firstStudentIndex = lastStudentIndex - postPerPage;

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//         >
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//           <Tab label="Item Four" {...a11yProps(3)} />
//           <Tab label="Item Four" {...a11yProps(4)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0}>
//         <TableContainer
//           component={Paper}
//           style={{
//             width: "100%",
//             backgroundColor: "white",
//             borderRadius: "5px",
//             boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px",

//             // margin: "0vh 5vh",
//             // padding: "3vh",
//           }}
//         >
//           <Table aria-label="customized table" style={{ maxWidth: "100%" }}>
//             <StyledTableHead
//               style={{ maxWidth: "100%", backgroundColor: "red" }}
//             >
//               <TableRow style={{ backgroundColor: "red" }}>
//                 <StyledTableCell className="TBHead">ID</StyledTableCell>
//                 {/* <StyledTableCell align="center">Picture</StyledTableCell> */}
//                 <StyledTableCell align="left" className="TBHead">
//                   First Name
//                 </StyledTableCell>
//                 <StyledTableCell
//                   align="center"
//                   className="TBHead"
//                   // onClick={() => sorting("lastName")}
//                 >
//                   Last Name
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Sex
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Grade 1
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Grade 2
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Overall Grade
//                 </StyledTableCell>
//               </TableRow>
//             </StyledTableHead>
//             <TableBody>
//               {studentData
//                 //.sort(function (a, b) {
//                 //  return b.overall - a.overall;
//                 //})
//                 .slice(firstStudentIndex, lastStudentIndex)
//                 .map((data) => (
//                   <StyledTableRow
//                     key={data.id}
//                     className="styledtR"
//                     style={{ cursor: "pointer" }}
//                   >
//                     <StyledTableCell component="th" scope="row">
//                       {data.id}
//                     </StyledTableCell>
//                     {/* <StyledTableCell align="center" width="60">
//                   <img src={data.pic} alt="" width="70%" />
//                 </StyledTableCell> */}
//                     <StyledTableCell align="left">
//                       {data.firstName}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.lastName}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">{data.sex}</StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.grade1}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.grade2}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.grade1 + data.grade2}
//                     </StyledTableCell>
//                   </StyledTableRow>
//                 ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </TabPanel>
//       <TabPanel value={value} index={1}>
//         <TableContainer
//           component={Paper}
//           style={{
//             width: "100%",
//             backgroundColor: "white",
//             borderRadius: "5px",
//             boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px",

//             // margin: "0vh 5vh",
//             // padding: "3vh",
//           }}
//         >
//           <Table aria-label="customized table" style={{ maxWidth: "100%" }}>
//             <StyledTableHead
//               style={{ maxWidth: "100%", backgroundColor: "red" }}
//             >
//               <TableRow style={{ backgroundColor: "red" }}>
//                 <StyledTableCell className="TBHead">ID</StyledTableCell>
//                 {/* <StyledTableCell align="center">Picture</StyledTableCell> */}
//                 <StyledTableCell align="left" className="TBHead">
//                   First Name
//                 </StyledTableCell>
//                 <StyledTableCell
//                   align="center"
//                   className="TBHead"
//                   // onClick={() => sorting("lastName")}
//                 >
//                   Last Name
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Sex
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Grade 1
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Grade 2
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Overall Grade
//                 </StyledTableCell>
//               </TableRow>
//             </StyledTableHead>
//             <TableBody>
//               {studentData
//                 //.sort(function (a, b) {
//                 //  return b.overall - a.overall;
//                 //})
//                 //.slice(postPerPage, lastStudentIndex)
//                 .slice(10, 20)
//                 .map((data) => (
//                   <StyledTableRow
//                     key={data.id}
//                     className="styledtR"
//                     style={{ cursor: "pointer" }}
//                   >
//                     <StyledTableCell component="th" scope="row">
//                       {data.id}
//                     </StyledTableCell>
//                     {/* <StyledTableCell align="center" width="60">
//                   <img src={data.pic} alt="" width="70%" />
//                 </StyledTableCell> */}
//                     <StyledTableCell align="left">
//                       {data.firstName}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.lastName}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">{data.sex}</StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.grade1}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.grade2}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.grade1 + data.grade2}
//                     </StyledTableCell>
//                   </StyledTableRow>
//                 ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </TabPanel>
//       <TabPanel value={value} index={2}>
//         <TableContainer
//           component={Paper}
//           style={{
//             width: "100%",
//             backgroundColor: "white",
//             borderRadius: "5px",
//             boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px",

//             // margin: "0vh 5vh",
//             // padding: "3vh",
//           }}
//         >
//           <Table aria-label="customized table" style={{ maxWidth: "100%" }}>
//             <StyledTableHead
//               style={{ maxWidth: "100%", backgroundColor: "red" }}
//             >
//               <TableRow style={{ backgroundColor: "red" }}>
//                 <StyledTableCell className="TBHead">ID</StyledTableCell>
//                 {/* <StyledTableCell align="center">Picture</StyledTableCell> */}
//                 <StyledTableCell align="left" className="TBHead">
//                   First Name
//                 </StyledTableCell>
//                 <StyledTableCell
//                   align="center"
//                   className="TBHead"
//                   // onClick={() => sorting("lastName")}
//                 >
//                   Last Name
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Sex
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Grade 1
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Grade 2
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Overall Grade
//                 </StyledTableCell>
//               </TableRow>
//             </StyledTableHead>
//             <TableBody>
//               {studentData
//                 //.sort(function (a, b) {
//                 //  return b.overall - a.overall;
//                 //})
//                 //.slice(postPerPage, lastStudentIndex)
//                 .slice(20, 30)
//                 .map((data) => (
//                   <StyledTableRow
//                     key={data.id}
//                     className="styledtR"
//                     style={{ cursor: "pointer" }}
//                   >
//                     <StyledTableCell component="th" scope="row">
//                       {data.id}
//                     </StyledTableCell>
//                     {/* <StyledTableCell align="center" width="60">
//                   <img src={data.pic} alt="" width="70%" />
//                 </StyledTableCell> */}
//                     <StyledTableCell align="left">
//                       {data.firstName}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.lastName}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">{data.sex}</StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.grade1}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.grade2}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.grade1 + data.grade2}
//                     </StyledTableCell>
//                   </StyledTableRow>
//                 ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </TabPanel>
//       <TabPanel value={value} index={3}>
//         <TableContainer
//           component={Paper}
//           style={{
//             width: "100%",
//             backgroundColor: "white",
//             borderRadius: "5px",
//             boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px",

//             // margin: "0vh 5vh",
//             // padding: "3vh",
//           }}
//         >
//           <Table aria-label="customized table" style={{ maxWidth: "100%" }}>
//             <StyledTableHead
//               style={{ maxWidth: "100%", backgroundColor: "red" }}
//             >
//               <TableRow style={{ backgroundColor: "red" }}>
//                 <StyledTableCell className="TBHead">ID</StyledTableCell>
//                 {/* <StyledTableCell align="center">Picture</StyledTableCell> */}
//                 <StyledTableCell align="left" className="TBHead">
//                   First Name
//                 </StyledTableCell>
//                 <StyledTableCell
//                   align="center"
//                   className="TBHead"
//                   // onClick={() => sorting("lastName")}
//                 >
//                   Last Name
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Sex
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Grade 1
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Grade 2
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Overall Grade
//                 </StyledTableCell>
//               </TableRow>
//             </StyledTableHead>
//             <TableBody>
//               {studentData
//                 //.sort(function (a, b) {
//                 //  return b.overall - a.overall;
//                 //})
//                 //.slice(postPerPage, lastStudentIndex)
//                 .slice(30, 40)
//                 .map((data) => (
//                   <StyledTableRow
//                     key={data.id}
//                     className="styledtR"
//                     style={{ cursor: "pointer" }}
//                   >
//                     <StyledTableCell component="th" scope="row">
//                       {data.id}
//                     </StyledTableCell>
//                     {/* <StyledTableCell align="center" width="60">
//                   <img src={data.pic} alt="" width="70%" />
//                 </StyledTableCell> */}
//                     <StyledTableCell align="left">
//                       {data.firstName}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.lastName}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">{data.sex}</StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.grade1}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.grade2}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.grade1 + data.grade2}
//                     </StyledTableCell>
//                   </StyledTableRow>
//                 ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </TabPanel>
//       <TabPanel value={value} index={4}>
//         <TableContainer
//           component={Paper}
//           style={{
//             width: "100%",
//             backgroundColor: "white",
//             borderRadius: "5px",
//             boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px",

//             // margin: "0vh 5vh",
//             // padding: "3vh",
//           }}
//         >
//           <Table aria-label="customized table" style={{ maxWidth: "100%" }}>
//             <StyledTableHead
//               style={{ maxWidth: "100%", backgroundColor: "red" }}
//             >
//               <TableRow style={{ backgroundColor: "red" }}>
//                 <StyledTableCell className="TBHead">ID</StyledTableCell>
//                 {/* <StyledTableCell align="center">Picture</StyledTableCell> */}
//                 <StyledTableCell align="left" className="TBHead">
//                   First Name
//                 </StyledTableCell>
//                 <StyledTableCell
//                   align="center"
//                   className="TBHead"
//                   // onClick={() => sorting("lastName")}
//                 >
//                   Last Name
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Sex
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Grade 1
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Grade 2
//                 </StyledTableCell>
//                 <StyledTableCell align="center" className="TBHead">
//                   Overall Grade
//                 </StyledTableCell>
//               </TableRow>
//             </StyledTableHead>
//             <TableBody>
//               {studentData
//                 //.sort(function (a, b) {
//                 //  return b.overall - a.overall;
//                 //})
//                 //.slice(postPerPage, lastStudentIndex)
//                 .slice(40, 50)
//                 .map((data) => (
//                   <StyledTableRow
//                     key={data.id}
//                     className="styledtR"
//                     style={{ cursor: "pointer" }}
//                   >
//                     <StyledTableCell component="th" scope="row">
//                       {data.id}
//                     </StyledTableCell>
//                     {/* <StyledTableCell align="center" width="60">
//                   <img src={data.pic} alt="" width="70%" />
//                 </StyledTableCell> */}
//                     <StyledTableCell align="left">
//                       {data.firstName}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.lastName}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">{data.sex}</StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.grade1}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.grade2}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {data.grade1 + data.grade2}
//                     </StyledTableCell>
//                   </StyledTableRow>
//                 ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </TabPanel>
//     </Box>
//   );
// }
