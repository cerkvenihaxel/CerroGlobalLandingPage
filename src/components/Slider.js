import React, {Component} from "react";
import Grid from '@mui/material/Grid';



const sectionStyle = {
    height: "100vh",
    backgroundImage:
      "url('https://thumbs.gfycat.com/BestImaginaryBeaver-size_restricted.gif') ",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  };

class BackgroundIMG extends Component{

render(){
    return(
        
        <Grid style={sectionStyle}
        container
        direction="column"
        justify="space-evenly"
        alignItems="center"
    >
      <Grid item>
      </Grid>
    </Grid>
   
     );
    }
}

export default BackgroundIMG;

