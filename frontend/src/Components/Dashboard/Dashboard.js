import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../../Utils/netflixLogo.png";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import { listMovies } from "../../Services/movieService";
const Dashboard = () => {
  const userDetails = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    listMovies()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar className="bg-dark">
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
          <div className="ms-auto d-flex align-items-center justify-content-between">
            <div className="px-3" style={{ color: "white" }}>
              {userDetails.email}
            </div>
            <div className="text-center  px-3">
              <Button
                onClick={() => {
                  navigate("/userProfile");
                }}
              >
                Profile Update
              </Button>
            </div>
            <div className="px-3">
              <Button
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
                variant="danger"
              >
                Signout
              </Button>{" "}
            </div>
          </div>{" "}
          *
        </Container>
      </Navbar>
      {data.length != 0 ? (
        <div className="p-5">
          <Row>
            {data.map((item) => {
              return (
                <Col sm={12} md={3} className="p-5">
                  <Card   style={{
                        width: "18rem",
                        maxHeight: "500px",
                        overflowY: "scroll",
                      }}>
                    <Card.Img variant="top" src={item.image_name} />
                    <Card.Body>
                      <Card.Title>{item.movie_name}</Card.Title>
                      <Card.Text>
                        {item.movie_category}
                      </Card.Text>
                      <Button variant="danger">Play Now▶</Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Dashboard;
