import { Drawer, Box, Typography } from "@mui/material"
import {useState} from 'react'

const MuiDrawer = () => {
  const[isDrawerOpen , setIsDrawerOpen] = useState(false)

  return (
    <>
   <Drawer 
   anchor='right'
   open={isDrawerOpen}
   onClose={() => setIsDrawerOpen(false)}
   >
   <Box p={2} 
   width='250px' 
   textAlign='center' 
   role='presentation'>
    <Typography 
    variant='h6' 
    component='div'>
        Side Panel
    </Typography>
   </Box>
   </Drawer>
   </>
  )
}

export default MuiDrawer