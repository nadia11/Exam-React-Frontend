import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../Components/Home/Home";
import Nav from "../Components/Navbar/Unav";
import Sidebar from "../Components/Sidebar/Sidebar";
import Leftbar from "../Components/Sidebar/Leftbar";
import Headerbar from "../Components/Sidebar/Headerbar";
import EditParent from "../Components/Parent/EditParent";

function EditParentPage() {
  return (
    <div>
      <div id="main-wrapper">
        <Headerbar />
        <Leftbar />
        <EditParent />
        <div class="footer">
          <div class="copyright container">
            <p>&copy;  - 2023 Brilliant Prep. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditParentPage;
