import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { get, useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import apiService from "../services/apiService";
import ConfirmationPopup from "../Popups/ConfirmationPopup";
import { useParams } from "react-router-dom";

function ActTest() {
  const params = useParams();
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [formData, setFormData] = useState(null);
  const [btnText, setbtnText] = useState("Submit Test");
  const [no_questions, setnoquestions] = useState();

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getSingleTest(id);
    }
  }, [id]);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const getSingleTest = async (id) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}edit_test/${id}`
    );
    if (response.status === 200) {
      setnoquestions(response.data.no_of_questions);
    }
  };

  const myArray = [];
  for (let i = 1; i <= no_questions; i++) {
    myArray.push(i);
  }

  const onSubmit = async (data) => {
    const formData1 = Object.entries(data).map(([key, value]) => ({
      question: parseInt(key.split("_")[1], 10) + 1,
      answer: value,
    }));
    setFormData(formData1);
    setOpenConfirmation(true);
  };

  const handleConfirm = async () => {
    setOpenConfirmation(false);
    const body = {
      created_by: "64b25f1d8f101cbe3781e367",
      test_id: id,
      questions_and_answers: formData,
    };
    try {
      const result = await apiService().post("acttest", body);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setOpenConfirmation(false);
  };

  const getInitialData = async () => {
    try {
      const result = await apiService().get(`getActtest?test_id=${params.id}`);
      if (result.data.data) {
        setbtnText("Update Test");
        result.data.data.questions_and_answers.forEach((element, index) => {
          setValue(`selectedValues_${index}`, element.answer);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);
  return (
    <>
      {openConfirmation && (
        <ConfirmationPopup
          open={true}
          title="Confirmation"
          message="Are you sure you want to proceed?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="App">
            {myArray.map((option, index) => (
            <div  className="radio-btn-container">
              {option % 2 === 0 ? (
                <div  className="radio-btn-container">
                      <div className="number">{option}</div>
                  <div className="radio-btn"> 
                    <input type="radio" id={`option1_${index}`} name={`selectedValues_${index}`} 
                      value="F" {...register(`selectedValues_${index}`, { required: true })}/>
                    <label htmlFor={`option1_${index}`}className="radioLabel">
                           F
                    </label>
                  </div>
                  <div className="radio-btn">
                    <input id={`option2_${index}`}
                      name={`selectedValues_${index}`}
                      type="radio"
                      value="G"
                      {...register(`selectedValues_${index}`, { required: true })}
                    />
                     <label htmlFor={`option2_${index}`} className="radioLabel">G</label>
                  </div>
                  <div className="radio-btn">
                    <input id={`option3_${index}`}
                      name={`selectedValues_${index}`}
                      type="radio"
                      value="H"
                      {...register(`selectedValues_${index}`, { required: true })}
                    />
                    <label htmlFor={`option3_${index}`} className="radioLabel">H</label>
                  </div>
                  <div className="radio-btn">
                    
                    <input id={`option4_${index}`}
                      name={`selectedValues_${index}`}
                      type="radio"
                      value="J"
                      {...register(`selectedValues_${index}`, { required: true })}
                    />
                    <label htmlFor={`option4_${index}`} className="radioLabel">J</label>
                  </div>
                </div>
              ) : (
                <div  className="radio-btn-container">
                      <div className="number">{option}</div>
                  <div className="radio-btn">
                    <input id={`option1_${index}`}
                      name={`selectedValues_${index}`}
                      type="radio"
                      value="A"
                      {...register(`selectedValues_${index}`, { required: true })}
                    />
                    <label htmlFor={`option1_${index}`} className="radioLabel">A</label>
                  </div>
                  <div className="radio-btn">
                    <input id={`option2_${index}`}
                      name={`selectedValues_${index}`}
                      type="radio"
                      value="B"
                      {...register(`selectedValues_${index}`, { required: true })}
                    />
                    <label htmlFor={`option2_${index}`} className="radioLabel">B</label>
                  </div>
                  <div className="radio-btn">
                    <input id={`option3_${index}`}
                      name={`selectedValues_${index}`}
                      type="radio"
                      value="C"
                      {...register(`selectedValues_${index}`, { required: true })}
                    />
                    <label htmlFor={`option3_${index}`} className="radioLabel">C</label>
                  </div>
                  <div className="radio-btn">
                    <input id={`option4_${index}`}
                      name={`selectedValues_${index}`}
                      type="radio"
                      value="D"
                      {...register(`selectedValues_${index}`, { required: true })}
                    />
                    <label htmlFor={`option4_${index}`} className="radioLabel">D</label>
                  </div>
                </div>
              )}
            </div>
          ))}
          <br />
          <br />
          {errors && (
            <span
              style={{
                color: "red",
              }}
            >
              Please select an option for each question
            </span>
          )}
          <br />
          <br />

          <button type="submit" class="btn btn-outline-success">
            {btnText}
          </button>
          <br />
          <br />
        </div>
      </form>
    </>
  );
}

export default ActTest;
