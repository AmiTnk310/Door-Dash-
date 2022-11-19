import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import all2 from "../images/all2.avif";

export default function Every() {
  const ContainerMain = styled.div`
    background-color: rgb(255, 240, 237);
    padding-top: 12vh;
    padding-bottom: 10vh;
    margin-top:-40px;
    
  `;
  const Container = styled.div`
    // background-color: white;
    // justify-content:space-between;
  `;
  const Option = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding-top: 10px;
    padding-bottom: 20px;
    // background-color:red;
    margin-left:80px;
  `;

  const H1 = styled.h1`
    font-weight: bold;
    text-align: start;
    width: 70%;
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

  return (
    <ContainerMain>
      <Container className="container ">
        <div className="row d-flex justify-content-space-between">
          <div className="col-7">
            <img src={all2} alt="" style={{ width: "100%" }} />
          </div>
          <Option className="col-md d-flex-coloumn align-items-start justify-content-center">
            <H1>Every Flavor Welcome</H1>
            <H6 className="text" style={{ width: "70%" }}>
              From your neighborhood sushi spot to the burger and fries you
              crave, choose from over 300,000 local and national favorites
              across the U.S., Canada and Australia.
            </H6>
            <Button>Find restaurants</Button>
          </Option>
        </div>
      </Container>
    </ContainerMain>
  );
}
