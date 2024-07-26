import Layout from "../layout"
import { Suspense } from 'react';
export default function About() {
    return(
    <Suspense fallback={<div>Loading...</div>}>
       
        <main>
        <div>About</div>
        </main>
      
    </Suspense>
    
    
   ) 
  }