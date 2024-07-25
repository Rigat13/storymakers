import Layout from "../layout"
import { Suspense } from 'react';
export default function About() {
    return(
    <Suspense fallback={<div>Loading...</div>}>
        <Layout>
        <main>
        <div>About</div>
        </main>
        </Layout>
    </Suspense>
    
    
   ) 
  }