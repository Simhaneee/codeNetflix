import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import { Formik, Field } from "formik";
import { Link } from "react-router-dom";
import { addMovie } from "../Services/movieService";
import { useNavigate } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const AddMovie = () => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      // const response = await axios.post("/api/upload", formData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      // setImageUrl(response.data.imageUrl);
      console.log("formData",formData)
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div>
      <div className="homepage">
        <div className="background-image-admin"></div>
        {/* <div className="background-overlay"></div> */}
        <div className="content">
          <div>
            <AdminNavbar />
          </div>
          <div className="body-content  d-flex justify-content-center align-items-center">
            <div className="signIn_container ">
              <div className="p-5">
                <h1 style={{ color: "white" }}>Admin Panel</h1>
                <div>
                  <Formik
                    initialValues={{
                      movie_name: "",
                      movie_category: "",
                      is_movie: true,
                      image_name: "",
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.movie_name) {
                        errors.movie_name = "Please mention the movie name";
                      }
                      if (!values.movie_category) {
                        errors.movie_category =
                          "Please mention the movie category";
                      }
                      if (!values.image_name) {
                        errors.image_name = "Please mention the image";
                      }
                      return errors;
                    }}
                    onSubmit={async (values) => {
                      console.log(values, "submitted values");
                      await addMovie(values)
                        .then((res) => {
                          console.log(res, "movie saved successfully");
                        })
                        .catch((err) => err);
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
                            type="text"
                            name="movie_name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.movie_name}
                            placeholder="Enter the movie name"
                            className="form_input rounded"
                          />
                          <div className="form_error_message py-1">
                            {errors.movie_name &&
                              touched.movie_name &&
                              errors.movie_name}
                          </div>
                        </div>
                        <div className="py-3">
                          <label
                            htmlFor="selectOption"
                            style={{ color: "white" }}
                          >
                            <div className="pt-2">Select movie category</div>
                          </label>
                          <Field
                            as="select"
                            name="movie_category"
                            className="form_input rounded"
                          >
                            <option value="">Select movie Category</option>
                            <option value="Action Thriller">
                              Action Thriller
                            </option>
                            <option value="comedy movies">comedy movies</option>
                            <option value="horror movies">horror movies</option>
                          </Field>
                          <div className="form_error_message py-1">
                            {errors.movie_category &&
                              touched.movie_category &&
                              errors.movie_category}
                          </div>
                        </div>
                        <div className="py-3">
                          <input
                            type="text"
                            name="image_name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.image_name}
                            placeholder="Enter the movie name"
                            className="form_input rounded"
                          />
                          <div className="form_error_message py-1">
                            {errors.image_name &&
                              touched.image_name &&
                              errors.movie_name}
                          </div>
                        </div>
                        <div className="py-3">
                          <label>
                            <Field
                              type="checkbox"
                              name="is_movie"
                              className="form_input rounded"
                            />{" "}
                            <span style={{ color: "white" }}>Its a movie</span>
                          </label>
                        </div>

                        <div className="py-3">
                         
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
    </div>
  );
};

export default AddMovie;
