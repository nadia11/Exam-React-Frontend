import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import Leftbar from "../Components/Sidebar/Leftbar";
import Headerbar from "../Components/Sidebar/Headerbar";
import EditTopic from "../Components/SubTopic/EditTopic";

function EditSubTopicPage() {
  return (
    <div> 
      <div id="main-wrapper">
        <Headerbar />
        <Leftbar />
        <EditTopic/>
        <div class="footer">
          <div class="copyright">
            <p>&copy;  - 2023 Brilliant Prep. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditSubTopicPage;
