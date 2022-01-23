import {
  CardContent,
  Card,
  Grid,
  Typography,
  TextField,
  Button,
  withStyles
} from "@material-ui/core";
import { SecuritySharp } from "@material-ui/icons";
import PasswordStrengthBar from "react-password-strength-bar";
import "./Progress.css"

import React, { useState } from "react";
import Image from "./logo.png";





function Demo1() {

    

    const [password, setPassword] = useState("7hhFF62");
 
    
    const handleChange = (event) => {
         setPassword(event.target.value);
    }

 
 




  return (
    <>
      <Grid container xs={12} md={12} lg={12} justify="center">
        <Grid
         item
          xs={10}
          sm={6}
          md={6}
          lg={4}
          justify="center"
          direction="column"
        >
          <img
            src={Image}
            alt=""
            style={{
              width: "20%",
              height: "4.5%",
              marginTop: "7%",
            }}
          />

          <Card
            style={{
              width: "100%",
              height: "70vh",
              marginTop: "10%",
              borderRadius: "3%",
            }}
          >
            <CardContent>
              <Typography
                style={{
                  fontWeight: "450",
                  marginTop: "10%",
                  fontSize: "200%",
                  // fontSize:"3rem",
                  fontFamily: "CircularStd",
                }}
              >
                Enter your new
              </Typography>

              <Typography
                style={{
                  fontWeight: "450",
                  fontSize: "200%",
                  marginTop: "-2%",
                  // fontSize:"3rem",
                  fontFamily: "CircularStd",
                }}
              >
                password
              </Typography>

              <TextField
                id="outlined-basic"
                className="inputRounded"
                label="Password"
                type="password"
                variant="outlined"
                style = {{
                    width:"70%",
                    marginTop:"5%",
                    
                }}
                InputLabelProps={{
                  style: {
                    fontSize: 14,
                    backgroundColor: "#FFF",
                    paddingLeft: 4,
                    paddingRight: 4,
                    color: "#383838",
                  },
                }}
                inputProps={{
                  style: {
                    width:"100%",
                    fontSize: 14,
                    height: 45,
                    padding: "0 14px",
                    fontWeight: "bold",
                  },
                }}
              ></TextField>

              <TextField
                id="outlined-basic"
                className="inputRounded"
                
                label="Password"
                type="password"
                variant="outlined"
                style = {{
                    width:"70%",
                    marginTop:"5%",
                    marginBottom:"5%"
                }}
                InputLabelProps={{
                  style: {
                    fontSize: 14,
                    backgroundColor: "#FFF",
                    paddingLeft: 4,
                    paddingRight: 4,
                    color: "#383838",
                  },
                }}
                inputProps={{
                  style: {
                    width:"100%",
                    fontSize: 14,
                    height: 45,
                    padding: "0 14px",
                    fontWeight: "bold",
                  },
                }}

                onChange={handleChange}
              ></TextField>
              
               
              

              <Typography
               variant="subtitle1"
                  style={{
                    fontWeight: "300",
                    width:"100%",    
                    fontFamily: "CircularStd",
                    fontSize:"82%", 

                  }}

              >


              <SecuritySharp style={{fontSize:"0.8rem",color:"grey",margin:"0% 1.5% 0% 1.5%" }} />
              A strong password is 8 characters long, 

              </Typography>
               
              <Typography
               variant="subtitle1"
                  style={{
                    marginTop: "-1%",
                    fontWeight: "300",
                    width:"100%",   
                    fontSize:"82%", 
                    fontFamily: "CircularStd",
                  }}

              >
              between lowercase, uppercase, and numbers.


              </Typography>
                 
                 <Button
                  style = {{
                      width:"70%",
                      background:"black",
                      height:"70%",
                      color:"white",
                      fontWeight:"bold",
                      marginTop:"5%",
                      marginBottom:"40%",
                      borderRadius:"1.5rem",
                      backgroundColor:"#D9E7EB",
                      color:"#7C8E93",
                      fontFamily:"CircularStd",
                      padding:"3% 3% 3% 3%"

                  }}
                 >
                     Update password
                 </Button>



            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Demo1;
