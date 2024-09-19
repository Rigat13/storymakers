"use client"
import { Typography } from "@mui/material";
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import RetosCollapse from "../../UI/collapse";
import Button from '@mui/material/Button';
import { useTranslations,useLocale } from "next-intl";
import Box from '@mui/material/Box';
//import RetosGaleria from "@/app/UI/retosGaleria";
//import {GaleriaTab} from "@/app/UI/retosGaleria";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { Caveat } from "next/font/google";

import { DataLoader } from "@/app/dataLoaders/dataLoader";

const caveat = Caveat({subsets:["latin"], weight:"400", variable:"--font-caveat",});

export default function Retos() {

  const t = useTranslations('retos');
  
  let dataRetos = DataLoader("retos");
  
  

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
    <Typography component="div" sx={{position: "relative", maxHeight:{xs:150,md:400},minWidth:'100%',}}> 
        <video  autoPlay loop muted style={{right:0,bottom:0,}} > 
          <source src="../video/video_retos-30fps.mp4"  type="video/mp4"/>
              Your browser does not support the video tag.
          </video>          
     </Typography>

         <Box sx={{display:'flex',justifyContent:"center",position: "relative",mb:{xs:11,md:25} }} >
            <Button variant="contained"  role={undefined} size='large'

          href='https://tally.so/r/n9vM7p'
          target='_blank'
          sx={{backgroundColor:'#000000!important',
          width:200,
          boxShadow:"none",
          textTransform: 'none',
          fontFamily:'inherit',
          display:'flex',

          }} >
            {t('participar')}
          </Button>
        </Box>

<Container maxWidth='xl' sx={{height:500, pt:6}} >


  <RetosTemporal retos={dataRetos}  />

</Container>
</Typography>   
   ) 
  }



function RetosTemporal(props){

  let retos = props.retos;
  const t = useTranslations('appBar');
  const lan = useLocale();
  return(

  <Grid container spacing={4} sx={{ 
 
    justifyContent: "center", //p:1
    alignItems: "flex-start",
    textAlign:"center",
    direction:'row'
   }} >

    <Grid item xs={12}>
      <Typography className={caveat.className} component={'h1'} variant={'h3'} 
      sx={{textTransform:'uppercase'}}
      >{t('retos')}</Typography>
    </Grid>

    <Grid item container xs={10} md={6} spacing={{xs:3,md:18}} sx={{display:'flex',direction:'row', justifyContent: "center", }} >

{/*<ImageList cols={3} gap={2}  rowHeight={184} sx={{width:{xs:'90%',md:'60%'},overflow:'hidden'}} >*/}
  {retos.map((item) => (
  <Grid item xs={6} md={3}>
    <ImageListItem  sx={{ width:{xs:'100%',md:'100%'} }} >
      <img
        srcSet={`${item.reto.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.reto.img}?w=164&h=164&fit=crop&auto=format`}
        alt={item.reto.marca}
        loading="lazy"
        style={{borderRadius:15}}
      />
      <ImageListItemBar position="bottom"
      title={<Button variant="contained" href={item.reto.link_reto} 
      target='_blank' size='medium' sx={{  font:'inherit',color:'black', fontSize:12, fontWeight:'bold',
        width:{xs:'100%',md:'100%'}, backgroundColor:`${item.reto.color_boton}`+'!important',  borderRadius:15
    }} >     
    
     { lan=='es'?item.reto.texto_boton_es:item.reto.texto_boton_en}
    
      </Button> }

    sx={{
      background: 'none',
        
      borderRadius:5,
    }}
    
      />

   </ImageListItem>
   </Grid>
  ))} 
<Grid item xs={6} md={3} >
<ImageListItem  sx={{ width:{xs:'100%',md:'100%'} }} >
      <img
        srcSet={`${'../img/about_makers.png'}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${'../img/about_makers.png'}?w=164&h=164&fit=crop&auto=format`}
        alt={'siguiente_marca'}
        loading="lazy"
        style={{borderRadius:15}}
      />
      <ImageListItemBar position="bottom"
      title={ <AddCircleIcon fontSize='large' sx={{color:'#0045A8',background: 'radial-gradient(circle, rgba(0,0,0,1) 50%, ' + 'rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 0%)'}} />}
      subtitle={
        <Typography sx={{pt:2}}>
      <Button variant="contained" href= 'https://tally.so/r/mBG4E1'
      target='_blank' size='medium' sx={{  font:'inherit',color:'black', fontSize:12, fontWeight:'bold',
        width:{xs:'100%',md:'100%'},height:50, backgroundColor:'#0045A8!important',lineHeight:1.5,borderRadius:15,  }} >     
     
        {lan=='es'?'¿Quieres ser':'Want to be'}
        <br/>
        {lan=='es'?'la siguiente?':'the next one?'}
       
      </Button> 
      </Typography>
      }

    sx={{
      background: 'none',
      borderRadius:5,
    }}
    
      />

   </ImageListItem>
   </Grid>
  {/*</ImageList>*/}
  </Grid>

</Grid>  

  )

}




/* PUEDE SER UTIL PARA EL PROXIMO DISEÑO DE LOS RETOS */

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