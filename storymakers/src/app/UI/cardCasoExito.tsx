import { Typography,Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import { useTranslations } from "next-intl";
export default function CardCasoExito(){

    const t = useTranslations('landing')

    return(
        <Paper elevation={8}>
        <Card sx={{ display: 'flex',width:'100%', height:350 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5" sx={{fontSize:{xs:20,md:30}}}>
             {t('reconocimiento')}
            </Typography>
            <Typography variant="body1" component='section' color="text.secondary" 
            sx={{fontSize:{xs:10, md:'100%'}}}
            >
            Lorem ipsum dolor sit, consectetuer adipiscing. Lorem ipsum dolor sit, consectetuer adipiscing. Lorem ipsum dolor sit, consectetuer adipiscing
           
            </Typography>
          </CardContent>
        
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 300 }}
          image="tedx/tedx-business.png"
          alt="reconocimiento"
        />
      </Card>

      </Paper>

    )
}