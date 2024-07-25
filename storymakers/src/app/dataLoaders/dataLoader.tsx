import React, {useEffect, useState} from 'react';


export function DataLoader(data){

    var data = data
    var [newData,setData] = useState([]);
    useEffect(() => {
       
       fetch(`./data/${data}.json`
        ,{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          }

       ).then((res) => res.json())
       .then((json) => {
       setData(json.data);
      })
    
    })

    return newData;

}