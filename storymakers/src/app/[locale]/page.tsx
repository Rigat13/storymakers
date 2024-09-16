"use client";
import { Typography,Box } from "@mui/material";
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import PasosStepper from "../UI/PasosStepper";
import FlipCard from "../UI/FlipCard";
import CardCasoExito from "../UI/cardCasoExito";
import InstaGallery from '../UI/beholdAPI';
import { Caveat } from "next/font/google";
import { useEffect, useState } from "react";
import {useLocale, useTranslations,useMessages} from 'next-intl';

const caveat = Caveat({subsets:["latin"], weight:"400", variable:"--font-caveat",});

export default function LandingPage() {

  const t = useTranslations('landing');
  const messages = useMessages();

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: 'lightgrey',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        height:400,
        color: theme.palette.text.primary,
        fontWeight:'bold'
      }));

      const TituloLanding = styled(Typography)(({ theme }) => ({
        ...theme.typography,
        padding: theme.spacing(1),
        color: theme.palette.text.primary,
        //width:420,
        //height:240, //300
        fontFamily: 'var(--font-caveat)',
        /*'1.9rem' ,//60,
        '@media (minWidth:600px)': {
          fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '3.5rem', //'4.0rem',
        },*/
        
        lineHeight: '100%',
        textAlign: 'left'
      }));

        const [esl, setEsl] = useState(0);
        const keys= Object.keys(messages.landing['eslogans']);
        const eslogan =keys.map((key) => (t(`eslogans.${key}`)) )
        //keys.map((key) => (t(`eslogans.${key}`)) )
        //["Donde la autenticidad genera impacto."," El poder del storytelling.","Comunica a través del UGC."];
        const [text,setText] = useState("")
        let index = 0;
        var initText = ""

      function CarrouselEslogan(){
          
         useEffect(() => {
       
            const newId = setInterval(() => {

              changeEslogan();
              typeWriter();
           
            }, 2000); // Change text every 2 seconds
   
          return () => {
           
              clearInterval(newId);
        
          };
        }, []); 
      
      
          return( <TituloLanding sx={{  fontSize:{xs:'30px',sm:'34px',md:'40px'}, height:{xs:120,md:160}}}  >
             
            {t('eslogan_fijo')} 
            {text}            
          </TituloLanding>   
)
        }

        const changeEslogan = () =>{
          if(esl < eslogan.length-1){
              
            setEsl(esl+1);
          }else{
            setEsl(0);
           
          }  
        }

        const typeWriter = () => {
        
          var totalText =eslogan[esl];
 
          var speed =90;
          if (index < totalText.length){
           initText = initText.concat(totalText.charAt(index));
         
           setTimeout(typeWriter, speed);
           setText(initText);
           
           index++;
            
          }
 
      }
      
    return (

        <Typography variant="body1" component="div" className="bg-white">
            <Container maxWidth='xl' >
           <Grid container spacing={3} sx={{p:1}} columns={{ xs:2, md:1}} rowSpacing={{xs:2}}>
            
            <Grid item xs={2} md>  {/* ESLOGAN, EMAIL, ETC */}
           
            <Typography variant="h1" component="h1" sx={{p:1,fontSize:{xs:30,sm:40,md:70}}}>
            {t("titulo_fijo")}
           </Typography>
           
            <div className={caveat.className}  >
              
               <CarrouselEslogan/>   

           </div>
           
           <Typography variant="subtitle1" component="section" sx={{p:1,}}>
           hola@storymakers.es
           </Typography>

          <Button
                
                sx={{ textTransform: 'none', fontWeight:"bold" ,
                  color:'white', backgroundColor:'black!important', width:'100%',
                 
                }}
                href={'https://tally.so/r/mBG4E1'}  // ROUTING SECTIONS
                target="_blank"
              >          
            {t('start_button')}
              </Button >
           
            </Grid>

        
            <Grid item xs>  {/* GALERIA CONTENIDO INSTAGRAM */}
           
            <InstaGallery feedId="L6ni5jBOB5sAV4XLLBy1" />

            </Grid>
           </Grid>

           <Grid container spacing={1} sx={{p:1,justifyContent:'center',mt:4}} > {/* PASOS CREADORES CONTENIDO */}
           
           <PasosStepper/>
           
            
           </Grid>
        
            {/* MARCAS  */}
            
            <Grid container spacing={1} sx={{p:4,justifyContent:'center'}}>  
            
            <div className={caveat.className}>
            <TituloLanding sx={{fontSize:40,textAlign:'center',textTransform:'uppercase'}} > Han confiado en nosotros </TituloLanding>
            </div>
          
            <Grid item xs={1} md={7}>
            
            <FlipCard data={'marcas'}/>
            </Grid>
           </Grid>

            {/* CASO DE EXITO */}    
           <Grid container spacing={1} sx={{p:4,justifyContent:'center'}} >
            <Grid item xs={10}>
            <CardCasoExito/>
            </Grid>
            
           </Grid>

           {/* RECONOCIMIENTOS/PREMIOS */}
           <Grid container spacing={1} sx={{p:1,m:1,justifyContent:'center'}} >
           <Grid item xs={2} md={10}>
            <FlipCard data={'premios'}/>
            </Grid>
           
           </Grid>

           </Container>
        </Typography>

    )
  }




