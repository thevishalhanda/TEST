import { Box, Card, CardContent, Grid } from '@material-ui/core';
import React from 'react';
import Image from "./logo.png"
import { Typography, Paper } from '@material-ui/core';
import frame from "./Frame.png";
import frame1 from "./Frame1.png";
import Iphone from "./iphone-white.png";

export default function Demo2copy() {
  return (
      <>

<Grid
        container
        spacing={24}
        justify="center"
        sm={12}
        //   style={{ minHeight: '100vh', maxWidth: '100%' }}
      >
        <Grid item xs={12} sm={10} md={12} lg={10} align="center"
         justifyContent='center'
        >
          <img
            src={Image}
            alt=""
            style={{
              width: "10%",
              height: "5%",
              marginTop: "2%",
            }}
          />

          <Card
            style={{
              width: "100%",
              marginTop: "1%",
              height:"100%"
            }}
            elevation={0}
          >
            <CardContent sx={1} md={10} lg={6}>
              
               <Typography
                style = {{
                    fontSize:"180%",
                    fontFamily:"CircularStd",
                    fontWeight:"550",
                    letterSpacing:"20%"
                }}
               >
                   Download Vizi to start working in
               </Typography>
               <Typography
               style = {{
                    fontSize:"180%",
                    fontFamily:"CircularStd",
                    fontWeight:"550",
                    letterSpacing:"20%"


                }}
               >
                       your establishment
                     </Typography>
                     <img src = {frame1} 
                  style = {{
                      width:"11%",
                      height:"10%",
                      margin:"3% 1% 0% 1%",


                  }}
                  alt = "" /> 
                  <img src = {frame} 
                  style = {{
                    width:"11%",
                      height:"10%",
                      margin:"3% 1% 0% 1%",
                                           

                  }}
                  alt = "" />
              
                  <br />
                <img src = {Iphone} alt = ""
                     style = {
                         {
                             width:"25%",
                             height:"-10%"
                         }
                     }

                />
                   
                </CardContent>




          </Card>
        </Grid>
      </Grid>
           
      </>
  )
}
