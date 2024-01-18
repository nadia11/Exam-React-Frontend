import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Header() {
  const rolename = capitalizeFirstLetter(localStorage.getItem("role"));
  const first_name = localStorage.getItem("first_name");
  const last_name = localStorage.getItem("last_name");
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);

  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    // Check conditions to determine if the user is logged in
    if (rolename && first_name && last_name) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [rolename, first_name, last_name]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
       <header class="app-header fixed-top">	   	            
        <div class="app-header-inner">  
	        <div class="container-fluid py-2">
		        <div class="app-header-content"> 
		            <div class="row justify-content-between align-items-center">
			        
				    <div class="col-auto">
					    <a id="sidepanel-toggler" class="sidepanel-toggler d-inline-block d-xl-none" href="#">
						    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img"><title>Menu</title><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path></svg>
					    </a>
				    </div>
		            
		            <div class="app-utilities col-auto">
			            <div class="app-utility-item app-user-dropdown dropdown">
				            <a class="dropdown-toggle" id="user-dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><img src="assets/images/user.png" alt="user profile"/></a>
				            <ul class="dropdown-menu" aria-labelledby="user-dropdown-toggle">
								<li><a class="dropdown-item" href="/account">Account</a></li>
								<li><a class="dropdown-item" href="/">Log Out</a></li>
							</ul>
			            </div>
		            </div>
		        </div>
	            </div>
	        </div>
        </div>
		{rolename=='Parent' && (
			<div id="app-sidepanel" class="app-sidepanel"> 
	        <div id="sidepanel-drop" class="sidepanel-drop"></div>
	        <div class="sidepanel-inner d-flex flex-column">
		        <a href="#" id="sidepanel-close" class="sidepanel-close d-xl-none">&times;</a>
		        <div class="app-branding">
		            <a class="app-logo">
                        <img class="logo-icon" src="https://o6ode1.a2cdn1.secureserver.net/wp-content/uploads/2020/05/logo.png?time=1701837607" alt="logo"/>
                    </a>
	
		        </div>
		        
			    <nav id="app-nav-main" class="app-nav app-nav-main flex-grow-1">
				    <ul class="app-menu list-unstyled accordion" id="menu-accordion">
					    <li class="nav-item">
					        
					        <a class="nav-link active" href="/resources">
						        <span class="nav-icon">
									<i width="1em" height="1em" class="fa fa-home"></i>
						         </span>
		                         <span class="nav-link-text">Dashboard</span>
					        </a>
					    </li>
					    <li class="nav-item">
					        
					        <a class="nav-link" href="#">
						         <span class="nav-icon">
									<i width="1em" height="1em" class="fas fa-file-invoice"></i>
								</span>
		                         <span class="nav-link-text">Billing</span>
					        </a>
					    </li>
					    <li class="nav-item">
					        
					        <a class="nav-link" href="/progress_reports">
						        <span class="nav-icon">
									<i width="1em" height="1em" class="fa-solid fa-graduation-cap"></i>
						         </span>
		                         <span class="nav-link-text">Progress Reports</span>
					        </a>
					    </li>
					    <li class="nav-item">					        
					        <a class="nav-link submenu-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#submenu-1" aria-expanded="false" aria-controls="submenu-1">
						        <span class="nav-icon">
						        
						        	<i width="1em" height="1em" class="fa fa-home"></i>
						         </span>
		                         <span class="nav-link-text">Video Library</span>
					        </a>
					    </li>
					    <li class="nav-item">					        
					        <a class="nav-link submenu-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#submenu-1" aria-expanded="false" aria-controls="submenu-1">
						        <span class="nav-icon">
						        
						        	<i width="1em" height="1em" class="fa fa-home"></i>
						         </span>
		                         <span class="nav-link-text">Reports</span>
					        </a>
					    </li>		    
				    </ul>
			    </nav>
			    <div class="app-sidepanel-footer">
				    <nav class="app-nav app-nav-footer">
					    <ul class="app-menu footer-menu list-unstyled">
						    <li class="nav-item">
						        <a class="nav-link" href="settings.html">
							        <span class="nav-icon">
							            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-gear" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
	  <path fill-rule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"/>
	  <path fill-rule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"/>
	</svg>
							        </span>
			                        <span class="nav-link-text">Logout</span>
						        </a>
						    </li>
					    </ul>
				    </nav>
			    </div>
		       
	        </div>
	    </div>
		)}
		{rolename=='Student' && (
        <div id="app-sidepanel" class="app-sidepanel"> 
	        <div id="sidepanel-drop" class="sidepanel-drop"></div>
	        <div class="sidepanel-inner d-flex flex-column">
		        <a href="#" id="sidepanel-close" class="sidepanel-close d-xl-none">&times;</a>
		        <div class="app-branding">
		            <a class="app-logo">
                        <img class="logo-icon" src="https://o6ode1.a2cdn1.secureserver.net/wp-content/uploads/2020/05/logo.png?time=1701837607" alt="logo"/>
                    </a>
	
		        </div>
		        
			    <nav id="app-nav-main" class="app-nav app-nav-main flex-grow-1">
				    <ul class="app-menu list-unstyled accordion" id="menu-accordion">
					    <li class="nav-item">
					        
					        <a class="nav-link active" href="index.html">
						        <span class="nav-icon">
									<i width="1em" height="1em" class="fa fa-home"></i>
						         </span>
		                         <span class="nav-link-text">Dashboard</span>
					        </a>
					    </li>
					    <li class="nav-item">
					        
					        <a class="nav-link" href="docs.html">
						         <span class="nav-icon">
									<i width="1em" height="1em" class="fas fa-tasks"></i>
								</span>
		                         <span class="nav-link-text">Home Works</span>
					        </a>
					    </li>
					    <li class="nav-item">
					        
					        <a class="nav-link" href="/practice_tests">
						        <span class="nav-icon">
									<i width="1em" height="1em" class="fa-solid fa-graduation-cap"></i>
						         </span>
		                         <span class="nav-link-text">Practice Test</span>
					        </a>
					    </li>
					    <li class="nav-item">
					        
					        <a class="nav-link" href="orders.html">
						        <span class="nav-icon">
									<i width="1em" height="1em" class="fa-solid fa-bars-progress"></i>
						         </span>
		                         <span class="nav-link-text">Progress Report</span>
					        </a>
					    </li>
					    <li class="nav-item">
					        
					        <a class="nav-link submenu-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#submenu-1" aria-expanded="false" aria-controls="submenu-1">
						        <span class="nav-icon">
						        
						        	<i width="1em" height="1em" class="fa fa-home"></i>
						         </span>
		                         <span class="nav-link-text">Learning Module</span>
					        </a>
					    </li>
					    <li class="nav-item">
					        <a class="nav-link submenu-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#submenu-2" aria-expanded="false" aria-controls="submenu-2">
						        <span class="nav-icon">
						       	 <i width="1em" height="1em" class="fa fa-question"></i>
						         </span>
		                         <span class="nav-link-text">Question Bank</span>
					        </a>
					    </li>

					   
					    <li class="nav-item">
					        <a class="nav-link" href="#">
						        <span class="nav-icon">
								 	  <i class="fas fa-calendar"></i>
								</span>
		                         <span class="nav-link-text">Calendar</span>
					        </a>
					    </li>
					    
					    <li class="nav-item">
					        <a class="nav-link" href="help.html">
						        <span class="nav-icon">
						        	 <i class="fas fa-times"></i>
						         </span>
		                         <span class="nav-link-text">Attendance</span>
					        </a>
					    </li>				    
				    </ul>
			    </nav>
			    <div class="app-sidepanel-footer">
				    <nav class="app-nav app-nav-footer">
					    <ul class="app-menu footer-menu list-unstyled">
						    <li class="nav-item">
						        <a class="nav-link" href="settings.html">
							        <span class="nav-icon">
							            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-gear" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
	  <path fill-rule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z"/>
	  <path fill-rule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z"/>
	</svg>
							        </span>
			                        <span class="nav-link-text">Logout</span>
						        </a>
						    </li>
					    </ul>
				    </nav>
			    </div>
		       
	        </div>
	    </div>
		)}
      </header>
    </>
  );
}

export default Header;

