
import { Typography } from "@mui/material"


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
