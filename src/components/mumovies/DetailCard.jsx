import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, Chip, Typography } from '@mui/material'
import React from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetailCard from './AccordionDetailCard';
function DetailCard(props) {
    const {items}=props
    console.log("----itmes",items)
  return (
    <div>  
        
        {props.items.map((item)=>{
return(<Box>

<Accordion sx={{boxShadow:'none', padding:'0px'}}>
    <AccordionSummary
     expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
        sx={{color:'red', margin:'10px 0px', backgroundColor:'#e1dcdc', padding:'10px'}}
      >
        <Typography>
       <strong>{item.roomName} 
        </strong> 
        <Chip size="small" sx={{ width: 22, height:18 ,marginLeft:'10px', backgroundColor:'red', color:'white' }} label={item?.numberOfItems
         } />
        </Typography>
        
      </AccordionSummary>
      <AccordionDetails    sx={{color:'red',  padding:'0px'}}>
        <AccordionDetailCard 
categories={item.
    categories} />
              
      </AccordionDetails>
    </Accordion>
</Box>
   
)
        })}
       </div>
  )
}

export default DetailCard