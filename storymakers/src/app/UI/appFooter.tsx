"use client";

import { Box,Typography } from "@mui/material";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { StoryMakersLogoWhite } from "./svgComponent";
import { DivisorFooterSVG } from "./svgComponent";
import { sendGTMEvent } from '@next/third-parties/google'
import { useTranslations } from "next-intl";
import {Link} from '../../navigation';

export default function AppFooter({pages}){

       const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        height:80,
        color: theme.palette.text.primary,
        fontWeight:'bold'
      }));

      const t = useTranslations('appBar');  
      const t_footer = useTranslations('appFooter');  
    return(

           <Typography variant="body1" component="footer"  sx={{display:"flex"}} className="footer-color" >
           <Box>
                       
                <Box  sx={{flexGrow: 1}}   >
                  <Container>
                <Grid container spacing={1}   >
                <Grid container item spacing={1} sx={{mt:2,alignItems:'center'}} justifyContent="center" >
                   
                   <Grid item xs={6}>
                   <Item sx={{
                 height: 150}}  
                 >
                   CREAMOS HISTORIAS 
                 </Item>
                   </Grid>                   
               </Grid>
               </Grid>
               </Container>

               {/* ELEMENTO DIVISORIO*/}
            
               <Box sx={{width:'100%',height:'auto',flexGrow: 1,pb:1,pt:1}}  >
                   <DivisorFooterSVG  sx={{ display: { xs: 'none', md: 'flex',width:'inherit',height:'auto' } }}  />
               </Box>
               
               <Container sx={{p:1}}>
                <Grid container spacing={3} justifyContent="center" >
                    <Grid item xs={4} > {/*LOGO PC */}
                    
                    <StoryMakersLogoWhite sx={{display:{ width: '100%',height:'auto' }}}   />
                    <p style={{fontSize:'small',color:'white'}}>hola@storymakers.com</p>
                    </Grid>
                    
                    <Grid item container xs direction="column" alignItems="flex-end">
                    
                    { pages.map((page,i)=>(
                      <Grid item xs key={i}>
                       <Button
                       key={page.tab}
                       onClick={() => sendGTMEvent({event: 'gtm.linkClick'})}
                      
                       sx={{ textTransform: 'none', fontWeight:"bold" ,
                         color:"white", textAlign:"right"
                       }}
                       // ROUTING SECTIONS
                       
                     >
                   <Link  href={page.href}  >
                       {t(page.tab)}
                   </Link>
                     </Button >
                     </Grid>
                    ))

                    }                   
                    
                    </Grid>

                </Grid>
                
                </Container>

               
               
                <Grid container spacing={1}   >
                    <Grid container item spacing={2} columns={1} >
                    
                        <Grid item xs={2}  >
                       
                        <Divider color='white'/>
                        
                        </Grid>
                        <Grid item xs={4} sx={{alignItems:'center'}} >
                       
                        <Typography component='h6' variant="caption" sx={{ textAlign: 'center',color: "#C5C5C4"}}>
                            2024, Storymakers.{t_footer('derechos_reservados')}
                            </Typography>
                       
                       </Grid>
                        
                    </Grid>
                   
                    
                </Grid>
               
                </Box>

                </Box>
                </Typography>


               
       

    )

}