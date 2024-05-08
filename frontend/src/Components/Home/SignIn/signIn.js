import React from "react";
import "../LandingPage/home.css";
import Button from "react-bootstrap/Button";
import "./signIn.css";
import NavbarDesign from "../../Navbar/navbarDesign";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import {signInUser} from "../../../Services/authService";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const navigate=useNavigate()
  return (
    <div className="homepage">
      <div className="background-image"></div>
      <div className="background-overlay"></div>
      <div className="content">
        <div>
          <NavbarDesign />
        </div>
        <div className="body-content  d-flex justify-content-center align-items-center">
          <div className="signIn_container ">
            <div className="p-5">
              <h1 style={{ color: "white" }}>Sign In</h1>
              <div>
                <Formik
                  initialValues={{
                    email: "",
                    mobileNo: 9999999999,
                    password: "",
                  }}
                  validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                      errors.email = "Please mention your Mail Id";
                    } else if (
                      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                        values.email
                      )
                    ) {
                      errors.email = "Invalid email address";
                    }
                    if (!values.password) {
                      errors.password = "Please mention your password";
                    }
                    if (!values.mobileNo) {
                      errors.mobileNo = "Please mention your Mobile Number";
                    }
                    return errors;
                  }}
                  onSubmit={async(values) => {
                    console.log(values, "submitted values");

                   await signInUser(values).then((res)=>{
                    console.log(res)
                    localStorage.setItem('userInfo',JSON.stringify(res))
                    res.is_admin?navigate('/addMovie'):navigate('/userDashboard')
                   }).catch(err=>console.log(err))
                  }}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                  }) => (
                    <form onSubmit={handleSubmit}>
                      <div className="py-3">
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          placeholder="Enter your email"
                          className="form_input rounded"
                        />
                        <div className="form_error_message py-1">
                          {errors.email && touched.email && errors.email}
                        </div>
                      </div>
                      <div className="py-3">
                        <input
                          type="password"
                          name="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          className="form_input rounded"
                          placeholder="Enter your password"
                        />
                        <div className="form_error_message py-1">
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </div>
                      </div>
                      <div className="py-3">
                        <input
                          type="number"
                          name="mobileNo"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.mobileNo}
                          className="form_input rounded"
                          placeholder="Enter your Mobile Number"
                        />
                        <div className="form_error_message py-1">
                          {errors.mobileNo &&
                            touched.mobileNo &&
                            errors.mobileNo}
                        </div>
                      </div>

                      <div className="py-3 text-center">
                        <Button
                          type="submit"
                          variant="danger"
                          className="form_button"
                        >
                          Submit
                        </Button>{" "}
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
