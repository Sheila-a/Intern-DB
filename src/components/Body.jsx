import { Box, ListItem, Stack } from "@mui/material";
import React from "react";
import arrow from "../assets/icons/double-arrow.png";
import home from "../assets/icons/home.png";
import dashboard from "../assets/icons/dashboard.png";
import settings from "../assets/icons/setting.png";
import curriculum from "../assets/icons/approved.png";
import Tables from "./Table";

function Body() {
  return (
    <Box>
      <Stack direction="row" className="Body-container">
        <Stack className="sidee-container">
          <Stack className="sidee-container-inner">
            <h1 className="sidee-h1">Learnable</h1>
            <Stack direction="row" className="sidee">
              <img src={dashboard} alt="dashboard" className="side-icns" />
              <h3>Dashboard</h3>
            </Stack>
            <Stack direction="row" className="sidee">
              <img src={curriculum} alt="curriculum" className="side-icns" />
              <h3>Curriculum</h3>
            </Stack>
            <Stack direction="row" className="sidee">
              <img src={home} alt="home" className="side-icns" />
              <h3>Home</h3>
            </Stack>
            <Stack direction="row" className="sidee">
              <img src={settings} alt="settings" className="side-icns" />
              <h3>Settings</h3>
            </Stack>
          </Stack>
        </Stack>
        <Stack className="section-container">
          <Stack className="section-head" direction="row" spacing={2}>
            <ListItem className="arr" style={{ width: "5%" }}>
              <img src={arrow} alt="" style={{ objectFit: "cover" }} />{" "}
            </ListItem>
            <ListItem>
              <h2>Intern Scoreboard</h2>{" "}
            </ListItem>
          </Stack>
          <Stack className="section-body">
            <Tables />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Body;
