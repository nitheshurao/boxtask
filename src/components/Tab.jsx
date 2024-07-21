import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Mymovies from "./mumovies/Mymovies";
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";
import PersonIcon from "@mui/icons-material/Person";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      sx={{ width: "99%", margin: "0px 40px 0px 0px " }}
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          <>{children}</>
        </>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "100vh",
      }}
    >
      <Tabs
        TabIndicatorProps={{
          style: { background: "red", padding: "3px", margin: "2px" },
        }}
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          ".MuiTabs-indicator": {
            left: 0,
          },
          borderColor: "divider",
          color: "red",
          width: "300px",
        }}
      >
        <Tab
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ElectricRickshawIcon />
              MY MOVES
            </Box>
          }
          sx={{ alignItems: "flex-start" }}
          {...a11yProps(0)}
        />
        <Tab
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <PersonIcon />
              MY PROFILE
            </Box>
          }
          sx={{ alignItems: "flex-start" }}
          {...a11yProps(1)}
        />
        <Tab
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <RequestQuoteIcon /> GET QUOTE
            </Box>
          }
          sx={{ alignItems: "flex-start" }}
          {...a11yProps(2)}
        />
        <Tab
          label={
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <ExitToAppIcon /> LOG OUT
            </Box>
          }
          sx={{ alignItems: "flex-start" }}
          {...a11yProps(3)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Mymovies />
      </TabPanel>
      <TabPanel value={value} index={1}>
        MY PROFILE
      </TabPanel>
      <TabPanel value={value} index={2}>
        GET QUOTE
      </TabPanel>
      <TabPanel value={value} index={3}>
        LOG OUT
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
    </Box>
  );
}
