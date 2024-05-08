import React from "react";
import logo from "../../Utils/netflixLogo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const NavbarDesign = () => {
  return (
    <Navbar className="background-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <Link to={"/"}>
            <img
              alt=""
              src={logo}
              width="200"
              height="75"
              className="d-inline-block align-top"
            />
          </Link>
        </Navbar.Brand>
        <div className="ms-auto">
          <Link to={"/signin"}>
            <Button style={{}} variant="danger">Signin</Button>{" "}
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarDesign;
