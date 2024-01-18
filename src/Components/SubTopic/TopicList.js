import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { Table, Button } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import DataTable from 'datatables.net-dt';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import axios from "axios";
let table = null;

function TopicList() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {  
    setTimeout(() => {
      table.destroy()
      getTopics();
    }, 2000);
  }, []);

  useEffect(()=>{
    table = new DataTable('#stopicTable',{
      'lengthMenu':[[10,25,50,-1],[10,25,50,"All"]]
    });
    
  })

  const deleteTest = async (id) => {
    if (window.confirm("Are you sure you want to Delete Sub Topic?")) {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}delete_subtopic/${id}`
      );
      toast.success(response.data);
      getTopics();
    }
  };

  const blockTopic = async (id) => {
    if (window.confirm("Are you sure you wnat to Deactivate Sub Topic?")) {
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}block_subtopic/${id}`
      );
      toast.success(response.data);
      getTopics();
    }
  };

  const unblockTopic = async (id) => {
    if (window.confirm("Are you sure you want to Activate Sub Topic?")) {
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}unblock_subtopic/${id}`
      );
      toast.success(response.data);
      getTopics();
    }
  };

  const getTopics = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}getallsubtopics`
    );
    if (response.status === 200) {
      setData(response.data);
      navigate("/subtopics");
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
                    <h4 class="card-title">Sub Topics List</h4>
                  </div>
                  <div class="col-6 text-right">
                    <Link to={`/add_subtopic`} class="btn btn-outline-primary"><i className="fa fa-plus"></i> Add Sub Topic</Link>
                  </div>
                </div>
                <div class="table-responsive">
                <table
                    class="table table-striped table-bordered zero-configuration"
                    width="100%" id="stopicTable"
                  >
                              <thead>
                                <tr role="row">
                                    <th width="5%">S.No</th>
                                    <th>Main Topic</th>
                                    <th>Topic Code</th> 
                                    <th>Topic Name</th>
                                    <th>Type</th> 
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                              {data.length > 0
                                ? data.map((item, index) => { 
                                    return (
                                <tr role="row" class="odd">
                                      <td class="sorting_1">{index + 1}</td>
                                      <td>{item.name}</td>
                                      <td>{item.topic_code}</td>
                                      <td>{item.topic_title}</td>
                                      <td>{item.topic_type}</td>
                                      <td>
                                          {item.status ? (
                                            <label title="In Active Topic"
                                              className="btn btn-success ms-2"
                                              onClick={() => blockTopic(item._id)}
                                            >
                                              <i className="fa fa-check"></i>
                                            </label>
                                          ) : (
                                            <label title="Active Topic"
                                              className="btn btn-danger ms-2"
                                              onClick={() => unblockTopic(item._id)}
                                            >
                                            <i className="fa fa-times"></i>
                                            </label>
                                          )}
                                      </td>
                                      <td>
                                      <Link to={`/edit_subtopic/${item._id}`}>
                                          <label class="btn btn-outline-warning">
                                                <i className="fa fa-edit"></i> 
                                          </label>
                                        </Link>
                                        {" "}
                                        <label onClick={() => deleteTest(item._id)}
                                          class="btn btn-outline-danger">
                                                <i className="fa fa-trash"></i> 
                                          </label>
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
export default TopicList;
