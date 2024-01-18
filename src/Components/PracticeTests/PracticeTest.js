import React, { useState, useEffect } from "react";
import { Accordion, Card, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Resources/Resource.css";
import "font-awesome/css/font-awesome.min.css";

const PracticeTest = () => {
  return (
    <div className="practice_tests">
        <div className="blocks">              
            <div class="icon">
            <i class="fa fa-edit"></i>
            </div>
            <div className="content">
                <h3>PRACTICE TESTS</h3>
                <p>Exam taken as either proctored or  self-proctored throughout the course with multiple attemptes available.</p>                   
            </div>
        </div>
        <div className="blocks active">              
            <div class="icon">
            <i class="fa fa-list"></i>
            </div>
            <div className="content">
                <h3>Summary</h3>
                <p>You completed 1 of  2 tests.</p>                   
            </div>
            <div>
                    <a href="" class="anchorclass"><i class="fa fa-star"></i> Score & Analysis</a>
            </div>
        </div>
        <div className="middle_container">
            <div class="test-container">
                <div class="status">
                    <span style={{color:"gray",fontWeight:"normal"}}>Assigned</span><br/>
                    <span>SAT Practice 2</span>
                </div>
                <div class="date">
                    December 2, 2023
                </div>
                <a class="start-button" href="/start/satquestion/65797643daa8c5ddc505f662">Start Test</a>
            </div>
            <div class="test-container">
                <div class="status">
                    <span style={{color:"gray",fontWeight:"normal"}}>Assigned</span><br/>
                    <span>SAT Practice 1</span>
                </div>
                <div class="date">
                    November 16, 2023
                </div>
                <a class="review-button" href="/start/satquestion/64e25a2e8957e3eeac340996">Start Test</a>
            </div>
        </div>
    </div>
  );
};

export default PracticeTest;
