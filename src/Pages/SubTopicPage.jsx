import React, { Fragment } from "react";
import Home from "../Components/Home/Home";
import Nav from "../Components/Navbar/Unav";
import Sidebar from "../Components/Sidebar/Sidebar";
import Leftbar from "../Components/Sidebar/Leftbar";
import Headerbar from "../Components/Sidebar/Headerbar";
import TopicList from "../Components/SubTopic/TopicList";

function SubTopicPage() {
  return (
    <div> 
      <div id="main-wrapper">
        <Headerbar />
        <Leftbar />
        <TopicList/>
        <div class="footer">
          <div class="copyright">
            <p>&copy;  - 2023 Brilliant Prep. All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubTopicPage;
