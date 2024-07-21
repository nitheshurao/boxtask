import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function HouseDetails(props) {
  return (
    <Box sx={{margin:'30px 20px'}}>
     <Grid container spacing={2}>
  <Grid  xs={3}>
  <Box>
    <Typography>
    <strong>Floor no</strong>
  </Typography>

  <Typography sx={{ aligns: "center" }}>0</Typography>
    </Box>
  </Grid>
  <Grid  xs={3}>
  <Box> <Typography>
    <strong>Elevator Available</strong>
  </Typography>

  <Typography sx={{ aligns: "center" }}>No</Typography></Box>
  </Grid>
  <Grid  xs={3}>
   <Box>
   <Typography>
    <strong>Packing Required</strong>
  </Typography>
  <Typography sx={{ aligns: "center" }}>Yes</Typography>
   </Box>
  </Grid>
  <Grid  xs={3}>
   <Box>
   <Typography>
    <strong>Distance from truck to door</strong>
  </Typography>

  <Typography sx={{ aligns: "center" }}>1 meter</Typography>
   </Box>
  </Grid>
  <Grid  xs={3}>
  <Box><Typography>
    <strong>Additional information</strong>
  </Typography>

  <Typography sx={{ aligns: "center" }}>0</Typography></Box>
  </Grid>
</Grid>
    
    </Box>
  );
}

export default HouseDetails;


{/* <Grid sx={3}>
 
</Grid>
<Grid xs={3}>

</Grid>
<Grid xs={3}>
 
</Grid>
<Grid xs={3}>
  
</Grid>
</Grid> */}