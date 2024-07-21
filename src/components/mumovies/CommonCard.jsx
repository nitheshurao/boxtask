import { CheckBox } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CardHeader,
  Checkbox,
  Collapse,
  FormControlLabel,
  FormGroup,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import DetailCard from "./DetailCard";
import HouseDetails from "./HouseDetails";
import GroupsIcon from "@mui/icons-material/Groups";
import HomeIcon from "@mui/icons-material/Home";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EditIcon from "@mui/icons-material/Edit";
import { Divider } from "@mui/material";
import MovingIcon from "@mui/icons-material/Moving";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

const TextwithPad = styled(Typography)(({ theme }) => ({
  paddingLeft: "10px",
  color: "black",
}));

function CommonCard(props) {
  const {
    move_date_flexible,
    items,
    total_items,
    property_size,
    distance,
    moving_on,
  } = props;
  const [expanded, setExpanded] = React.useState([""]);

  const handleExpandClick = (id) => {
    // Check if id is already in the expanded array
    const isExpanded = expanded.includes(id);

    // Toggle the expand state
    if (isExpanded) {
      // If id is already expanded, remove it from the array
      const newExpanded = expanded.filter((item) => item !== id);
      setExpanded(newExpanded);
    } else {
      // If id is not expanded, add it to the array
      setExpanded((prevExpanded) => [...prevExpanded, id]);
    }
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignitems: "center",
          justifyContent: "space-between",
          color: "red",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <HomeIcon />

          <TextwithPad>{property_size}</TextwithPad>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <GroupsIcon />
          <TextwithPad>{total_items}</TextwithPad>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <MovingIcon />
          <TextwithPad>{distance}</TextwithPad>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <CalendarMonthIcon />

          <TextwithPad>{moving_on}</TextwithPad>
          <EditIcon sx={{ paddingLeft: "10px", color: "black" }} />
        </Box>

        <Box
          sx={{ display: "flex", flexDirection: "row", alignitems: "center" }}
        >
          <CheckBox checked={move_date_flexible} />
          <TextwithPad>is flexible</TextwithPad>
        </Box>

        <Box>
          <Button
            variant="outlined"
            sx={{ marginRight: "10px", border: "2px solid" }}
            onClick={() => handleExpandClick("it.name")}
          >
            View move details
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "red" }}>
            {" "}
            Quotes Awaiting
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignitems: "center",
          color: "red",
        }}
      >
        <ReportProblemIcon size={"small"} sx={{ height: "18px" }} />
        <Typography
          sx={{ paddingLeft: "10px", color: "black", fontSize: "14px" }}
        >
          <strong>Disclaimer:</strong> Please update your move date beforetwo
          days of shifting
        </Typography>
      </Box>
      <Collapse in={expanded.includes("it.name")} timeout="auto" unmountOnExit>
        <Box sx={{ marginTop: "30px" }}>
          <Typography>
            <strong>Inventory Details</strong>
            <Button
              variant="contained"
              sx={{ backgroundColor: "black", marginLeft: "10px" }}
            >
              Edit inventory
            </Button>
          </Typography>

          <DetailCard items={items} />

          <Box sx={{ marginTop: "10px" }}>
            <Typography>
              <strong>House Details</strong>
              <Button
                variant="contained"
                sx={{ backgroundColor: "black", marginLeft: "10px" }}
              >
                Edit House details
              </Button>
            </Typography>

            <HouseDetails />
            <Divider />
            <HouseDetails />
          </Box>
        </Box>
      </Collapse>
    </div>
  );
}

export default CommonCard;
