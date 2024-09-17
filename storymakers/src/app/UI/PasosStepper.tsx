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
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { useTranslations } from 'next-intl';

let theme = createTheme();
theme = responsiveFontSizes(theme);


const styles = {
  root: {
    padding: '0 120px',
  },
  slideContainer: {
    padding: '0px 20px',
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
  
  const t = useTranslations('landing');

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
    <div style={styles.slide} key={index}>
    <PasosComponent paso={paso} index={index} />
    </div>))

  const maxSteps = pasosList.length; //STEPPS MAXIMOS


  return (
   
         
    <Box sx={{flexGrow:1,width:'100%'}}>
<SwipeableViews  
className='slidesStepsResponsive'
    style={{
      width: '100%',
    }} 
    slideStyle={{
      width: '100%',
      paddingRight: '1%'
      
    }}     
    index={activeStep}
    onChangeIndex={handleStepChange}
    enableMouseEvents
    >
  { pasosList }
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
          {t('paso_siguiente')}
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
           {t('paso_anterior')}
          </Button>
        }
      />

    </Box>

      
    
  );
  
}

const data = [
    {
      "title":"pasos.paso_1.title",
      "body":"pasos.paso_1.body"
       ,"button":"start_button"
      ,"img":"../img/paso_1.png"
    },
    {
      "title":"pasos.paso_2.title",
      "body":"pasos.paso_2.body"
      ,"button":"start_button"  
      ,"img":"../img/paso_2.png"
      },  {
        "title":"pasos.paso_3.title",
        "body":"pasos.paso_3.body"
         ,"button":"contrata_subscripcion"
        ,"img":"../img/paso_3.png"
      }

]



const PasosComponent = ({...props}) => {
    let paso = props.paso;
    let index = props.index;

    const t = useTranslations('landing')

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
        <Pasos elevation={6} sx={{width:{xs:250, sm:'100%', md:'100%'}}} >
  
      <Card sx={{display: 'flex',backgroundColor:'transparent',boxShadow:'none',height:'auto',m:4 }} >
      <Box sx={{ display: 'flex', flexDirection: 'column', width:{xs:'60%',md:'50%'} }}>
     <CardContent sx={{ flex: '1 0 auto' }}>
    
       <Typography variant='subtitle1' color="text.primary"  gutterBottom  sx={{ textAlign: 'left',fontWeight:"bold"  }}>
         {t('paso')} {index+1}.
       </Typography>
    
       <Typography variant='h4' color="text.primary"  gutterBottom 
       sx={{ textAlign: 'left', width:{xs:150,sm:200,md:250}, fontSize:{xs:'100%',md:30}}}>
       {t(paso.title)}
       </Typography>
      
       <Typography paragraph  sx={{ textAlign: 'justify',height:150, 
        width:{xs:150,sm:200,md:200}, fontSize:{xs:'100%',}
       }} >  
         {t(paso.body)}
       </Typography>
  
     </CardContent>
     <CardActions sx={{ flex: '1', width:{xs:200}}}>
       <Button size="small" 
       href='https://tally.so/r/mBG4E1'
       target='_blank'
       sx={{backgroundColor:'black!important'
        ,color:'white'
        ,textTransform: 'none'
        ,width:{xs:150,sm:200,md:200}
      }}
       
       endIcon={<NavigateNextIcon />}
       >
        {t(paso.button)}

        </Button>
     </CardActions>
     </Box>
     <CardMedia
       component="img"
       sx={{ width: 300,height:400,borderRadius:3,
        display: {xs: 'none', md: 'flex',}}}
       image={paso.img}
       alt="step"
     />
      </Card>
  
 </Pasos>
  
      )    
        
  }