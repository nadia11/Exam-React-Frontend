import React, { Fragment } from "react";
import Home from "../Components/Home/Home";
import Nav from "../Components/Navbar/Unav";
import Sidebar from "../Components/Sidebar/Sidebar";
import Leftbar from "../Components/Sidebar/Leftbar";
import Headerbar from "../Components/Sidebar/Headerbar";
import AStudentList from "../Components/Student/AStudentList";

function StudentPage() {
  return (
    <div>
      <div id="main-wrapper">
        <Headerbar />
        <Leftbar />
        <AStudentList />
        <div class="footer">
        <div class="copyright container" align="center">
            <p>&copy;  - 2023 Brilliant Prep. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPage;