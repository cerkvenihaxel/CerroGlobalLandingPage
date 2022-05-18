import React, {Component} from "react";
import ResponsiveAppBar from "./Navbar";
import BackgroundIMG from "./Slider";

export default class Home extends Component{

render(){
    return(
    <>
    <ResponsiveAppBar/>,
    <BackgroundIMG />
    </>
     );
    }
}