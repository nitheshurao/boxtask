import { Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CommonCard from './CommonCard'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Avatar } from '@mui/material';
import axios from "axios"
function Mymovies() {
  const [movedata,setMovedata]= useState([])
  useEffect(()=>{
    axios.get('http://test.boxigo.in/api_assignment.json').then((res)=>{
    console.log("-------res",res.data)
    setMovedata([res.data])
    })
      },[])
  return (
    <Box margin={'10px 0px'}>
      
      <Typography sx={{fontSize:'29', fontWeight:'600'}}>
      My Movies
        </Typography>
{movedata?.map((mydata)=>{
  return(<>
  <Grid container margin={'30px 0px'}>
      <Grid xs={3}>
       <Box sx={{}}>
        <Typography sx={{fontSize:'29', fontWeight:'600'}}>From</Typography>
        <Typography>{mydata?.moving_from}</Typography>
       </Box>
      </Grid>
      <Grid xs={3}>
      <Avatar  sx={{ bgcolor: 'null' ,backgroundColor:'white', boxShadow:'3px 5px 9px #ccc'}} >  <ArrowForwardIcon sx={{color:'red', }} /></Avatar>
    
      </Grid>
      <Grid xs={3}>
        <Box sx={{}}>
        <Typography sx={{fontSize:'29', fontWeight:'600'}}>To</Typography>
        <Typography>{mydata.moving_to}</Typography>
       </Box>
      </Grid>
       
     
      <Grid xs={3}>
        <Box sx={{}}>
        <Typography sx={{fontSize:'29', fontWeight:'600'}}>Request#</Typography>
        <Typography>{mydata?.estimate_id}</Typography>
       </Box>
      </Grid>
      </Grid>
     <Box>
     <CommonCard  items={mydata?.items.rooms}
            property_size={mydata?.property_size}
            total_items={mydata?.total_items}
            distance={mydata?.distance}
            moving_on={mydata?.moving_on}
            move_date_flexible={mydata?.move_date_flexible}
            />
     </Box>
  </>

  )
})

}
      
    
    </Box>
  )
}

export default Mymovies