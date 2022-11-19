import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { list, knowUs, Help, Buisness } from "../list";
import { faMobilePhone } from "@fortawesome/free-solid-svg-icons";
import fLogo from "../images/ftrLogo.png";
// import { faB, faCheckSquare, faCoffee, faDatabase, faHouseLaptop, faS, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faGooglePlay,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const ContainerMain = styled.div`
    background-color: black;
    padding-top: 8vh;
    padding-bottom:vh ;
  `;
  const Container = styled.div`
    // background-color: red;
    color: white;
  `;

  const H5 = styled.h5`
    color: white;
    font-weight: 500;
  `;
  const UL = styled.ul`
    padding: 0px 0px 0px 0px;
  `;
  const LI = styled.li`
    list-style: none;
    color: white;
    margin: 3px 3px 3px 10px;
  `;
  const Link = styled.a`
    color: rgb(178, 187, 170);
    cursor: pointer;
    text-decoration: none;
    &:hover {
      color: white;
      text-decoration: underline;
    }
  `;
  const Button = styled.button`
    padding: 8px 8px 8px 8px;
    border: none;
    border-radius: 8px;
    margin: 5px 5px 5px 5px;
    width: 180px;
    height: 60px;
    font-weight: bold;
    background-color: rgb(59, 59, 59);
    color: rgb(178, 187, 170);
    &:hover {
      color: white;
      background-color: rgb(80, 80, 80);
    }
  `;
  return (
    <ContainerMain>
      <Container className="container ">
        <div className="row display-flex flex-wrap">
          <div
            className=" col-6 "
            style={{
              textAlign: "start",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              justifyContent: "start",
            }}
          >
            <H5>Top Cities</H5>
            <div className="row">
              <div className="col-sm">
                <UL>
                  {list.map((item, pos) => {
                    return (
                      <LI>
                        <Link href="#">{item.liName}</Link>
                      </LI>
                    );
                  })}
                </UL>
              </div>
              <div className="col-sm">
                <UL>
                  {list.map((item, pos) => {
                    return (
                      <LI>
                        <Link href="#">{item.liName}</Link>
                      </LI>
                    );
                  })}
                </UL>
              </div>
              <div className="col-sm">
                <UL>
                  {list.map((item, pos) => {
                    return (
                      <LI>
                        <Link href="#">{item.liName}</Link>
                      </LI>
                    );
                  })}
                </UL>
              </div>
            </div>
          </div>
          <div className=" col-6" style={{ textAlign: "start" }}>
            <H5>Top Cusinies near you</H5>
            <div className="row">
              <div className="col-sm">
                <UL>
                  {list.map((item, pos) => {
                    return (
                      <LI>
                        <Link href="#">{item.liName}</Link>
                      </LI>
                    );
                  })}
                </UL>
              </div>
              <div className="col-sm">
                <UL>
                  {list.map((item, pos) => {
                    return (
                      <LI>
                        <Link href="#">{item.liName}</Link>
                      </LI>
                    );
                  })}
                </UL>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row display-flex flex-wrap align-items-center justify-content-center" style={ }}> */}
        <div className=" row d-flex flex-wrap mt-5">
          <div className="col-md " style={{ textAlign: "center" }}>
            <H5>Heading</H5>

            <UL>
              {knowUs.map((item, pos) => {
                return (
                  <LI>
                    <Link href="#">{item.liName}</Link>
                  </LI>
                );
              })}
            </UL>
          </div>
          <div className="col-md " style={{ textAlign: "center" }}>
            <H5>Heading</H5>

            <UL>
              {Help.map((item, pos) => {
                return (
                  <LI>
                    <Link href="#">{item.liName}</Link>
                  </LI>
                );
              })}
            </UL>
          </div>
          <div className="col-md " style={{ textAlign: "center" }}>
            <H5>Heading</H5>

            <UL>
              {Buisness.map((item, pos) => {
                return (
                  <LI>
                    <Link href="#">{item.liName}</Link>
                  </LI>
                );
              })}
            </UL>
          </div>
          <div
            className="col-md order-2 d-flex flex-column align-items-center justify-content-start "
            style={{ textAlign: "center", display: "flex" }}
          >
            <div className=" m2">
              <Button>
                {" "}
                <FontAwesomeIcon icon={faMobilePhone} /> &nbsp;App Store
              </Button>
            </div>

            <div className=" m2">
              <Button>
                <FontAwesomeIcon icon={faGooglePlay} /> &nbsp; Google Play
              </Button>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="row d-flex flex-row mt-5">
          <div className="col-md-9 d-flex justify-content-center">
            <UL
              className="d-flex align-items-center jusify-content-center flex-wrap "
              style={{
                fontSize: "0.8rem",
                width: "80%",
                justifyContent: "space-evenly",
              }}
            >
              <LI>
                <Link href="#">
                  <img src={fLogo} alt="" style={{ width: "30px" }} />
                </Link>
              </LI>
              <LI>
                <Link href="#">Terms of Service</Link>
              </LI>
              <LI>
                <Link href="#">Privacy</Link>
              </LI>
              <LI>
                <Link href="#">Notice at Collection</Link>
              </LI>
              <LI>
                <Link href="#">Delivery Locations</Link>
              </LI>
              <LI>
                <Link href="#">@2022 DoorDash</Link>
              </LI>
            </UL>
          </div>
          <div className="col-md-3 d-flex justify-content-space-between align-item-center justify-content-center">
            <UL
              className="d-flex justify-content-center "
              style={{ fontSize: "1.2rem" }}
            >
              <LI>
                {" "}
                <Link
                  href="#"
                  className="d-flex align-items-start justify-content-start"
                >
                  <FontAwesomeIcon icon={faFacebook} />{" "}
                </Link>
              </LI>
              <LI>
                <Link
                  href="#"
                  className="d-flex align-items-start justify-content-start"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </LI>
              <LI>
                <Link
                  href="#"
                  className="d-flex align-items-start justify-content-start"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </LI>
            </UL>
          </div>
        </div>
      </Container>
    </ContainerMain>
  );
}
