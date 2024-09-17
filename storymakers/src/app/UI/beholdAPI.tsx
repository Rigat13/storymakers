import type * as Behold from "@behold/types"
import { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

//En la web de behold no dejaba hacer la galeria de esta forma.
// Para customizar la UI dan este codigo que es una API. --> https://behold.so/docs/react/
//Con esta función se pueden obtener los videos.

// En el ultimo return esta el custom UI.

export default function InstaGallery({ feedId }: { feedId: string }) {
  const [posts, setPosts] = useState<Behold.Post[]>([])

  useEffect(() => {
    const controller = new AbortController()

    // Fetch feed, update state
    async function fetchFeed() {
      try {
        // Fetch and parse feed
        const rawFeed = await fetch(`https://feeds.behold.so/${feedId}`, {
          signal: controller.signal,
        })

        // Pass http errors to the catch block
        if (!rawFeed.ok) {
          const errorMessage = await rawFeed.text()
          throw new Error(errorMessage)
        }

        // Parse JSON
        const feedJSON: Behold.Feed = await rawFeed.json()

        // Update state with fetched posts
        setPosts(feedJSON.posts)
      } catch (err) {
        // Swallow AbortErrors, since they are intentional and expected
        if(err instanceof Error){
          if (err.name !== "AbortError") {
            console.error("Error:", err)
          }
      }
      }
    }

    // Run
    fetchFeed()

    // Abort fetch if feedId changes or component is unmounted
    return () => {
      controller.abort()
    }
  }, [feedId])

  // Build post Els
  const postEls = posts.map((post) => {
    // IMAGE or CAROUSEL_ALBUM
    let mediaEl = <img src={post.sizes.medium.mediaUrl} alt="" />

    // VIDEO
    if (post.mediaType === "VIDEO") {
      mediaEl = (
        <a href={post.permalink} target="_blank" rel="noopener noreferrer">
        <video
          poster={post.sizes.medium.mediaUrl}
          src={`${post.mediaUrl}?w=161&fit=crop&auto=format&dpr=2 2x`}
          muted={true}
          autoPlay={true}
          loop={true}
          style={{borderRadius:10}}
          
        ></video>
        </a>
      )
    }

    return ( mediaEl )
  })

  
  return( 
  
  
    <ImageList variant="woven" cols={4} gap={10}  sx={{ width: '100%', height: 450,overflowY:'hidden' }}>

      {/* QUITAR LAS OTRAS LISTAS DE ABAJO CUANDO HAYA MAS CONTENIDO */}
  
                { postEls.map((item,i) => (
                       
                        <ImageListItem key={i}>
                        {item}
                        </ImageListItem>
                        
                        
                        )

                )

                }

      {/*  LISTAS DE EJEMPLO */}

                { postEls.map((item,i) => (
                       
                        <ImageListItem key={i}>
                        {item}
                        </ImageListItem>
                        
                      
                        )

                ) }

                        <ImageListItem >
                        {postEls[1]}
                        </ImageListItem>
                        <ImageListItem >
                        {postEls[0]}
                        </ImageListItem>


                    </ImageList>  
                 

                
    )

}
