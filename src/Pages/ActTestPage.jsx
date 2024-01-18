import React, { Fragment } from "react";
import Leftbar from "../Components/Sidebar/Leftbar";
import Headerbar from "../Components/Sidebar/Headerbar";
import ActTest from "../Components/Admin/ActTest";
import "../Components/styles.css";

function ActTestPage() {
  return (
    <div>
      {/* <div id="preloader">
        <div class="loader">
          <svg class="circular" viewBox="25 25 50 50">
            <circle
              class="path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke-width="3"
              stroke-miterlimit="10"
            />
          </svg>
        </div>
      </div> */}
      <div id="main-wrapper">
        <Headerbar />
        <Leftbar />
        <div class="content-body container">
          <ActTest />
        </div>
        <div class="footer">
          <div class="copyright">
            <p>&copy;  - 2023 Brilliant Prep. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActTestPage;
