import * as React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Rating from '@mui/material/Rating';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

//icons
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SurfingIcon from '@mui/icons-material/Surfing';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SearchIcon from '@mui/icons-material/Search';
import HistoryIcon from '@mui/icons-material/History';

import { useTranslations } from 'next-intl';


export function SearchBarGallery() {
     const t = useTranslations('retos')
        return (
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center',maxWidth:'100%'
              , height:40,borderRadius:20, width:{xs:'60%',md:'auto'}}}
             
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder={t('busca_retos')}
              inputProps={{ 'aria-label': 'busca retos' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        );
      }

      
export function GaleriaTab(props){
     const t = useTranslations('retos');

    // let numRetos= props.num
     let retos = props.retos
      
     if(retos){
      if(retos.length>0){
        
    // let checked = props.checked


        /*   ABAJO DE TODO VERSION CON GRID*/

        // cols={checked? 2 : 5}

    return(

      <TabPanel  value={0} index={0} >  {/* SI HACE FALTA MAS TABS, QUITAR TABPANEL DE AQUI Y USAR RETOSGALERIA */}

         <ImageList cols={5} rowHeight={184} sx={{width:{xs:'90%',md:'100%'} }}>  
  {retos.map((item) => (
    <ImageListItem key={item.reto.img}  // onClick={()=>props.onChange(item.id)} ABRE O CIERRA INFO LATERAL DEL RETO
    sx={{p:2, width:{xs:150,md:'100%'} }}
    >
      <img
        srcSet={`${item.reto.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.reto.img}?w=164&h=164&fit=crop&auto=format`}
        alt={item.reto.marca}
        loading="lazy"
        style={{borderRadius:20}}
      />
      <ImageListItemBar position="top" 
     title={<Typography variant='h6' component={'h2'} sx={{textAlign:'left',color:`${item.reto.active?'gray':'white'}` }}>{item.reto.marca}</Typography>} 
      subtitle={<Typography >
     {/* <Typography variant='caption' component="div" noWrap sx={{textAlign:'left',color:`${item.reto.active?'gray':'white'}`}}>{item.reto.info_marca}</Typography>*/ }
        <Button variant="contained"  href={item.reto.link_reto} target='_blank'
        sx={{textTransform: 'none', mt:7,ml:1,font:'inherit',color:`${item.reto.active?'black':'white'}`,
        backgroundColor:`${item.reto.active?'#6f6b6a!important':'#F0A362!important'}`,  
      }} > {t('participar')}</Button>
      </Typography>}
      
      sx={{height:'98%',width:'84%',ml:2,
        background:
          'linear-gradient(to top, rgba(0,0,0,0) 0%, ' +
          'rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 90%)' ,
        borderRadius:5,
      }}/>
    </ImageListItem>
  ))}

{/*  ARRAY DE PRUEBA SEGUN NUMERO DE RETOS 
{   [...Array(numRetos)].map((i) =>(
                <ImageListItem key={i} onClick={()=>props.onChange(0)} sx={{p:2 ,width:{xs:150,md:'100%'}}} >
     
             
             <img
        srcSet={`${"../tedx/vanguardia-business.png"}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${"../tedx/vanguardia-business.png"}?w=164&h=164&fit=crop&auto=format`}
        alt={"reto de prueba"}
        loading="lazy"
        style={{borderRadius:20}}
      />
       <ImageListItemBar position="top" 
      title={<Typography variant='h6' component={'h2'} sx={{textAlign:'left'}}>Marca X</Typography>} 
      subtitle={<Typography >
       <Typography variant='caption' component="div" noWrap >El reto consiste en</Typography> 
        <Button variant="contained"  sx={{textTransform: 'none', mt:1,font:'inherit',
        backgroundColor:'#F0A362!important',  
      }} >{t('participar')}  </Button>
      </Typography>}
      
      sx={{height:'90%',width:'81%',ml:2,
        background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 90%)' ,
        borderRadius:5,
      }}/>
         </ImageListItem>
          
               
     ))} 
      
      */}
</ImageList> 

</TabPanel>
       )

      }}
      
  }
  

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{maxWidth:'100%'}}  //este width afecta al container de los retos 
      {...other}
    >
      {value === index && (
      <Container  sx={{padding:4}}>
       <Paper elevation={6}  sx={{
         backgroundColor: '#F8BF8F',
         height:500,
         borderRadius:20,
         
       }} >
       <Box 
       sx={{  display: 'flex', height: 'auto',maxHeight:500,p:4,}}
       >
       {children}
       </Box>
     </Paper>
     </Container>
       
      )}
    </div>
   
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function RetosGaleria(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  
  return (
  
    <Container  sx={{p:1, maxWidth:'100%'}}>
    <Paper elevation={6} sx={{bgcolor: '#FAD3B2', borderRadius:10, }} >

    <Box 
      sx={{  display: 'flex'
        , height: 'auto', flexGrow:1}}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{pt:4,
         '& .MuiTabs-indicator': {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'rgba(208, 100, 12,0.5)',
            width: '100%',
        },
        

         }}
      >
        <Tab disableRipple icon={<HistoryIcon sx={{ color:'black' }}/>} {...a11yProps(0)}
       
        />
        <Tab disableRipple icon={<SurfingIcon sx={{ color:'black' }} />} {...a11yProps(1)}
      
        />
        <Tab disableRipple icon={<TravelExploreIcon sx={{ color:'black' }} />} {...a11yProps(2)}
     
        />
        
      </Tabs>
      <TabPanel  value={value} index={0} >
       <GaleriaTab num={5}  onChange={props.onChange} retos={props.data} checked={props.checked}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <GaleriaTab num={0} onChange={props.onChange} retos={props.data} checked={props.checked}/>
     {/** <GalleryTabGrid num={0} retos={props.data} /> */}
      </TabPanel>
      <TabPanel value={value} index={2}>

        <Grid container direction={'column'}>
          <Grid item md>
        <SearchBarGallery />
        </Grid>
          <Grid item>
         <GaleriaTab num={0} onChange={props.onChange} retos={props.data} checked={props.checked}/> 
        </Grid>
      </Grid> 
      </TabPanel>
     
    </Box>

    </Paper>
    </Container>
   
  );
}


export const RetoComponent = ({...props}) => {

  
  type retoType = {marca:string,info_marca:string,requisitos:string[],dificultad:number,
    recompensa:string,img:string}  //es opcional crear esto

  let reto:retoType = props.data.reto;
  
 
const t = useTranslations('retos');

  const Retos = styled(Paper)(({ theme }) => ({
      backgroundColor: 'white',
      ...theme.typography.body2,
      padding: theme.spacing(1),
      textAlign: 'center',
     // width:500,
      height:570,
      color: theme.palette.text.primary,
      fontWeight:'bold',
      borderRadius:50
    }));
     
  return(
      <Retos elevation={6}  >

    <Card sx={{display: 'flex',backgroundColor:'transparent',boxShadow:'none',height:'auto',m:4 }} >
    <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth:'100%' }}>
   <CardContent sx={{ flex: '0 1 auto' }}>
  
     <Typography variant='h3' color="text.primary"  gutterBottom sx={{ textAlign: 'left'}}>
      {reto.marca}
     </Typography>

     <Typography variant='body2' color="text.primary"  gutterBottom sx={{ textAlign: 'left'}}>
      {reto.info_marca}
     </Typography>
  
     <Typography variant='subtitle1' color="text.primary"  gutterBottom sx={{ textAlign: 'left',fontWeight:'bold',}}>
     {t('requisitos')}
     </Typography>
    
    <Typography variant='body2' color="text.primary"   sx={{ textAlign: 'left', p:1,}}>
     <ul style={{ listStyleType: 'square'}}>
        {reto.requisitos.map((req)=>(
      <li>{req}</li>

   ))

   } 
    </ul>
    </Typography>
                   
     <Typography variant='subtitle1' color="text.primary"  gutterBottom sx={{ textAlign: 'left',fontWeight:'bold',}}>
    {t('dificultad')}
     </Typography>
     <Typography variant='body2' sx={{ textAlign: 'left',}} >
     <Rating name="rating-dificultad" 
     readOnly
     sx={{ '& .MuiRating-iconFilled': {
      color: 'black',
    },}}
     value={reto.dificultad}
     max={5} 
     icon={<StarIcon fontSize="inherit" />}
        emptyIcon={<StarBorderIcon fontSize="inherit" />}
     />
    </Typography>
     <Typography variant='subtitle1' color="text.primary"  gutterBottom sx={{ textAlign: 'left',fontWeight:'bold',}}>
     {t('recompensa')}
     </Typography>

     <Typography variant='h4' color="text.primary"  gutterBottom sx={{ textAlign: 'left',fontWeight:'bold',}}>
     {reto.recompensa}
     </Typography>

  

   </CardContent>
   <CardActions sx={{ flex: '1'}}>
     <Button size="small" 
     sx={{backgroundColor:'black!important'
      ,color:'white'
      ,textTransform: 'none'
      ,width:200,
      font:'inherit',
    }}
     
     endIcon={<NavigateNextIcon />}
     >
      {t('unirse')}

      </Button>
   </CardActions>
   </Box>
 
 </Card>

         </Retos>

    )    
       
  

    
    
}


function GalleryTabGrid(props){

  const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: 'white',
        ...theme.typography.body2,
        //padding: theme.spacing(1),
        textAlign: 'center',
        width:120,
        height:120,
        color: theme.palette.text.primary,
        fontWeight:'bold',
        borderRadius:20
      }));
      let numRetos= props.num
      let retos = props.retos

return(
     
     
      <Grid container  spacing={{ xs: 1, sm: 6, md: 4 }} 
       sx={{overflowY:'auto',}}
      columns={{ xs: 1, sm: 2, md: 4 }} 
      alignItems={'center'}
      direction={{ xs: 'column', sm: 'column',md:'row' }}>
      
      { retos.map((reto)=>(

              <Grid item md={'auto'}   >
              <Button onClick={()=>props.onChange(reto.id)}  >
                    
                      <Item>
                      <img
                        srcSet={`${reto.reto.img}?w=120&h=120&fit=crop&auto=format&dpr=2 2x`}
                        src={`${reto.reto.img}?w=120&h=120&fit=crop&auto=format&`}
                        alt={reto.marca}
                        loading="lazy"
                        style={{borderRadius:20}}
                       />
                     
                        
                      </Item>
                
                  </Button>
                      </Grid>
      ))}

{   [...Array(numRetos)].map(() =>(
                <Grid item md={'auto'}   >
       <Button onClick={props.onChange(1)}  >
             
                <Item></Item>
         
           </Button>
                </Grid>
     ))}
    
    
      
    
     </Grid>
     )}
    
    