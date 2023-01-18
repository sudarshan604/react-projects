import { AppBar,Toolbar,Typography } from '@mui/material'
import HeadphonesIcon from '@mui/icons-material/Headphones';
import React from 'react'

function Header() {
  return (
     <AppBar color="secondary" position='fixed' >
          <Toolbar>
             <HeadphonesIcon/>
             <Typography variant="h6" component="h1">
                Apollo Music Share
             </Typography>
          </Toolbar>
     </AppBar>
  )
}

export default Header
