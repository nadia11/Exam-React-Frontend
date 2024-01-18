import React, { Fragment } from "react";
import { Link, useNavigate } from"react-router-dom";
import '../Components/SatTest/SatTest.css';
import Header from '../Components/Sidebar/SatHeader';
import Content from '../Components/Sidebar/SatContent';
import Footer from '../Components/Sidebar/SatFooter';

function AddBatchPage() {
  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default AddBatchPage;
