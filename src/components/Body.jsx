import { Box, ListItem, Stack } from "@mui/material";
import React, { useState } from "react";
import arrow from "../assets/image/double-arrow.png";
import home from "../assets/image/home.png";
import dashboard from "../assets/image/dashboard.png";
import settings from "../assets/image/setting.png";
import curriculum from "../assets/image/approved.png";
import { studentData } from "../data/studentData";
// import BasicSelect from "../util/select";
import Tables from "./Table";

function Body() {
  const [sdata, setSData] = useState(studentData);
  const [orders, setorders] = useState("ASC");
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
  const [setCurrentPage] = useState(1);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <Box>
      <Stack
        direction="row"
        m="0vh 12vh 5vh 12vh"
        borderRadius="15px 15px"
        bgcolor="#def1f8"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <Stack
          borderRadius="15px 0 0 15px "
          width="20%"
          style={{
            // background: "linear-gradient(#afc8d1,#23a5d56b, #e73c7e )",
            background: "linear-gradient(#23a5d56b, #23a5d5,#23a5d5 )",
          }}
        >
          <Stack top="0" position="sticky">
            {" "}
            <h1
              style={{
                padding: "  3.4vh 2vh ",
                backgroundColor: " #23a6d5",
                margin: "0",
                borderRadius: "15px 0 0 0 ",
                marginBottom: "5vh",
              }}
            >
              Learnable
            </h1>
            <Stack direction="row" className="sidee">
              <img src={dashboard} alt="hhh" className="side-icns" />
              <h3>Dashboard</h3>
            </Stack>
            <Stack direction="row" className="sidee">
              <img
                src={curriculum}
                alt="hhh"
                // width="13%"
                className="side-icns"
              />
              <h3>Curriculum</h3>
            </Stack>
            <Stack direction="row" className="sidee">
              <img
                src={home}
                alt="hhh"
                // width="13%"
                className="side-icns"
              />
              <h3>Home</h3>
            </Stack>
            <Stack direction="row" className="sidee">
              <img
                src={settings}
                alt="hhh"
                // width="13%"
                className="side-icns"
              />
              <h3>Settings</h3>
            </Stack>
          </Stack>
        </Stack>
        <Stack width="80%">
          <Stack
            top="0"
            position="sticky"
            direction="row"
            spacing={2}
            style={{
              backgroundColor: "white",
              borderRadius: "0 15px 0 0 ",

              boxShadow: "5px 5px 5px rgba(128, 128, 128, 0.137)",
            }}
          >
            <ListItem style={{ padding: "0", marginLeft: "5vh", width: "5%" }}>
              <img src={arrow} alt="" style={{ objectFit: "cover" }} />{" "}
            </ListItem>
            <ListItem>
              <h2>Intern Scoreboard</h2>{" "}
            </ListItem>
          </Stack>
          {/* <Stack
            borderRadius="5px"
            // direction="row"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            m="3vh 5vh"
            padding="2vh 3vh"
            style={{
              backgroundColor: "white",
            }}
          >
            <h3>Dashboard</h3>

            <p onClick={() => Sorting("firstName")}>First Name</p>
            <p>Last Name</p>
            <p>Scores</p>
            <BasicSelect />
          </Stack> */}
          <Stack
            borderRadius="5px"
            m="2vh 5vh"
            padding="3vh"
            style={{
              backgroundColor: "white",
            }}
          >
            <Tables />

            {/* <Pagination
              count={10}
              // studentsPerPage={studentsPerPage}
              // totalStudents={studentData.length}
              // paginate={paginate}
              shape="rounded"
              style={{ margin: "2vh auto 0vh auto" }}
            /> */}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Body;
