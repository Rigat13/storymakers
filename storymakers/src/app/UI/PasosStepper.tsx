import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import SwipeableViews from 'react-swipeable-views';


import { createTheme, responsiveFontSizes,ThemeProvider } from '@mui/material/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);


const styles = {
  root: {
    padding: '0 120px',
  },
  slideContainer: {
    padding: '0 20px',
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
};




export default function PasosStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  
  

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };


  const pasosList =   data.map( (paso,index) => (
    <div style={styles.slide}>
    <PasosComponent paso={paso} index={index} />
    </div>))

  const maxSteps = pasosList.length; //STEPPS MAXIMOS


  return (
   
         
    <Box sx={{flexGrow:1,width:'100%'}}>
<SwipeableViews  
    style={{
      width: '100%',
     paddingRight: '20%'
    }} 
    slideStyle={{
      width: '100%',
      paddingRight: ' 1%'
      
    }} 
   
    index={activeStep}
    onChangeIndex={handleStepChange}
    enableMouseEvents
    >
  {
    
    data.map( (paso,index) => (
    <div style={styles.slide}>
    <PasosComponent paso={paso} index={index} />
    </div>
    )
    )
  }
    </SwipeableViews>

    <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        sx ={{display: {  xs: 'none', md: 'flex'}}}
        nextButton={
          <Button
            size="medium"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{textTransform: 'none',color:'black',fontWeight:"bold" }}
          >
           Siguiente
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="medium" 
          onClick={handleBack} 
          disabled={activeStep === 0} 
          sx={{textTransform: 'none',color:'black',fontWeight:"bold" }}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Anterior
          </Button>
        }
      />

    </Box>

      
    
  );
  
}

const data = [
    {
      "title":"CREA TU CAMPAÑA",
      "body":"Define el objetivo de tu campaña, crea uno o más retos y define el incentivo que recibe el creador de contenido."
       ,"button":"¿Empezamos?"
      ,"img":"reels/reel-1.png"
    },
    {
      "title":"VÁLIDA y DESCARGA EL CONTENIDO DIGITAL",
      "body":"A los creadores de contenido les ha gustado tu reto y ya han participado en él. Ahora es tu momento. Visualiza este contenido auténtico y de calidad y valida aquel contenido que vayas a usar para tus comunicaciones."
      ,"button":"¿Empezamos?"  
      ,"img":"reels/reel-2.png"
      },  {
        "title":"MÉTRICAS DE RENDIMIENTO DE LA CAMPAÑA",
        "body":"Una vez hayas realizado lo anterior, ya estará todo listo para analizar los datos de la campaña."
         ,"button":"Contrata tu subscripción"
        ,"img":"reels/reel-3.png"
      }

]



const PasosComponent = ({...props}) => {
    let paso = props.paso;
    let index = props.index;

    const Pasos = styled(Paper)(({ theme }) => ({
        backgroundColor: 'white',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        
        height:500,
        color: theme.palette.text.primary,
        fontWeight:'bold',
        borderRadius:50
      }));
       
    return(
        <Pasos elevation={6}  >
  
      <Card sx={{display: 'flex',backgroundColor:'transparent',boxShadow:'none',height:'auto',m:4 }} >
      <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%' }}>
     <CardContent sx={{ flex: '0 1 auto' }}>
    
       <Typography variant='subtitle1' color="text.primary"  gutterBottom sx={{ textAlign: 'left',fontWeight:"bold"}}>
         Paso {index+1}.
       </Typography>
    
       <Typography variant='h4' color="text.primary"  gutterBottom sx={{ textAlign: 'left', width:500}}>
       {paso.title}
       </Typography>
      
       <Typography paragraph  sx={{ textAlign: 'justify',height:200, width:500}} >  
         {paso.body}
       </Typography>
  
     </CardContent>
     <CardActions sx={{ flex: '1'}}>
       <Button size="small" 
       sx={{backgroundColor:'black!important'
        ,color:'white'
        ,textTransform: 'none'
        ,width:200
      }}
       
       endIcon={<NavigateNextIcon />}
       >
        {paso.button}

        </Button>
     </CardActions>
     </Box>
    
     <CardMedia
       component="img"
       sx={{ width: 300,display: {  xs: 'none', md: 'flex'} }}
       image={paso.img}
       alt="reel"
     />
  
   
   </Card>
  
           </Pasos>
  
      )    
         
    

      
      
  }