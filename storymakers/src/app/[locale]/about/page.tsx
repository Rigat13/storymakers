"use client"
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Descripcion from "../../UI/descripcion";
import DashboardLayout from "./DescLayout";

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
        <Container maxWidth='xl' >
       <Grid container spacing={2} sx={{p:1}} direction='column'>
        <Grid item xs>
        <Item >INFO</Item>
        </Grid>

       </Grid>
       </Container>
       
       <DashboardLayout>
              <Descripcion/>
      </DashboardLayout>

       </Typography>
    
   ) 
  }


