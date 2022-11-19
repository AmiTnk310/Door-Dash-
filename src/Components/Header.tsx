import React from "react";
import styled from "styled-components";
// import '../path_to/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import img from "../images/homepage.avif";
import logo from "../images/logo.png"
import { faLocation, faLocationCrosshairs, faLocationDot, faRightLong } from "@fortawesome/free-solid-svg-icons";


export default function Header() {

  
  const Container = styled.div`
    font-size: 1.3em;
    color: white;
    // background-color: rgb(178, 44, 49);
    height: 65vh;
    width: 100%;
    padding-top: 15px;
    background-image:url(${img});
  
    object-fit:cover;
    background-repeat: no-repeat;
    background-size: cover; 
    @media (max-width: 988px) {
      // padding-top:0px;/
      
    }
  `;


  const LogoImg = styled.span`
      position:absolute;
      left:50%;
      transform:translateX(-50%);
      @media(max-width:769px){
        display:none;
      }
  `
  const Buttons = styled.div`
     {
      display: flex;
      font-size: 1em;
      justify-content: space-betweeen;
      // background-color:yellow;
      
      
    }
  `;

  const Login_btn = styled.button`
    color: white;
    background: none;
    border: none;
    // position:relative;
    font-weight:bold;
    font-size:0.9rem;
    width: 90px;
    height:40px;
    // margin-top:100px;
    // margin-right:-40px;
    // position:absolute;
   

  `;
  const Signup_btn = styled.button`
    color: black;
    background: white;
    border: none;
    border-radius: 50px;
    // padding:5px 5px 5px 5px;
    // position:relative;
    font-weight:bold;
    font-size:0.9rem;
    width: 90px;
    height:40px;
    // position:absolute;
   
  `;

  

  const HomeScreen = styled.div`
    text-align: center;
    font-weight: bold;
    margin-bottom:10px;
    font-size: 55px;
    // background-color:green;
    width:85vh;
    @media (max-width: 768px) {
      font-size:35px;
      width:55vh;
      
     }
  `;
  const SearchBox = styled.div`
  
   
    width:50vh;
    // height:20px;
    height:5.5vh;
    background-color:white;
    display:flex;
    border-radius:40px;
  
    
    
    @media (max-width: 680px) {
      width:45vh;
      
    }
    
    align-items:center;
    justify-content:center;
    justify-content:space-evenly;
    
  `
  const LocationIcon = styled.div`
  width:10%;
  height:90%;
  // background-color:green;
  color:grey;
  border-radius:50%;
  display:flex;
  justify-content:center;
  align-items:center;

  `
  

  const InputBox = styled.input`
  width:77%;
  height:100%;
  background-color:white;
  border-radius:50px;
  display:flex;
  justify-content:center;
  align-items:center;
  border:none;
  outline:none;

  `
  const RightArrow = styled.button`
  background-color:rgb(235,23,0);
  width:9%;
  padding:0px;
  height:80%;
  border:none;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  border-radius:50px;
  color:white;
  &:hover{
    background-color:rgb(210,23,0);

  }
  @media(max-width:998px){
    background-color:white;
    color:grey;
  }

  `
  const Link = styled.a`
//   text-decoration:none;
  color:white;
  font-size:1rem;
  margin-top:5px;
  cursor:pointer;
  font-weight:500;
  &:hover {
    color: white;
  }
  @media (max-width: 988px) {
    padding-top:0px;
    padding-bottom:0px;
    
  }
  `


  return (
    <Container>
      <LogoImg className="mt-2 "><img  src={logo} alt="" style={{ width:"200px"}} /></LogoImg>
      
        <div className="btns d-flex justify-content-end" style={{width:"95%"}}>
            {/* <Buttons className="row d-flex align-items-start justify-content-start " >
           
            <div className="col-10 d-flex align-items-end justify-content-end" style={{paddingLeft:"-50px"}}><Login_btn>Login</Login_btn></div>
            
            <div className="col-1" style={{paddingLeft:"-50px"}}><Signup_btn>Signup</Signup_btn></div>
            
            </Buttons> */}
            <div className="login">
            <Login_btn>Login</Login_btn>
            </div>
            <div className="signup">  
            <Signup_btn>Signup</Signup_btn>
            </div>

         
        </div>
      
      <div className="h-100 d-flex align-items-center justify-content-start flex-column mt-5" style={{position:"absolute", left:"50%",transform:"translateX(-50%)"}}>
        <HomeScreen className="mt-4">Restaurants and more, delivered to your door</HomeScreen>
        

          <SearchBox className="mt-3">
            <LocationIcon><FontAwesomeIcon icon={faLocationDot} /></LocationIcon>
            <InputBox placeholder="Select your address"></InputBox>
            <RightArrow><FontAwesomeIcon icon={faRightLong} /></RightArrow>
          </SearchBox>


        <Link className="mt-3">Sign in for saved address</Link>
        
      </div>
    </Container>
  );
}
