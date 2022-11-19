import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import all from "../images/all.avif";

export default function AllInOne() {
  const Container = styled.div`
    // background-color:red;
  `;
  const Option = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 20px;
  `;

  const H1 = styled.h1`
    font-weight: bold;
    text-align: start;
    width: 50%;
  `;
  const H6 = styled.h6`
    display: flex;
    text-align: start;
    width: 70%;
    height: auto;
    // background-color:red;
  `;
  const Button = styled.button`
    background-color: rgb(235, 23, 0);
    border: none;
    color: white;
    font-weight: 500;
    border-radius: 50px;
    padding:5px 5px 5px 5px;
  `;
  const IMG = styled.div`
  display:flex;
  align-items:end;
  justify-content:end;
  // background-color:red
  `
 

  return (
    <Container className="container ">
      <div className="row d-flex justify-content-end">
        <Option className="col-md d-flex-coloumn align-items-start justify-content-center">
          <H1>It’s all here. All in one app</H1>
          <H6 className="text" style={{ width: "70%" }}>
            Discover local, on-demand delivery or Pickup from restaurants,
            nearby grocery and convenience stores, and more.
          </H6>
          <Button>Get the App</Button>
        </Option>
       
        <div className="col-7 d-flex flex-row-reverse align-items-end justify-content-end">
          <img src={all} alt="" style={{width:"100%"}} />
        </div>
       
      </div>
    </Container>
  );
}
