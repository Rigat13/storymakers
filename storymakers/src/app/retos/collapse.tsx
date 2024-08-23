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


const data = [
  {"id":0,
"reto":{
"marca":"Marca 1",
"info_marca":"Promueve un estilo de vida sostenible y consciente con la personalización de tu envase ecológico para tus compras a granel.",
"requisitos":["Promueve un estilo de vida sostenible ", "Promueve un estilo de vida sostenible"],
"dificultad":3,
"recompensa":"19,80€",
"img":"tedx/nosense-business.png"
}
}, 

{"id":1,
"reto":{
"marca":"Marca 2",
"info_marca":"Promueve un estilo de vida sostenible y consciente con la personalización de tu envase ecológico para tus compras a granel.",
"requisitos":["Promueve un estilo de vida sostenible ", "Promueve un estilo de vida sostenible"],
"dificultad":3,
"recompensa":"19,80€",
"img":"tedx/tedx-business.png"
}
}]

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

  const handleOpen = (id:number) => {
    setChecked(true);
    setId(id);
  }

  if(dataRetos){
      if(dataRetos.length>0){
  

  return (
    <Box sx={{ height: 600 }}>
     {/* <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />* */}
      <Box
        sx={{
          '& > :not(style)': {
            display: 'flex',
            //justifyContent:'space-around',
            height: 600,
            maxWidth:'100%'
          },
        }}
      >
           
        <div>
          <Box sx={{ maxWidth: '50%' }}  >
            <Collapse orientation="horizontal" in={checked}  >
                    {<RetoComponent data={dataRetos[id]}/>}
            </Collapse>
            </Box>

            <Box  sx={{ maxWidth: '100%' }}>
            <RetosGaleria data={dataRetos} onChange={(id:number)=> handleChange(id)} checked={checked}/>    
            </Box>
            </div>
          
      </Box>
    </Box>
  );

    }
  
  }


  }
