"use client"
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RetosCollapse from "../../UI/collapse";
import Button from '@mui/material/Button';
import { useTranslations } from "next-intl";
import Box from '@mui/material/Box';

export default function Retos() {

  const t = useTranslations('retos');
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: 'lightgrey',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
       
        height:400,
        color: theme.palette.text.primary,
        fontWeight:'bold'
      }));
    return(
      
        <Typography variant="body1" component="div" className="bg-white">

{/* lo pongo aqui para que no tenga padding */}
    <div style={{position: "static", maxHeight:600,minWidth:'100%'}}> 
        <video  autoPlay loop muted style={{right:0,bottom:0,}} > 
          <source src="../video/video_retos-30fps.mp4"  type="video/mp4"/>
              Your browser does not support the video tag.
          </video>
          </div>  

          

<Grid container spacing={2} sx={{ 
 
 justifyContent: "center",
    alignItems: "center",
 
}} 
direction='column'
>
 <Grid item xs={3} sx={{justifyContent: "center",  }}>

<Button variant="contained"  role={undefined} size='large'

href='https://tally.so/r/n9vM7p'
target='_blank'
    sx={{backgroundColor:'#000000!important',
      width:200,
      boxShadow:"none",
      textTransform: 'none',
      fontFamily:'inherit',
      display:{xs:'none', md:'flex',},
     
      
    }} 
    
    >
        {t('participar')}
</Button>
</Grid>
</Grid>


  
       </Typography>
    
   ) 
  }


  /*

<Container maxWidth='xl' >

       <Grid container spacing={2} sx={{ 
        
        justifyContent: "center", //p:1
        alignItems: "flex-start",
        
       }} 
       direction='row'
       >
        <Grid item xs={2} sx={{justifyContent: "center",  }}>
      
       <Button variant="contained"  role={undefined} size='large'

       href='https://tally.so/r/n9vM7p'
       target='_blank'
           sx={{backgroundColor:'#000000!important',
             width:200,
             boxShadow:"none",
             textTransform: 'none',
             fontFamily:'inherit',
             display:{xs:'none', md:'flex',},
            
             
           }} 
           
           >
               {t('participar')}
     </Button>
       </Grid>
      
       
     <Grid item sx={{width:{xs:'100%',md:'100%'}}}>
       <RetosCollapse/>  
       </Grid>
           
      
       
      </Grid>
      </Container>

    
     */