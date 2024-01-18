import React, { Fragment } from "react";
import Leftbar from "../Components/Sidebar/Leftbar";
import Headerbar from "../Components/Sidebar/Headerbar";
import ActTest from "../Components/Admin/NActTest";
import "../Components/styles.css";

function NActTestPage() {
  return ( 
    <div> 
      <div id="main-wrapper">
        <Headerbar />
        <Leftbar />
        <ActTest />
        <div class="footer">
          <div class="copyright container">
            <p>&copy;  - 2023 Brilliant Prep. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NActTestPage;
