import React from "react";
import NavbarDesign from "../Components/Navbar/navbarDesign";
import { Button } from "react-bootstrap";
import "./pnf.css";
import { Link } from "react-router-dom";
const PathNotFound = () => {
  return (
    <div className="homepage">
      <div className="background-image-pnf"></div>
      <div className="background-overlay"></div>
      <div className="content">
        <div>
          <NavbarDesign />
        </div>
        <div className="body-content  d-flex justify-content-center align-items-center">
          <div className="text-center">
            <div className="font_heading">Lost Your way!!😒</div>
            <div className="font_casual">Sorry! We can't find that path.</div>
            <div className="pt-3">
            <Link to={'/'}>
            <Button variant="danger">Netflix Home</Button>
            </Link>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathNotFound;
