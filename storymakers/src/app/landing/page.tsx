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
import { useEffect, useRef, useState } from "react";

const caveat = Caveat({subsets:["latin"], weight:"400", variable:"--font-caveat",});

export default function LandingPage() {
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
        ...theme.typography.button,
        padding: theme.spacing(1),
        color: theme.palette.text.primary,
        width:420,
        height:250, //300
        fontFamily: 'var(--font-caveat)',

        fontSize: '0.9rem' ,//60,
        '@media (minWidth:600px)': {
          fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '3.5rem', //'4.0rem',
        },
        lineHeight: '100%', //1.14,
        textAlign: 'left'
      }));

     /* const CuadradoTitulo =  ({ ...props })=> { 
        return(
        <svg width="423" height="33" viewBox="0 0 423 33" fill="none" xmlns="http://www.w3.org/2000/svg"  {...props}>
          
          <rect width="423" height="33" fill="black"/>
          
        </svg>
      )}* */
       
        const [esl, setEsl] = useState(0);
        const eslogan = ["Donde la autenticidad genera impacto."," EL PODER DEL STORYTELLING.","Comunica a través del UGC."];
        const [text,setText] = useState("")
        let index = 0;
        var initText = ""

      function CarrouselEslogan(){
          
         useEffect(() => {
       
            const newId = setInterval(() => {

              changeEslogan();
              typeWriter();
           
            }, 5000); // Change text every 5 seconds
   
          return () => {
           
              clearInterval(newId);
        
          };
        }, []); 
      
      
          return( <TituloLanding >

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
           <Grid container spacing={3} sx={{p:1}} columns={1}>
            <Grid item xs  >  {/* ESLOGAN, EMAIL, ETC */}
           
            <div  className={caveat.variable} >
               
               <CarrouselEslogan/>   

           </div>
           
           <Typography variant="subtitle1" component="section" sx={{p:1,}}>
            correo@storymakers.es
           </Typography>
          
          {/* <CuadradoTitulo style={{width:'100%',height:'auto'}} />*/}

          <Button
                
                sx={{ textTransform: 'none', fontWeight:"bold" ,
                  color:'white', backgroundColor:'black!important', width:'100%'
                }}
                href={'https://tally.so/r/mBG4E1'}  // ROUTING SECTIONS
                target="_blank"
              >          
              ¿Empezamos?     
              </Button >
           
            </Grid>

        
            <Grid item xs>  {/* GALERIA CONTENIDO INSTAGRAM */}
           
            <InstaGallery feedId="L6ni5jBOB5sAV4XLLBy1" />

            </Grid>
           </Grid>

           <Grid container spacing={1} sx={{p:1,justifyContent:'center'}} > {/* PASOS CREADORES CONTENIDO */}
           
           <PasosStepper/>
           
            
           </Grid>
        
            {/* MARCAS  */}
            <Grid container spacing={1} sx={{p:4,justifyContent:'center'}}>  
            <Grid item xs={10}>
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
           <Grid item xs={10} >
            <FlipCard data={'premios'}/>
            </Grid>
           
           </Grid>

           </Container>
        </Typography>

    )
  }




