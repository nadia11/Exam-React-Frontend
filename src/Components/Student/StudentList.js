import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { useLocation } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
let table = null;
function StudentList() {

  const location = useLocation();
  const [parentData, setParentData] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate(); 

  const parent_id = new URLSearchParams(location.search).get('parent_id'); // Get parent_id from URL query parameter
  const batch_id = new URLSearchParams(location.search).get('batch_id'); // Get batch_id from URL query parameter

  const getParents = async () => { 
      let url = `${process.env.REACT_APP_BASE_URL}getallparents`;
      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          setParentData(response.data);
        }
      } catch (error) {
        console.error('Error fetching students:', error);
      }
  };
  const getStudents = async () => {
    let url = `${process.env.REACT_APP_BASE_URL}getallstudents`;

    if (parent_id !== null) {
      url = `${process.env.REACT_APP_BASE_URL}getallstudents?parent_id=${parent_id}`;
    } else if (batch_id !== null) {
      url = `${process.env.REACT_APP_BASE_URL}getallstudents?batch_id=${batch_id}`;
    }

    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  }; 

  useEffect(() => {  
    setTimeout(() => {
      table.destroy()
      getParents();
      getStudents();
    }, 2000);
  }, [parent_id, batch_id]);

  useEffect(()=>{
    table = new DataTable('#studentTables',{
      'lengthMenu':[[10,25,50,-1],[10,25,50,"All"]]
    });
    
  })

  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to Delete Student?")) {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}delete_user/${id}`
      );
      toast.success(response.data);
      getStudents();
      window.location.reload(true);
    }
  };

  const blockStudent = async (id) => {
    if (window.confirm("Are you sure you wnat to Ddeactivate Student?")) {
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}block_user/${id}`
      );
      toast.success(response.data);
      getStudents();
      window.location.reload(true);
    }
  };

  const unblockStudent = async (id) => {
    if (window.confirm("Are you sure you want to Activate Student?")) {
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}unblock_user/${id}`
      );
      toast.success(response.data);
      getStudents();
    }
  };
  
  

  return (
    <div class="content-body container"> 
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <h4 class="card-title">Students List</h4>
                  </div> 
                  <div class="col-6 text-right">
                    <Link to={`/parents`} class="btn btn-outline-primary"><i className="fa fa-arrow-left"></i> Back to Parents</Link>
                  </div>
                </div>
                <div class="table-responsive">
                  <table
                    class="table table-striped table-bordered zero-configuration"
                    width="100%"
                    id="studentTables"
                  >
                    <thead>
                      <tr>
                        <th>S.No</th>
                        <th>Student Name</th>
                        <th>Email Address</th>
                        <th>Parent Name</th>
                        <th>ACT</th>
                        <th>SAT</th>
                        <th>Transactions</th>
                        <th>Status</th>
                        <th width="110px">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.length > 0
                        ? data.map((item, index) => {
                          const parent = parentData.find(parent => parent._id === item.parent_id);
                            return (
                              <tr>
                                <td>{index + 1}</td>
                                <td>
                                  {item.first_name} {item.middle_name}{" "}
                                  {item.last_name}
                                </td>
                                <td>{item.email}</td>
                                <td>{parent ? parent.first_name : 'Unknown'}</td>
                                <td align="center">
                                  <Link to={`/students?parent_id=${item._id}`}>
                                      <Button className="btn-sm btn-info ms-6">
                                        <strong>{item.act_count}</strong>
                                      </Button>
                                    </Link>
                                </td>
                                <td align="center">
                                  <Link to={`/students?parent_id=${item._id}`}>
                                      <Button className="btn-sm btn-info ms-6">
                                        <strong>{item.sat_count}</strong>
                                      </Button>
                                    </Link>
                                </td>
                                <td align="center">
                                  <Link to={`/students?parent_id=${item._id}`}>
                                      <Button className="btn-sm btn-info ms-6">
                                        <strong>0</strong>
                                      </Button>
                                    </Link>
                                </td>
                                <td>  
                                  {item.status ? (
                                        <label title="In Active Topic"
                                          className="btn btn-success ms-2"
                                          onClick={() => blockStudent(item._id)}
                                        >
                                          <i className="fa fa-check"></i>
                                        </label>
                                      ) : (
                                        <label title="Active Topic"
                                          className="btn btn-danger ms-2"
                                          onClick={() => unblockStudent(item._id)}
                                        >
                                        <i className="fa fa-times"></i>
                                        </label>
                                      )}
                                </td>
                                <td> 
                                  <label
                                    className="btn btn-outline-danger"
                                    onClick={() => deleteStudent(item._id)}
                                  >
                                    <i
                                      className="fa fa-trash"
                                      aria-hidden="true"
                                    ></i>
                                  </label> 
                                  <Link to={`/edit_student/${item._id}`}>
                                    <label className="btn btn-outline-primary ms-2">
                                      <i className="fa fa-edit"></i>
                                    </label>
                                  </Link>
                                </td>
                              </tr>
                            );
                          })
                        : ""}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default StudentList;
