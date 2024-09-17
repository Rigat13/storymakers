"use client"
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Descripcion from "../../UI/descripcion";
import DashboardLayout from "./DescLayout";
//import "/public/video/storymakers_landing.mp4";

export default function About() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "lightgray",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        height:400,
        color: theme.palette.text.primary,
        fontWeight:'bold'
      }));
    return(
        <Typography variant="body1" component="div" >
      
        {/*<Item >INFO</Item>*/} 
     <div style={{position: "static", maxHeight:700,minWidth:'100%'}}> 
     <video  autoPlay loop muted style={{right:0,bottom:0,}} > 
      <source src="../video/conocenos.mp4"  type="video/mp4"/>
          Your browser does not support the video tag.
      </video>
      </div>  
       
       
       <DashboardLayout>
              <Descripcion/>
      </DashboardLayout>

       </Typography>
    
   ) 
  }


