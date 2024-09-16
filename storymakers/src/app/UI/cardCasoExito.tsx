import { Typography,Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useTranslations } from "next-intl";
export default function CardCasoExito(){

    const t = useTranslations('landing')

    return(
        <Paper elevation={8}>
        <Card sx={{ display: 'flex',width:'100%', height:350 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5" sx={{fontSize:{xs:20,md:30}}}>
             {t('caso_exito_titulo')}
            </Typography>
            <Typography paragraph textAlign={'justify'} color="text.secondary"
            sx={{fontSize:{xs:10, md:'100%'},}}
            >
             {t('caso_exito')}
            </Typography>
          </CardContent>
        

          <CardActions sx={{ flex: '1'}}>
       <Button size="small" 
       href='https://tedxupfmataro.es/'
       target='_blank'
       sx={{backgroundColor:'black!important'
        ,color:'white'
        ,textTransform: 'none'
        ,width:{xs:150,sm:200,md:200}
      }}
       
       endIcon={<NavigateNextIcon />}
       >
        {t('saber_mas')}

        </Button>
     </CardActions>
        </Box>      

        <CardMedia
          component="img"
          sx={{ width: 300 }}
          image="img/caso_exito_TEDx.png"
          alt="reconocimiento"
        />

      </Card>

      </Paper>

    )
}