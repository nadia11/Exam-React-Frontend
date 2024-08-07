import React, { Fragment } from "react";
import  Resource from '../Components/Resources/Resource.js';
import SHeaderbar from "../Components/Navbar/Header.js";
import SFooterbar from "../Components/Navbar/Footer.js";

function Resources() {
  const rolename = localStorage.getItem("role");
  return (
    <div> 
    <SHeaderbar/>
	{rolename=='parent' && (
	<>
		<div class="app-wrapper">
				<div class="app-content pt-3 p-md-3 p-lg-4">
					<div class="container-xl">
						<div class="row g-4 mb-4 weekly-calendar">
							<div class="col-12 col-lg-9">
								<h5>Parent Dashboard</h5>
							</div>
							<div class="col-12 col-lg-3">
								<select class="form-control">
										<option value="64d65272364367021fe8ac3a">Rishikesh Y</option>
										<option value="651b7a7470b4f37aba2d3983">Ishu K</option>
								</select>
							</div>
						</div>
						<div class="row g-4 mb-4 weekly-calendar">
							<div class="col-6 col-lg-2">
								<div class="h-100">
									<div class="app-card-body p-3 p-lg-4">
										<h4 class="stats-type mb-1">Mon</h4>
										<div class="stats-figure">04 Dec</div>
										<div class="stats-meta text-success weeklystyle cgreen">
											12.3%
										</div>
									</div>
									<a class="app-card-link-mask" href="#"></a>
								</div>
							</div>

							<div class="col-6 col-lg-2">
								<div class="h-100">
									<div class="app-card-body p-3 p-lg-4">
										<h4 class="stats-type mb-1">Tue</h4>
										<div class="stats-figure">05 Dec</div>
										<div class="stats-meta text-success weeklystyle cred">12.3% </div>
									</div>
									<a class="app-card-link-mask" href="#"></a>
								</div>
							</div>
							<div class="col-6 col-lg-2">
								<div class="h-100">
									<div class="app-card-body p-3 p-lg-4">
										<h4 class="stats-type mb-1">Wed</h4>
										<div class="stats-figure">06 Dec</div>
										<div class="stats-meta weeklystyle cpurple">45%</div>
									</div>
									<a class="app-card-link-mask" href="#"></a>
								</div>
							</div>
							<div class="col-6 col-lg-2">
								<div class="h-100">
									<div class="app-card-body p-3 p-lg-4">
										<h4 class="stats-type mb-1">Thu</h4>
										<div class="stats-figure">07 Dec</div>
										<div class="stats-meta weeklystyle cblue">12.3%</div>
									</div>
									<a class="app-card-link-mask" href="#"></a>
								</div>
							</div>
							<div class="col-6 col-lg-2">
								<div class="h-100">
									<div class="app-card-body p-3 p-lg-4">
										<h4 class="stats-type mb-1">Fri</h4>
										<div class="stats-figure">08 Dec</div>
										<div class="stats-meta text-success weeklystyle corange">20%</div>
									</div>
									<a class="app-card-link-mask" href="#"></a>
								</div>
							</div>

							<div class="col-6 col-lg-2">
								<div class="h-100">
									<div class="app-card-body p-3 p-lg-4">
										<h4 class="stats-type mb-1">Sat</h4>
										<div class="stats-figure">09 Dec</div>
										<div class="stats-meta text-success weeklystyle cyellow">5% </div>
									</div>
									<a class="app-card-link-mask" href="#"></a>
								</div>
							</div>
						</div>
						<div class="row g-4 mb-4">
							<div class="col-12 col-lg-4">
								<div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
									<div class="app-card-header p-3 border-bottom-0">
										<div class="row align-items-center gx-3">
											<div class="col-auto">
												<div class="app-icon-holder">
													<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-receipt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
														<path fill-rule="evenodd" d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
														<path fill-rule="evenodd" d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
													</svg>
												</div>

											</div>
											<div class="col-auto">
												<h4 class="app-card-title">Billing</h4>
											</div>
										</div>
									</div>
									<div class="app-card-body px-4">

										<div class="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet eros vel diam semper mollis.</div>
									</div>
									<div class="app-card-footer p-4 mt-auto">
										<a class="btn app-btn-secondary" href="#">More</a>
									</div>
								</div>
							</div>
							<div class="col-12 col-lg-4">
								<div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
									<div class="app-card-header p-3 border-bottom-0">
										<div class="row align-items-center gx-3">
											<div class="col-auto">
												<div class="app-icon-holder">
													<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-code-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
														<path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
														<path fill-rule="evenodd" d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
													</svg>
												</div>

											</div>
											<div class="col-auto">
												<h4 class="app-card-title">Student Progress</h4>
											</div>
										</div>
									</div>
									<div class="app-card-body px-4">

										<div class="intro">Pellentesque varius, elit vel volutpat sollicitudin, lacus quam efficitur augue</div>
									</div>
									<div class="app-card-footer p-4 mt-auto">
										<a class="btn app-btn-secondary" href="#">More</a>
									</div>
								</div>
							</div>
							<div class="col-12 col-lg-4">
								<div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
									<div class="app-card-header p-3 border-bottom-0">
										<div class="row align-items-center gx-3">
											<div class="col-auto">
												<div class="app-icon-holder">
													<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tools" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
														<path fill-rule="evenodd" d="M0 1l1-1 3.081 2.2a1 1 0 0 1 .419.815v.07a1 1 0 0 0 .293.708L10.5 9.5l.914-.305a1 1 0 0 1 1.023.242l3.356 3.356a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-3.356-3.356a1 1 0 0 1-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 0 0-.707-.293h-.071a1 1 0 0 1-.814-.419L0 1zm11.354 9.646a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708-.708l-3-3z" />
														<path fill-rule="evenodd" d="M15.898 2.223a3.003 3.003 0 0 1-3.679 3.674L5.878 12.15a3 3 0 1 1-2.027-2.027l6.252-6.341A3 3 0 0 1 13.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" />
													</svg>
												</div>

											</div>
											<div class="col-auto">
												<h4 class="app-card-title">Learning Module</h4>
											</div>
										</div>
									</div>
									<div class="app-card-body px-4">

										<div class="intro">Sed maximus, libero ac pharetra elementum, turpis nisi molestie neque, et tincidunt velit turpis non enim.</div>
									</div>
									<div class="app-card-footer p-4 mt-auto">
										<a class="btn app-btn-secondary" href="#">More</a>
									</div>
								</div>
							</div>
						</div>
						<div class="row g-4 mb-4">
							<div class="col-12 col-lg-4">
								<div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
									<div class="app-card-header p-3 border-bottom-0">
										<div class="row align-items-center gx-3">
											<div class="col-auto">
												<div class="app-icon-holder">
													<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-receipt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
														<path fill-rule="evenodd" d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
														<path fill-rule="evenodd" d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
													</svg>
												</div>

											</div>
											<div class="col-auto">
												<h4 class="app-card-title">Home Work</h4>
											</div>
										</div>
									</div>
									<div class="app-card-body px-4">

										<div class="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet eros vel diam semper mollis.</div>
									</div>
									<div class="app-card-footer p-4 mt-auto">
										<a class="btn app-btn-secondary" href="#">More</a>
									</div>
								</div>
							</div>
							<div class="col-12 col-lg-4">
								<div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
									<div class="app-card-header p-3 border-bottom-0">
										<div class="row align-items-center gx-3">
											<div class="col-auto">
												<div class="app-icon-holder">
													<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-code-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
														<path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
														<path fill-rule="evenodd" d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z" />
													</svg>
												</div>

											</div>
											<div class="col-auto">
												<h4 class="app-card-title">Question Bank</h4>
											</div>
										</div>
									</div>
									<div class="app-card-body px-4">

										<div class="intro">Pellentesque varius, elit vel volutpat sollicitudin, lacus quam efficitur augue</div>
									</div>
									<div class="app-card-footer p-4 mt-auto">
										<a class="btn app-btn-secondary" href="#">More</a>
									</div>
								</div>
							</div>
							<div class="col-12 col-lg-4">
								<div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
									<div class="app-card-header p-3 border-bottom-0">
										<div class="row align-items-center gx-3">
											<div class="col-auto">
												<div class="app-icon-holder">
													<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tools" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
														<path fill-rule="evenodd" d="M0 1l1-1 3.081 2.2a1 1 0 0 1 .419.815v.07a1 1 0 0 0 .293.708L10.5 9.5l.914-.305a1 1 0 0 1 1.023.242l3.356 3.356a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-3.356-3.356a1 1 0 0 1-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 0 0-.707-.293h-.071a1 1 0 0 1-.814-.419L0 1zm11.354 9.646a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708-.708l-3-3z" />
														<path fill-rule="evenodd" d="M15.898 2.223a3.003 3.003 0 0 1-3.679 3.674L5.878 12.15a3 3 0 1 1-2.027-2.027l6.252-6.341A3 3 0 0 1 13.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z" />
													</svg>
												</div>

											</div>
											<div class="col-auto">
												<h4 class="app-card-title">Attendance</h4>
											</div>
										</div>
									</div>
									<div class="app-card-body px-4">

										<div class="intro">Sed maximus, libero ac pharetra elementum, turpis nisi molestie neque, et tincidunt velit turpis non enim.</div>
									</div>
									<div class="app-card-footer p-4 mt-auto">
										<a class="btn app-btn-secondary" href="#">More</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<SFooterbar />
		</div>
	</>
	)}
	{rolename=='student' && (
    <div class="app-wrapper">	    
	    <div class="app-content pt-3 p-md-3 p-lg-4">
		    <div class="container-xl">
			    <div class="row g-4 mb-4 weekly-calendar">
				    <div class="col-6 col-lg-2">
					    <div class="h-100">
						    <div class="app-card-body p-3 p-lg-4">
							    <h4 class="stats-type mb-1">Mon</h4>
							    <div class="stats-figure">04 Dec</div>
							    <div class="stats-meta text-success weeklystyle cgreen">
								    12.3%
								</div>
						    </div>
						    <a class="app-card-link-mask" href="#"></a>
					    </div>
				    </div>
				    
				    <div class="col-6 col-lg-2">
					    <div class="h-100">
						    <div class="app-card-body p-3 p-lg-4">
							    <h4 class="stats-type mb-1">Tue</h4>
							    <div class="stats-figure">05 Dec</div>
							    <div class="stats-meta text-success weeklystyle cred">12.3% </div>
						    </div>
						    <a class="app-card-link-mask" href="#"></a>
					    </div>
				    </div>
				    <div class="col-6 col-lg-2">
					    <div class="h-100">
						    <div class="app-card-body p-3 p-lg-4">
							    <h4 class="stats-type mb-1">Wed</h4>
							    <div class="stats-figure">06 Dec</div>
							    <div class="stats-meta weeklystyle cpurple">45%</div>
						    </div>
						    <a class="app-card-link-mask" href="#"></a>
					    </div>
				    </div>
				    <div class="col-6 col-lg-2">
					    <div class="h-100">
						    <div class="app-card-body p-3 p-lg-4">
							    <h4 class="stats-type mb-1">Thu</h4>
							    <div class="stats-figure">07 Dec</div>
							    <div class="stats-meta weeklystyle cblue">12.3%</div>
						    </div>
						    <a class="app-card-link-mask" href="#"></a>
					    </div>
				    </div>
				    <div class="col-6 col-lg-2">
					    <div class="h-100">
						    <div class="app-card-body p-3 p-lg-4">
							    <h4 class="stats-type mb-1">Fri</h4>
							    <div class="stats-figure">08 Dec</div>
							    <div class="stats-meta text-success weeklystyle corange">20%</div>
						    </div>
						    <a class="app-card-link-mask" href="#"></a>
					    </div>
				    </div>
				    
				    <div class="col-6 col-lg-2">
					    <div class="h-100">
						    <div class="app-card-body p-3 p-lg-4">
							    <h4 class="stats-type mb-1">Sat</h4>
							    <div class="stats-figure">09 Dec</div>
							    <div class="stats-meta text-success weeklystyle cyellow">5% </div>
						    </div>
						    <a class="app-card-link-mask" href="#"></a>
					    </div>
				    </div>
			    </div>
			    <div class="row g-4 mb-4">
				    <div class="col-12 col-lg-4">
					    <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
						    <div class="app-card-header p-3 border-bottom-0">
						        <div class="row align-items-center gx-3">
							        <div class="col-auto">
								        <div class="app-icon-holder">
										    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-receipt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
  <path fill-rule="evenodd" d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
</svg>
									    </div>
						                
							        </div>
							        <div class="col-auto">
								        <h4 class="app-card-title">Home Works</h4>
							        </div>
						        </div>
						    </div>
						    <div class="app-card-body px-4">
							    
							    <div class="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet eros vel diam semper mollis.</div>
						    </div>
						    <div class="app-card-footer p-4 mt-auto">
							   <a class="btn app-btn-secondary" href="#">More</a>
						    </div>
						</div>
				    </div>
				    <div class="col-12 col-lg-4">
					    <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
						    <div class="app-card-header p-3 border-bottom-0">
						        <div class="row align-items-center gx-3">
							        <div class="col-auto">
								        <div class="app-icon-holder">
										    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-code-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path fill-rule="evenodd" d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
</svg>
									    </div>
						                
							        </div>
							        <div class="col-auto">
								        <h4 class="app-card-title">Practice Test</h4>
							        </div>
						        </div>
						    </div>
						    <div class="app-card-body px-4">
							    
							    <div class="intro">Pellentesque varius, elit vel volutpat sollicitudin, lacus quam efficitur augue</div>
						    </div>
						    <div class="app-card-footer p-4 mt-auto">
							   <a class="btn app-btn-secondary" href="#">More</a>
						    </div>
						</div>
				    </div>
				    <div class="col-12 col-lg-4">
					    <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
						    <div class="app-card-header p-3 border-bottom-0">
						        <div class="row align-items-center gx-3">
							        <div class="col-auto">
								        <div class="app-icon-holder">
										    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tools" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 1l1-1 3.081 2.2a1 1 0 0 1 .419.815v.07a1 1 0 0 0 .293.708L10.5 9.5l.914-.305a1 1 0 0 1 1.023.242l3.356 3.356a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-3.356-3.356a1 1 0 0 1-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 0 0-.707-.293h-.071a1 1 0 0 1-.814-.419L0 1zm11.354 9.646a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708-.708l-3-3z"/>
  <path fill-rule="evenodd" d="M15.898 2.223a3.003 3.003 0 0 1-3.679 3.674L5.878 12.15a3 3 0 1 1-2.027-2.027l6.252-6.341A3 3 0 0 1 13.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
</svg>
									    </div>
						                
							        </div>
							        <div class="col-auto">
								        <h4 class="app-card-title">Learning Module</h4>
							        </div>
						        </div>
						    </div>
						    <div class="app-card-body px-4">
							    
							    <div class="intro">Sed maximus, libero ac pharetra elementum, turpis nisi molestie neque, et tincidunt velit turpis non enim.</div>
						    </div>
						    <div class="app-card-footer p-4 mt-auto">
							   <a class="btn app-btn-secondary" href="#">More</a>
						    </div>
						</div>
				    </div>
			    </div>
			    <div class="row g-4 mb-4">
				    <div class="col-12 col-lg-4">
					    <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
						    <div class="app-card-header p-3 border-bottom-0">
						        <div class="row align-items-center gx-3">
							        <div class="col-auto">
								        <div class="app-icon-holder">
										    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-receipt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
  <path fill-rule="evenodd" d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
</svg>
									    </div>
						                
							        </div>
							        <div class="col-auto">
								        <h4 class="app-card-title">Progress Report</h4>
							        </div>
						        </div>
						    </div>
						    <div class="app-card-body px-4">
							    
							    <div class="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet eros vel diam semper mollis.</div>
						    </div>
						    <div class="app-card-footer p-4 mt-auto">
							   <a class="btn app-btn-secondary" href="#">More</a>
						    </div>
						</div>
				    </div>
				    <div class="col-12 col-lg-4">
					    <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
						    <div class="app-card-header p-3 border-bottom-0">
						        <div class="row align-items-center gx-3">
							        <div class="col-auto">
								        <div class="app-icon-holder">
										    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-code-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path fill-rule="evenodd" d="M6.854 4.646a.5.5 0 0 1 0 .708L4.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0zm2.292 0a.5.5 0 0 0 0 .708L11.793 8l-2.647 2.646a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708 0z"/>
</svg>
									    </div>
						                
							        </div>
							        <div class="col-auto">
								        <h4 class="app-card-title">Question Bank</h4>
							        </div>
						        </div>
						    </div>
						    <div class="app-card-body px-4">
							    
							    <div class="intro">Pellentesque varius, elit vel volutpat sollicitudin, lacus quam efficitur augue</div>
						    </div>
						    <div class="app-card-footer p-4 mt-auto">
							   <a class="btn app-btn-secondary" href="#">More</a>
						    </div>
						</div>
				    </div>
				    <div class="col-12 col-lg-4">
					    <div class="app-card app-card-basic d-flex flex-column align-items-start shadow-sm">
						    <div class="app-card-header p-3 border-bottom-0">
						        <div class="row align-items-center gx-3">
							        <div class="col-auto">
								        <div class="app-icon-holder">
										    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-tools" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 1l1-1 3.081 2.2a1 1 0 0 1 .419.815v.07a1 1 0 0 0 .293.708L10.5 9.5l.914-.305a1 1 0 0 1 1.023.242l3.356 3.356a1 1 0 0 1 0 1.414l-1.586 1.586a1 1 0 0 1-1.414 0l-3.356-3.356a1 1 0 0 1-.242-1.023L9.5 10.5 3.793 4.793a1 1 0 0 0-.707-.293h-.071a1 1 0 0 1-.814-.419L0 1zm11.354 9.646a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708-.708l-3-3z"/>
  <path fill-rule="evenodd" d="M15.898 2.223a3.003 3.003 0 0 1-3.679 3.674L5.878 12.15a3 3 0 1 1-2.027-2.027l6.252-6.341A3 3 0 0 1 13.778.1l-2.142 2.142L12 4l1.757.364 2.141-2.141zm-13.37 9.019L3.001 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
</svg>
									    </div>
						                
							        </div>
							        <div class="col-auto">
								        <h4 class="app-card-title">Attendance</h4>
							        </div>
						        </div>
						    </div>
						    <div class="app-card-body px-4">
							    
							    <div class="intro">Sed maximus, libero ac pharetra elementum, turpis nisi molestie neque, et tincidunt velit turpis non enim.</div>
						    </div>
						    <div class="app-card-footer p-4 mt-auto">
							   <a class="btn app-btn-secondary" href="#">More</a>
						    </div>
						</div>
				    </div>
			    </div>
			    <div class="row g-4 mb-4">
			        <div class="col-12 col-lg-6">
				        <div class="app-card app-card-chart h-100 shadow-sm"> 
					        <div class="app-card-body p-3 p-lg-4"> 
						        <div class="chart-container">
				                    <canvas id="canvas-barchart2" ></canvas>
						        </div>
					        </div>
				        </div>
			        </div>
			        <div class="col-12 col-lg-6">
				        <div class="app-card app-card-chart h-100 shadow-sm"> 
					        <div class="app-card-body p-3 p-lg-4"> 
						        <div class="chart-container">
				                    <canvas id="canvas-barchart" ></canvas>
						        </div>
					        </div>
				        </div>
			        </div>
			    </div>
		    </div>
	    </div>
	    
	    <SFooterbar/>
    </div>
	)}
    </div>
  );
}

export default Resources; 
