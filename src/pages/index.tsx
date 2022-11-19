
import * as React from "react";
import Header from "../Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import styled from "styled-components";
import Dasher from "../Components/becomeDasher";
import AllInOne from "../Components/AllinOne";
import Every from "../Components/EveryFlavor"
import Footer from "../Components/Footer";



const Home=()=>{
  
  return(
    <div>
    <Header/>
    <Dasher/>
    <AllInOne/>
    <Every/>
    <Footer/>

    </div>
  )
}

export default Home;