import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLoginPage from "./Pages/userLogin";
import UserRegisterPage from "./Pages/userRegister";
import UserHomePage from "./Pages/userHome";
import StudentPage from "./Pages/StudentPage";
import StudentBatchPage from "./Pages/StudentBatchPage";
import ActBatchPage from "./Pages/ActBatchPage";
import SatBatchPage from "./Pages/SatBatchPage";
import ParentPage from "./Pages/ParentPage";
import AddStudentPage from "./Pages/AddStudentPage";
import AddParentPage from "./Pages/AddParentPage";
import ActTestPage from "./Pages/ActTestPage";
import Calculator from "./Pages/Calculator";
import Annotation from "./Pages/Annotation";
import NActTestPage from "./Pages/NActTestPage";
import StudentActTestPage from "./Pages/StudentActTestPage";
import AdminLoginPage from "./Pages/adminLogin";
import AdminRegisterPage from "./Pages/adminRegister";
import AdminPanelPage from "./Pages/AdminPanel";
import ErrorPage from "./Pages/errorPage";
import "react-toastify/dist/ReactToastify.css";
import AddUserPage from "./Pages/addUser";
import EditUserPage from "./Pages/editUser";
import EditStudentPage from "./Pages/EditStudentPage";
import EditParentPage from "./Pages/EditParentPage";
import TeamLeader from "./Pages/TeamLeader";
import AddTestPage from "./Pages/AddTestPage";
import AssignTest from "./Pages/AssignTest";
import AssignSatTest from "./Pages/AssignSatTest";
import AssignActTest from "./Pages/AssignActTest";
import EditTestPage from "./Pages/EditTestPage";
import TestPage from "./Pages/TestPage";
import Test from "./Pages/Test";
import ExcelImport from "./Pages/ExcelImport";
import ExcelImport2 from "./Pages/ExcelImport2";
import SatQuestion from "./Pages/SatQuestion";
import PreSatQuestion from "./Components/PreSatQuestion";
import SatTestPage from "./Pages/SatTestPage";
import AddSatTestPage from "./Pages/AddSatTestPage";
import EditSatTestPage from "./Pages/EditSatTestPage";
import TopicPage from "./Pages/TopicPage";
import AddTopicPage from "./Pages/AddTopicPage";
import EditTopicPage from "./Pages/EditTopicPage";
import SubTopicPage from "./Pages/SubTopicPage";
import AddSubTopicPage from "./Pages/AddSubTopicPage";
import EditSubTopicPage from "./Pages/EditSubTopicPage";
import AddBatchPage from "./Pages/AddBatchPage";
import EditBatchPage from "./Pages/EditBatchPage";
import BatchPage from "./Pages/BatchPage";
import SatTests from "./Pages/SatTests";
import SatTestResults from "./Pages/SatTestResults";
import Account from "./Pages/Account";
import PerformanceReport from "./Pages/performanceReport";
import Resources from "./Pages/Resources";
import studentDashboard from "./Pages/studentDashboard";
import Courses from "./Pages/Courses";
import PracticeTests from "./Pages/PracticeTests";
import ProgressReports from "./Pages/ProgressReports";
import { ToastContainer, toast } from "react-toastify";
import SendEmailPage from "./Pages/SendEmailPage";
import SendSatReport from "./Pages/SendSatReport";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UserLoginPage />} />
          <Route exact path="/register" element={<UserRegisterPage />} />
          <Route exact path="/team-leader" element={<TeamLeader />} />
          <Route exact path="/recuiter-leader" element={<TeamLeader />} />
          <Route exact path="/dashboard" element={<UserHomePage />} />
          <Route exact path="/students" element={<StudentPage />} />
          <Route exact path="/students_batches" element={<StudentBatchPage />} />
          <Route exact path="/acttests_batches" element={<ActBatchPage />} />
          <Route exact path="/sattests_batches" element={<SatBatchPage />} />
          <Route exact path="/parents" element={<ParentPage />} />
          <Route exact path="/add_student/:parent_id" element={<AddStudentPage />} />
          <Route exact path="/add_parent" element={<AddParentPage />} />
          <Route exact path="/edit_student/:id" element={<EditStudentPage />} />
          <Route exact path="/edit_parent/:id" element={<EditParentPage />} />
          <Route exact path="/acttestpage/:id" element={<ActTestPage />} />
          <Route exact path="/nacttestpage/:id" element={<NActTestPage />} />
          <Route exact path="/assigntests/:id" element={<AssignTest />} />
          <Route exact path="/assignacttests/:id" element={<AssignActTest />} />
          <Route exact path="/assignsattests/:id" element={<AssignSatTest />} />
          <Route exact path="/send-email" element={<SendEmailPage />} />
          <Route exact path="/send-sarreport/:id" element={<SendSatReport />} />
          <Route
            exact
            path="/student_acttestpage/:id"
            element={<StudentActTestPage />}
          />
          <Route exact path="/admin" element={<AdminLoginPage />} />
          <Route exact path="/admin_register" element={<AdminRegisterPage />} />
          <Route exact path="/admin_panel" element={<AdminPanelPage />} />

          <Route exact path="/delete/:id" element={<AdminPanelPage />} />
          <Route exact path="/edit/:id" element={<EditUserPage />} />
          <Route exact path="/block/:id" element={<AdminPanelPage />} />
          <Route exact path="/unblock/:id" element={<AdminPanelPage />} />

          <Route exact path="/add" element={<AddUserPage />} />

          <Route exact path="/add_test" element={<AddTestPage />} />
          <Route exact path="/edit_test/:id" element={<EditTestPage />} />
          <Route exact path="/tests" element={<TestPage />} />
          <Route exact path="/test" element={<Test />} />
          <Route exact path="/excelimport/:id" element={<ExcelImport />} />
          <Route exact path="/excelimport2" element={<ExcelImport2 />} />
          <Route exact path="/satquestion/:id" element={<SatQuestion />} />
          <Route  exact path="/start/satquestion/:id" element={<PreSatQuestion />} />
          <Route  exact path="/sat/test/:id" element={<SatTests />} />
          <Route  exact path="/sat/testresults/:id" element={<SatTestResults />} />
          <Route  exact path="/sat/performance/:id" element={<PerformanceReport />} />

          <Route exact path="/add_sattest" element={<AddSatTestPage />} />
          <Route exact path="/edit_sattest/:id" element={<EditSatTestPage />} />
          <Route exact path="/sattests" element={<SatTestPage />} />

          
          <Route exact path="/account" element={<Account />} />

          <Route exact path="/add_topic" element={<AddTopicPage />} />
          <Route exact path="/edit_topic/:id" element={<EditTopicPage />} />
          <Route exact path="/topics" element={<TopicPage />} />

          <Route exact path="/add_subtopic" element={<AddSubTopicPage />} />
          <Route exact path="/edit_subtopic/:id" element={<EditSubTopicPage />} />
          <Route exact path="/subtopics" element={<SubTopicPage />} />

          <Route exact path="/add_batch" element={<AddBatchPage />} />
          <Route exact path="/edit_batch/:id" element={<EditBatchPage />} />
          <Route exact path="/batches" element={<BatchPage />} />
          <Route exact path="/calculator" element={<Calculator />} />
          <Route exact path="/annotation" element={<Annotation />} /> 
          <Route exact path="/practice_tests" element={<PracticeTests />} />
          <Route exact path="/progress_reports" element={<ProgressReports />} />
          <Route exact path="/resources" element={<Resources />} />
          <Route exact path="/student_dashboard" element={<studentDashboard />} />
          <Route exact path="/courses" element={<Courses />} />

          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
