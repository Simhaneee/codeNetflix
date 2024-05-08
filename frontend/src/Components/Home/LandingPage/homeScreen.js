import React, { useEffect } from "react";
import "./home.css";
import Button from "react-bootstrap/Button";
import NavbarDesign from "../../Navbar/navbarDesign";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const HomeScreen = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      navigate("/userDashboard");
    }
  }, []);

  return (
    <div className="homepage">
      <div className="background-image"></div>
      <div className="background-overlay"></div>
      <div className="content">
        <div>
          <NavbarDesign />
        </div>
        <div className="body-content  d-flex justify-content-center align-items-center">
          <div className="text-center">
            <div className="font_heading">
              Enjoy big movies, hit series and more from $10
            </div>
            <div className="font_casual">Join today. Cancel anytime.</div>
            <div className="font_casual">
              Ready to watch? Sign Up and start your membership today!!
            </div>
            <div className="pt-3">
              <Link to={"/signup"}>
                <Button variant="danger">SignUp</Button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
