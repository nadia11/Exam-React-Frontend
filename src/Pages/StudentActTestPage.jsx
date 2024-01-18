import React, { Fragment } from "react";
import Leftbar from "../Components/Sidebar/Leftbar";
import Headerbar from "../Components/Sidebar/Headerbar";
import StudentActTest from "../Components/Admin/StudentActTest";
import "../Components/styles.css";

function ActTestPage() {
  return (
    <div>
      <div id="main-wrapper">
        <Headerbar />
        <Leftbar />
        <div class="content-body container">
          <StudentActTest />
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
