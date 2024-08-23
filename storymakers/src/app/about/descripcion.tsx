"use client"
import { Box, Card, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { StoryLogoOnly, MakersLogoOnly } from "../UI/svgComponent";
import CardContent from '@mui/material/CardContent';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Descripcion(){


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
        <Grid item xs>
       
        <DescriptionComponent  
        logo={<StoryLogoOnly sx={{display:{ width: '100%',height:'auto' },}}/>}  
        description={"Las historias tienen un poder único: nos conectan, nos hacen sentir y, lo más importante, nos impactan de una manera que pocas cosas logran. En un mundo donde la autenticidad es el nuevo lujo, el storytelling se convierte en el puente que une a las marcas con las personas. No hay nada más auténtico que una historia bien contada, porque refleja lo que somos, lo que pensamos y lo que sentimos. Una buena historia no solo informa, sino que inspira, crea empatía y deja una huella. En Storymakers, creemos que las historias son el latido de una comunicación efectiva, y nos dedicamos a darles vida para que resuenen con fuerza en cada rincón digital."}
        />

        </Grid>
        
        <Grid item xs>
       
        <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={164} variant="woven">
        <ImageListItem key={1}>
        <img
        srcSet={`${"tedx/tedx-back-card.png"}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${"tedx/tedx-back-card.png"}?w=164&h=164&fit=crop&auto=format`}
        alt={"foto prueba"}
        loading="lazy"
        style={{borderRadius:20}}
      />
        </ImageListItem>
        <ImageListItem key={2}>
        <img
        srcSet={`${"tedx/tedx-back-card.png"}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${"tedx/tedx-back-card.png"}?w=164&h=164&fit=crop&auto=format`}
        alt={"foto prueba"}
        loading="lazy"
        style={{borderRadius:20}}
      />
        </ImageListItem>

</ImageList>

        </Grid>

        <Grid item xs>
        <Box sx={{display:"flex", justifyContent:"space-around", height:400, width:400,}} >
            <img
            srcSet={`${"tedx/tedx-back-card.png"}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${"tedx/tedx-back-card.png"}?w=164&h=164&fit=crop&auto=format`}
            alt={"foto prueba"}
            loading="lazy"
            style={{borderRadius:20, width:'100%', height:'auto'}}
        />
      </Box>
    
        </Grid>

        <Grid item xs>
       
       <DescriptionComponent  
       logo={<MakersLogoOnly sx={{display:{ width: 500,height:'auto' },}}/>}  
       description={"Los makers son el corazón de lo que hacemos. Son esas personas que, sin importar quiénes sean, tienen una historia que contar y ganas de compartirla. Aquí, los generadores de contenido no son solo clientes o fans de una marca; son individuos con voz propia, historias que quieren ser escuchadas y experiencias que merecen ser compartidas. Ya sea un cliente leal, un potencial comprador explorando por primera vez, o incluso un miembro del equipo interno, todos tienen algo que decir. Y en Storymakers, estamos aquí para darles ese espacio, para amplificar esas voces y convertir sus experiencias en contenido que resuena. Porque al final del día, lo que realmente mueve a las personas son las historias que los makers crean y comparten."}
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
    
        <Box sx={{display:'flex',justifyContent:'center'}}>
           
        <Typography variant="body2" component="section" sx={{width:'100%',textAlign:'justify'}}>
       
        <Typography variant="h2" component="div" sx={{width:400}} gutterBottom>
        {logo}  
        </Typography>
    
        <svg width="250" height="13" viewBox="0 0 250 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="250" height="13" fill="white"/>
        </svg>
        <Typography  variant="body2" paragraph 
        sx={{width:400,textAlign:'justify', pt:2, color:"white", fontWeight:"bold"}}>
        {desc}
        </Typography>
        </Typography>
        
        </Box>
    )
    
    
    }
    