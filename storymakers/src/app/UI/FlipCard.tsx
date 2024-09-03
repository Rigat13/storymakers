
import { Box } from '@mui/material';
import {DataLoader} from '../dataLoaders/dataLoader';

export default function FlipCard(props){
    type contentData = { url:string ,card_front:string, card_back:string}
    let contents = DataLoader(props.data)
   return(
   
    <Box sx={{display:'flex', width:['25%','90%']}}  >
          { 
         contents.map( (content:contentData, i) => (
          
            <a href={content.url} target="_blank" key={i} >
           
            <div className="flip-card">
                <div className="flip-card-inner">
               
                <div className='flip-card-front' style={{backgroundImage:`url('./${content['card_front']}')`}} ></div>
                <div className='flip-card-back'  style={{backgroundImage:`url('./${content['card_back']}')`}}  ></div>
                   
                </div>
            </div>
            </a> 

          ))
         
          }      

       
    </Box>
   
   
   
   
   )
}

