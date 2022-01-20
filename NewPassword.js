import { Button, TextField } from "@material-ui/core";
import './NewPasswrord.css'
import Image from "./logo.png";
import Progress from "./Progress";
import { SecuritySharp } from "@material-ui/icons";
const NewPassword = () => {
    return(
        <>
        <div className="NewPassword_container">
        <img src = {Image} alt = "" />
            <div className="NewPassword_content">
                <div className="main-content">
                <h1>Enter your new Password</h1>
              <TextField
                           id="outlined-basic"
                           className = "standard_input"
                           label="Password"
                           type="password" 
                           variant="outlined"
                           InputLabelProps={{
        style: {
          fontSize: 14,
          backgroundColor: '#FFF',
          paddingLeft: 4,
          paddingRight: 4,
          color: '#383838',
        },
      }}
      inputProps={{
        style: {
          fontSize: 14,
          height:45,
          padding: '0 14px',
          fontWeight: 'bold'
        },
    }}



                 />  
                <TextField
                
                id="outlined-basic"
                className = "standard_input"
                label=" Reset Password"
                type="password" 
                variant="outlined"
                InputLabelProps={{
        style: {
          fontSize: 14,
          backgroundColor: '#FFF',
          paddingLeft: 4,
          paddingRight: 4,
          color: '#383838',
        },
      }}
      inputProps={{
        style: {
          fontSize: 14,
          height:45,
            padding: '0 14px',
          fontWeight: 'bold'
        },
    }}
    /> 
               <div className="password_track">
                   
         <Progress done={"90"} />
                <h3>LOW</h3>
               </div>
            

               <span className="security_messg"><SecuritySharp style={{fontSize:"0.8rem",color:"grey",margin:"3px 3px"}} /> <p>  A strong password is 8 characters long, between lowercase, uppercase, and numbers.</p>
               </span>
                
                <Button className="button">Update Password</
                Button>
                
                </div>
            </div>
        </div>

        </>
    )
}

export default NewPassword;