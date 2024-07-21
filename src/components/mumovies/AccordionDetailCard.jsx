import { Box, Grid, Typography } from '@mui/material';
import React from 'react'

function AccordionDetailCard(props) {
    const {categories} = props
    console.log("-categories",categories);
  return (
    <Box sx={{color:'black'}}>
    <Grid container >
    {props?.categories?.map((item)=>{
            return(
                 <Grid xs={4}>
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: '600',
                  wordBreak: 'break-word',
                //   mt: 1,
                //   mb: 1,
                }}
              >
              <strong>   {item.categoryName} 
                </strong>
                 
              </Typography>
              <Box>
                {item.itemsList?.all.map((myall)=>{
if(myall?.qty>0){
    return(<Box sx={{margin:'20px 60px 20px 0px'}}>
       <Box sx={{display:'flex', justifyContent:'space-between'}}>
<Typography>
{myall?.display_name}   
</Typography>
<Typography><strong>{myall?.qty}
    </strong> 
</Typography>       

 </Box>
 <Typography> 
<strong> {myall?.type?.default_type}
    </strong>
 </Typography> 
    </Box>
       


    )
}
                  
                })

                }
              </Box>
            </Grid>
         
           )
        })}
    </Grid>
       
    </Box>
  )
}

export default AccordionDetailCard