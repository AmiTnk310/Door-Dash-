import React from "react";
import styled from "styled-components";
// import '../path_to/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import scooter from "../images/Scooter.svg";
import store from "../images/Store.svg";
import iphone from "../images/iphone.svg";
// import all from "../images/all.avif";


export default function Dasher() {
  const Container = styled.div`
    // background-color:red;
    padding-top: 20vh;
    padding-bottom: 20vh;
    @media (max-width: 988px) {
      padding-top:0;
      
      
    }
    
  `;
  const Option = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top:10px;
    padding-bottom:20px;

  `;
  const Icon = styled.image`
//  background-color:yellow;
 width:80%
 height:10px;
 display:flex;
 align-item:center;
 justify-content:center;
`;
  const H1 = styled.h1`
    font-weight: bold;
    text-align: center;
    font-size:30px;
    
  `;
  const H6 = styled.h6`
display:flex;
align-items:center;
justify-content:center
width:70%;
height:auto;
text-align:center;
// background-color:red;
`;
  const Link = styled.a`
    color: rgb(235, 42, 38);
    font-size: 1rem;
    text-decoration: none;
    font-weight: bold;
    margin-top: 5px;
    cursor: pointer;
    text-align:center;
     &:hover {
      color: rgb(235, 42, 38);
      
    }
  `;

  return (
    <Container className="container ">
      <div className="row" >
        <Option className="col-md d-flex-coloumn align-items-center justify-content-center">
          <Icon>
            <img src={scooter}></img>
          </Icon>
          <H1>Become a dasher</H1>
          <H6 className="text" style={{ width: "60%" }}>
            As a delivery driver, you'll make reliable money—working anytime,
            anywhere.
          </H6>
          <Link>
            Start earning <i className="bi bi-arrow-right-short"></i>
          </Link>
        </Option>
        <Option className="col-md d-flex-coloumn align-items-center justify-content-center">
          <Icon>
            <img src={store}></img>
          </Icon>
          <H1>Become a partner</H1>
          <H6 className="text"  style={{ width: "60%" }}>
            Grow your business and reach new customers by partnering with us.
          </H6>
          <Link>
            Sign Up your store<i className="bi bi-arrow-right-short"></i>
          </Link>
        </Option>
        <Option className="col-md d-flex-coloumn align-items-center justify-content-center">
          <Icon>
            <img src={iphone} style={{width:"158px"}}></img>
          </Icon>
          <H1>Try the App</H1>
          <H6 className="text"  style={{ width: "60%" }}>
            Experience the best your neighborhood has to offer, all in one app.{" "}
          </H6>
          <Link>
            Get the app <i className="bi bi-arrow-right-short"></i>
          </Link>
        </Option>
      </div>

    </Container>
  );
}
