import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import RetosGaleria from './retosGaleria';
import { RetoComponent } from './retosGaleria';
import { DataLoader } from '../dataLoaders/dataLoader';
import { Grid } from '@mui/material';

export default function RetosCollapse() {
  type retos = {id:number,reto:{} }
 
  let dataRetos:retos[] = DataLoader("retos");
  //console.log(dataRetos)

  const [checked, setChecked] = React.useState(false);
  const [id,setId] = React.useState(0);

  const handleChange = (id:number) => {
    setChecked((prev) => !prev);
    setId(id);
   
  };


  if(dataRetos){
      if(dataRetos.length>0){
  

  return (
    <>
    <Box sx={{ height: 600, display:{xs:'none', md:'flex'}  }}>
      <Box
        sx={{
          '& > :not(style)': {
            display: 'flex',
            height: 600,
            maxWidth:'100%'
          },
        }}
      >
           
        <div>
          <Box sx={{display:{xs:'none', md:'flex'} , width:{xs:'20%',md:'auto'}, maxWidth: '50%' }}  >
            <Collapse orientation="horizontal" in={checked}  >
                    {<RetoComponent data={dataRetos[id]}/>}
            </Collapse>
            </Box>

            <Box  sx={{display:{xs:'none', md:'flex'},maxWidth: '100%' }}>
            <RetosGaleria data={dataRetos} onChange={(id:number)=> handleChange(id)} checked={checked}/>    
            </Box>
            </div>

      
         
         
      </Box>
    </Box>
              {/* VERSION DE MÓVIL TEMPORAL*/}
    <Grid container direction='column' sx={{display:{xs:'flex', md:'none'}}} >
            
              <Grid item xs sx={{width:'100%' }}>
              <RetosGaleria data={dataRetos} onChange={(id:number)=> handleChange(id)} checked={checked}/>    
              </Grid>
              
              <Grid item sx={{ width:{xs:'20%',md:'auto'}, maxWidth: '50%' }}  >
              <Collapse orientation="horizontal" in={checked}  >
                      {<RetoComponent data={dataRetos[id]}/>}
              </Collapse>
              </Grid>

              </Grid>
    
    </>
  );

    }
  
  }


  }
