import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import { useForm } from "react-hook-form";
import axios from "axios";

function AddParent() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedClient, setSelectedClient] = useState("");

  function handleSelectChange(event) {
    setSelectedClient(event.target.value);
  }

  const generateError = (err) =>
    toast.error(err, {
      position: "top-center",
    });

  const onSubmit = async (values) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}register`,
        {
          ...values,
          graduation_year: selectedClient,
          role: "parent",
        },
        {
          withCredentials: true,
        }
      );

      console.log(data);

      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/parents");
          window.location.reload(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const options = [
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];

  return (
    <div class="content-body container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <h4 class="card-title">Add Parent</h4>
                  </div>
                  <div class="col-6 text-right">
                    <Link to={`/parents`} class="btn btn-outline-primary"><i className="fa fa-arrow-left"></i> Back to Parents</Link>
                  </div>
                </div><br/>
                <div> 
                    <form class="form-sample" onSubmit={handleSubmit(onSubmit)}>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-6 col-form-label">
                              First Name <span class="error">*</span>
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                name="first_name"
                                class="form-control"
                                {...register("first_name", {
                                  required: "First Name is required",
                                })}
                              />
                              {errors.first_name && (
                                <p style={{ color: "red" }}>{errors.first_name.message}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-6 col-form-label">Middle Name</label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                name="middle_name"
                                {...register("middle_name")}
                              />
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-6 col-form-label">
                              Last Name <span class="error">*</span>
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                name="last_name"
                                class="form-control"
                                {...register("last_name", {
                                  required: "Last Name is required",
                                })}
                              />
                              {errors.last_name && (
                                <p style={{ color: "red" }}>{errors.last_name.message}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-6 col-form-label">
                              Email Address <span class="error">*</span>
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="email"
                                name="email"
                                class="form-control"
                                {...register("email", {
                                  required: "Email is required",
                                  pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Enter valid email",
                                  },
                                })}
                              />
                              {errors.email && (
                                <p style={{ color: "red" }}>{errors.email.message}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-6 col-form-label">
                              No of Students <span class="error">*</span>
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="number"
                                class="form-control"
                                name="no_of_students"
                                {...register("no_of_students", {
                                  required: "Number of Students is required",
                                })}
                              />
                              {errors.no_of_students && (
                                <p style={{ color: "red" }}>{errors.no_of_students.message}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-6 col-form-label">
                              Unweighted GPA <span class="error">*</span>
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                name="gpa"
                                {...register("gpa", {
                                  required: "Unweighted GPA is required",
                                })}
                              />
                              {errors.gpa && (
                                <p style={{ color: "red" }}>{errors.gpa.message}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-6 col-form-label">
                              Phone <span class="error">*</span>
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="text"
                                class="form-control"
                                name="phone"
                                {...register("phone", {
                                  required: "Phone is required",
                                })}
                              />
                              {errors.phone && (
                                <p style={{ color: "red" }}>{errors.phone.message}</p>
                              )}
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-6 col-form-label">
                              Password <span class="error">*</span>
                            </label>
                            <div class="col-sm-6">
                              <input
                                type="password"
                                class="form-control"
                                {...register("password", {
                                  required: "Password is required",
                                  minLength: {
                                    value: 6,
                                    message: "Password must be more than 4 characters",
                                  },
                                  maxLength: {
                                    value: 8,
                                    message:
                                      "Password cannot exceed more than 8 characters",
                                  },
                                })}
                              />
                              {errors.Password && (
                                <p style={{ color: "red" }}>{errors.Password.message}</p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div class="col-md-12">
                          <div class="form-group row">
                            <label class="col-sm-12 col-form-label">Notes</label>
                            <div class="col-sm-12">
                              <textarea
                                class="form-control"
                                name="notes"
                                {...register("notes")}
                                style={{ height: "300px;" }}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br />
                      <div class="row">
                        <div class="col-md-12" align="center">
                          <Link to={`/parents`} class="btn btn-outline-danger">Cancel</Link>
                          {" "}
                          <button type="submit" class="btn btn-outline-success mr-2">
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                    <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default AddParent;
