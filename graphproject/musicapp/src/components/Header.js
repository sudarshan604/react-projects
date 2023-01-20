import { AppBar,Toolbar,Typography } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import HeadphonesIcon from '@mui/icons-material/Headphones';
import React from 'react'

const useStyles = makeStyles()((theme) => {
   return {
   
     title: {
       marginLeft: theme.spacing(2),
     },
   };
 });



function Header() {

    const {classes} = useStyles();
    console.log(classes)
  return (
     <AppBar color="secondary" position='fixed' >
          <Toolbar>
             <HeadphonesIcon/>
             <Typography className={classes.title} variant="h6" component="h1">
                Apollo Music Share
             </Typography>
          </Toolbar>
     </AppBar>
  )
}

export default Header
