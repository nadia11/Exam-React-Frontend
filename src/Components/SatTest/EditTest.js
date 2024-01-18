import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import { useForm } from "react-hook-form";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const initialState = {
  name: "",
  email: "",
};
function EditTest() {
  const [state, setState] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (id) {
      getSingleTest(id);
    }
  }, [id]);
  const [selectedClient, setSelectedClient] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [numFields, setNumFields] = useState(1);
  const [formData, setFormData] = useState([]);

  const handleNumFieldsChange = (event) => {
    const num = parseInt(event.target.value);
    setNumFields(num);
    setFormData(Array.from({ length: num }, () => ({ model_type: '', no_of_questions: '', section_title: '' })));
  };

  const handleSelectChange2 = (index, value) => {
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[index].model_type = value;
      return newData;
    });
  };

  const handleTextChange = (index, value) => {
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[index].no_of_questions = value;
      return newData;
    });
  };
  const handleTextChange2 = (index, value) => {
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[index].section_title = value;
      return newData;
    });
  };

  const getSingleTest = async (id) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}edit_sattest/${id}`
    );
    if (response.status === 200) {
      setState({ ...response.data });
      setValue("test_code", response.data.test_code);
      setValue("test_title", response.data.test_title);
      setValue("no_of_questions", response.data.no_of_questions); 
      setStartDate(new Date(response.data.start_date));
      setEndDate(new Date(response.data.end_date));
    }
  };


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
        `${process.env.REACT_APP_BASE_URL}update_sattest/${id}`,
        {
          ...values,
          id: id,
          start_date: startDate,
          end_date: endDate,
        },
        {
          withCredentials: true,
        }
      );

      console.log(data);

      if (data) {
        if (data.errors) {
          const { name, email, password } = data.errors;
          if (name) generateError(name);
          else if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/sattests");
          window.location.reload(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div class="container-fluid page-body-wrapper">
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="card">
            <div class="card-body">
            <div class="col-12">
              <div class="row">
                <div class="col-6">
                  <h4 class="card-title">Edit SAT Test</h4>
                </div>
                <div class="col-6 text-right">
                     <Link to={`/sattests`} class="btn btn-outline-primary"><i className="fa fa-arrow-left"></i> Back to SAT Tests</Link>
                </div>
              </div>
            </div>
            <br />
              <div class="row">
                <div class="col-12">
                <form class="form-sample" onSubmit={handleSubmit(onSubmit)}>
                    <div class="row"><div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-6 col-form-label">
                            Test Code <span class="error">*</span>
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              name="test_code"
                              class="form-control"
                              {...register("test_code", {
                                required: "Test Code is required",
                              })}
                            />
                            {errors.test_code && (
                              <p style={{ color: "red" }}>{errors.test_code.message}</p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-6 col-form-label">
                            Test Title <span class="error">*</span>
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              name="test_title"
                              class="form-control"
                              {...register("test_title", {
                                required: "Test Title is required",
                              })}
                            />
                            {errors.test_title && (
                              <p style={{ color: "red" }}>{errors.test_title.message}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-6 col-form-label">
                            No of Questions <span class="error">*</span>
                          </label>
                          <div class="col-sm-6">
                            <input
                              type="text"
                              readOnly={true}
                              name="no_of_questions"
                              class="form-control"
                              {...register("no_of_questions", {
                                required: "No of Questions is required",
                              })}
                            />
                            {errors.no_of_questions && (
                              <p style={{ color: "red" }}>
                                {errors.no_of_questions.message}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-6 col-form-label">
                            Start Date <span class="error">*</span>
                          </label>
                          <div class="col-sm-6">
                            <DatePicker
                              class="form-control"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                            />
                            {errors.start_date && (
                              <p style={{ color: "red" }}>{errors.start_date.message}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-6 col-form-label">
                            End Date <span class="error">*</span>
                          </label>
                          <div class="col-sm-6">
                            <DatePicker
                              class="form-control"
                              selected={endDate}
                              onChange={(date2) => setEndDate(date2)}
                            />
                            {errors.end_date && (
                              <p style={{ color: "red" }}>{errors.end_date.message}</p>
                            )}
                          </div>
                        </div>
                      </div> 
                    </div>
                    
                    <br /> 
                    <div class="row">
                      <div class="col-md-12" align="center">
                        <Link to={`/sattests`} class="btn btn-outline-danger">Cancel</Link>
                          {" "}
                        <button type="submit" class="btn btn-outline-primary mr-2">
                                Update
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

export default EditTest;
