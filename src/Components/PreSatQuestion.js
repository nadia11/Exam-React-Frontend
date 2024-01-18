import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

import 'font-awesome/css/font-awesome.min.css';


function PreSatQuestion() {
  const [showLoading, setShowLoading] = useState(true);
 
  const { id } =useParams();
  
  setTimeout(() => {
    setShowLoading(false)
  }, 3000);
  return (
    <>

      <div class="container-fluid page-body-wrapper" style={{ padding: "0px" }}>
        <div class="main-panel">
          <div>

            {showLoading ?
              <>
                <div className="mt-5 mb-5">
                     <h4 className="text-center" >We're Preparing Your Practice Test</h4>
                </div>
                <div class="background_bg_test">
                  <center>
                      <div style={{ width: "25rem" }}>
                        <div style={{ height: "280px" }}></div>
                        <div style={{ padding: "2rem" }}>
                              This may take up to a minute. Please don't refresh this page or quit the
                              app.
                        </div>
                      </div>
                  </center>
                </div>
              </>
              : <>
                <div>
                  <center>
                    <h2 class="practice_test_head">Practice Test</h2>
                    <div className="card practice_Test_block">
                      <div className="d-flex flex-row">
                        <div class="practice_icon">
                          <i class="fa fa-clock-o" aria-hidden="true"></i>
                        </div>
                        <div class="practice_text">
                          <h3  class="practice_Test_title">Timing</h3>
                          <div class="text-content">
                              Full-length practice tests are timed like real exams, but you can save and exit the test any time. If you continue on a different device, you'll need to start over.
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div class="practice_icon">
                          <i class="fa fa-sticky-note" aria-hidden="true"></i>
                        </div>
                        <div class="practice_text">
                          <h3 class="practice_Test_title">Scores</h3>
                          <div class="text-content">
                              When you finish the practice test, go to My Practice to see your scores and get personalized study tips.
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div class="practice_icon">
                          <i class="fa fa-street-view" aria-hidden="true"></i>
                        </div>
                        <div class="practice_text">
                          <h3  class="practice_Test_title">Assistive Technology</h3>
                          <div class="text-content">
                              If you use assistive technology, you should try it out on the practice test so you know what to expect on test day.
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div class="practice_icon">
                          <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                        </div>
                        <div class="practice_text">
                          <h3 class="practice_Test_title">No Lockdown Mode</h3>
                          <div class="text-content">
                              We don't lock down practice tests. On test day, Bluebook prevents you from accessing other programs or apps.
                          </div>
                        </div>
                      </div>
                    </div>
                  </center>
                </div>
                <div className="row fixed-footer">
                  <br />
                  <hr />
                  <div className="d-flex" >
                    <div className="col-8">

                    </div>

                    <div className="col-4 paginations">
                      <button onClick={() => { window.history.back() }}
                      >
                        Prev
                      </button>
                      <button onClick={() => { window.location.assign("/satquestion/"+id)}}>
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </>}
          </div>
        </div>
      </div>
    </>
  );
}

export default PreSatQuestion;
