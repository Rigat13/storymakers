"use client"
import { Box, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { StoryLogoOnly, MakersLogoOnly } from "./svgComponent";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { BloqueSVG } from "./svgComponent";
import { useTranslations } from "next-intl";

export default function Descripcion(){

    const t = useTranslations('about');  

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "lightgray",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        height:200,
        color: theme.palette.text.primary,
        fontWeight:'bold'
      }));
    return(
        <Typography variant="body1" component="div" >

        <Container maxWidth='xl' >
       <Grid container spacing={1} sx={{p:4}} columns={2} rowSpacing={1}>
        <Grid item xs={2} md>
       
        <DescriptionComponent  
        logo={<StoryLogoOnly sx={{ width:{xs:'80%',md:'40%'},height:'auto' ,}}/>}  
        description={t("story_description")} 
        />

        </Grid>
        
        <Grid item sx={{display:{xs:'none',md:'flex'}}}>
       {/* FOTOS STORY */}
        <ImageList sx={{ width:{xs:300,md:500}, height:{xs:'auto',md:400} }} cols={2} rowHeight={164} variant="woven">
        <ImageListItem key={1}>
        <img
        srcSet={`${"../img/story_foto_izquierda.jpg"}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${"../img/story_foto_izquierda.jpg"}?w=164&h=164&fit=crop&auto=format`}
        alt={"foto prueba"}
        loading="lazy"
        style={{borderRadius:20}}
      />
        </ImageListItem>
        <ImageListItem key={2}>
        <img
        srcSet={`${"../img/paso_3.png"}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${"../img/paso_3.png"}?w=164&h=164&fit=crop&auto=format`}
        alt={"foto prueba"}
        loading="lazy"
        style={{borderRadius:20}}
      />
        </ImageListItem>

</ImageList>

        </Grid>

        <Grid item xs sx={{display:{xs:'none',md:'flex'}}}>  {/* FOTOS MAKERS */}
        <Box sx={{display:"flex", justifyContent:"space-around", height:'auto', width:{xs:300,md:400},}} >
            <img
            srcSet={`${"../img/about_makers.png"}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${"../img/about_makers.png"}?w=164&h=164&fit=crop&auto=format`}
            alt={"foto prueba"}
            loading="lazy"
            style={{borderRadius:20, width:'100%', height:'auto'}}
        />
      </Box>
    
        </Grid>

        <Grid item xs={2} md  >
       
       <DescriptionComponent  
       logo={<MakersLogoOnly sx={{ width:{xs:'100%',md:'60%'},height:'auto' ,}}/>}  
       description={t("makers_description")}
       />

        </Grid>

       </Grid>
       
       </Container>
       </Typography>
    
   ) 
}


const DescriptionComponent = (props) => {

    let logo = props.logo;

    let desc = props.description;

    return(
    
        <Box sx={{display:'flex',justifyContent:'center',}}>
           
        <Typography variant="body2" component="section" sx={{width:'100%',textAlign:'justify'}}>
       
        <Typography variant="h2" component="div" gutterBottom >
        {logo}  
        </Typography>
       
       {/** <BloqueSVG sx={{ width:{xs:'60%',md:'40%'},height:'auto' ,}}/>  */}
       
        <Typography  variant="body2" paragraph 
        sx={{width:{xs:'110%',md:500},textAlign:'justify', pt:2, color:"black", }}>
        {desc}
        </Typography>
        </Typography>
        
        </Box>
    )
    
    }
    