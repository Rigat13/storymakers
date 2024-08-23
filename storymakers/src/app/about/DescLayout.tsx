
import { Typography } from "@mui/material"
//import { Ellipse,EllipseOrange } from "../UI/svgComponent"
//import zIndex from "@mui/material/styles/zIndex"

//<Ellipse sx={{display:{ width:'100%',height:'100%',left:"100px",right:"100px"},position:"absolute" }}/>
        

/*
 sx={{
      position: "absolute",
width: "1177.54px",
height: "1611.56px",
left: "-261.99px",
top: "2251.24px",

background: "linear-gradient(219.66deg, rgba(57, 135, 255, 0.5) 77.33%, rgba(0, 0, 0, 0) 77.34%)",
filter: "blur(300px)",
transform: "rotate(-113.26deg)",
    }}

*/

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return( 
 
      <Typography variant="body1" component={"div"} maxHeight={"xl"} width={"100%"}>

  
        <div className="desc-layout"></div>

      
      {children}

      </Typography>

    )
        
       
  }

  /*
  
    <div  className="desc-layout-blue">

      </div>

      <div  className="desc-layout-orange">

    </div>

  
  */