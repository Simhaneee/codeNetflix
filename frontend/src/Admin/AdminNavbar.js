import React from "react";
import logo from "../Utils/netflixLogo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import './admin.css'
const AdminNavbar = () => {
  const navigate = useNavigate();
  const signout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div>
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
            <Button onClick={() => signout()} variant="danger">
              Sign Out
            </Button>{" "}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default AdminNavbar;
