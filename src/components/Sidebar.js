import React from 'react'
import {Link} from 'react-router-dom';
import $ from "jquery"
const Sidebar = () => {

      window.onload=function(){
         $( ".ms-nav-toggler" ).on( "click", function() {
           $( "#ms-nav-options" ).toggleClass( "ms-slide-down", 1000 );
         });
         $( ".ms-aside-toggler" ).on( "click", function() {
           // $( "#ms-side-nav" ).toggleClass( "ms-aside-open", 1000 );
           $( "#ms-side-nav" ).toggleClass( "ms-aside-open", 1000 );
           $( "body" ).toggleClass( "ms-aside-left-open");
           $( ".ms-overlay-left" ).toggleClass( "d-block");
         });
      }

    return (
      <>
      <aside id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside-left ps--active-y">
     
    <div className="logo-sn ms-d-block-lg">
      <Link className="pl-0 ml-0 text-center" to="/"> 
          <img src="/assets/img/logo.png" alt="logo"/> 
      </Link>
      <Link to="#" className="text-center ms-logo-img-link">
        <img src="/assets/img/doctor-3.jpg" alt="logo"/>
      </Link>
     
      <h6 className="text-center mb-3">Admin</h6>
    </div>
     
    <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">
       
     
      <li className="menu-item">
        <Link to="/">
          <span><i className="material-icons fs-16">dashboard</i>Dashboard</span>
        </Link>
      </li>

      <li className="menu-item">
        <Link to="/#" className="has-chevron" data-toggle="collapse" data-target="#patient" aria-expanded="false" aria-controls="patient">
          <span><i className="fa fa-user"></i>Service Users</span>
        </Link>
        <ul id="patient" className="collapse" aria-labelledby="patient" data-parent="#side-nav-accordion">
          <li> <Link to="/adduser">Add Service Users</Link> </li>
          <li> <Link to="/userlist">Service Users</Link> </li>
           <li><Link to="/adddocument">Add Document</Link> </li>
          <li> <Link to="/documentlist">Document List</Link> </li>
        </ul>
      </li>
       
       <li className="menu-item">
        <Link to="#">
          <span><i className="fa fa-list"></i>Policies and Procedures</span>
        </Link>
      </li>

      <li className="menu-item">
        <a href="#">
          <span><i className="fa fa-list"></i>Admin and General</span>
        </a>
      </li>

      <li className="menu-item">
        <a href="#">
          <span><i className="fa fa-calendar"></i>Calendar</span>
        </a>
      </li>

      <li className="menu-item">
        <a href="#">
          <span><i className="fa fa-arrow-up"></i>Follow Up</span>
        </a>
      </li>

      <li className="menu-item">
        <a href="#">
          <span><i className="fa fa-list"></i>Handover</span>
        </a>
      </li>

      <li className="menu-item">
        <a href="#">
          <span><i className="fa fa-star"></i>Monthly Review</span>
        </a>
      </li>


      <li className="menu-item">
        <a href="#">
          <span><i className="fa fa-tasks"></i> Reception Management </span>
        </a>
      </li>


       <li className="menu-item">
        <Link to="#">
          <span><i className="fa fa-list"></i>Messages</span>
        </Link>
      </li>
     
        <li className="menu-item">
                    <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#schedule" aria-expanded="false" aria-controls="schedule">
                    <span><i className="fa fa-list-alt"></i>HR</span>
                    </Link>
                     <ul id="schedule" className="collapse" aria-labelledby="schedule" data-parent="#side-nav-accordion" Style="">
                        <li> <Link to="#">Add Schedule</Link> </li>
                        <li> <Link to="#">Schedule List</Link> </li>
                    </ul>
       </li>

       <li className="menu-item">
        <Link to="#">
          <span><i className="fa fa-list"></i>Staff roaster</span>
        </Link>
      </li>
       
       {/* <li className="menu-item">
                    <a href="#" className="has-chevron active collapsed" data-toggle="collapse" data-target="#schedule" aria-expanded="false" aria-controls="schedule">
                    <span><i className="fa fa-list-alt"></i>Schedule</span>
                    </a>
                    <ul id="schedule" className="collapse" aria-labelledby="schedule" data-parent="#side-nav-accordion" Style="">
                        <li> <a href="add-schedule.php">Add Schedule</a> </li>
                        <li> <a href="schedule-list.php">Schedule List</a> </li>
                    </ul>
       </li> */}


         <li className="menu-item">
        <Link to="/logs">
          <span><i className="fa fa-list"></i>Logs</span>
        </Link>
      </li>
      
     <li className="menu-item">
        <Link to="/todolist">
          <span><i className="fa fa-list"></i>Add To Do's</span>
        </Link>
    </li>
    
     
     <li className="menu-item">
                    <Link to="#" className="has-chevron" data-toggle="collapse" data-target="#payment" aria-expanded="false" aria-controls="payment">
                    <span><i className="fa fa-credit-card"></i>Payment</span>
                    </Link>
                    <ul id="payment" className="collapse" aria-labelledby="payment" data-parent="#side-nav-accordion">
                        <li> <Link to="#">Add Payment</Link> </li>
                        <li> <Link to="#">Payment List</Link> </li>
                        <li> <Link to="#">Payment Invoice</Link> </li>
                      </ul>
            </li>
                
      
    
    <li className="menu-item">
        <Link to="#">
          <span><i className="fa fa-list"></i>Key Contacts</span>
        </Link>
    </li>


     <li className="menu-item">
        <Link to="#">
          <span><i className="fa fa-list"></i>Support</span>
        </Link>
    </li>

   <li className="menu-item">
        <Link to="/login">
          <span><i className="fa fa-power-off"></i>Logout</span>
        </Link>
    </li>


    </ul>

    <div class="ps__rail-x" Style="left: 0px; bottom: 0px;">
      <div class="ps__thumb-x" tabindex="0" Style="left: 0px; width: 0px;">
      </div>
    </div>

    <div class="ps__rail-y" Style="top: 0px; height: 625px; right: 0px;">
      <div class="ps__thumb-y" tabindex="0" Style="top: 0px; height: 300px;">
      </div>
    </div>
    
      </aside> 

      <nav className="navbar ms-navbar">
      <div className="ms-aside-toggler ms-toggler pl-0" data-target="#ms-side-nav" data-toggle="slideLeft">
        <span className="ms-toggler-bar bg-white"></span>
        <span className="ms-toggler-bar bg-white"></span>
        <span className="ms-toggler-bar bg-white"></span>
      </div>
      
      <div className="logo-sn logo-sm ms-d-block-sm">
        <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="/"><img src="/assets/img/logo.png" alt="logo"/> </Link>
      </div>
     
      <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">

        <li className="ms-nav-item  ms-d-none">
             <span id="ct" Style="color: #7d7d7d;font-size: 16px;font-weight: 600;padding-right:13rem">Friday,31th December 2021,7:11:14 PM</span>
        </li>


        <li class="ms-nav-item dropdown">
          <a href="#" class="text-disabled ms-has-notification" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-envelope" Style="font-size: 20px;"></i></a>
          <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="notificationDropdown">
            <li class="dropdown-menu-header">
              <h6 class="dropdown-header ms-inline m-0"><span class="text-disabled">You have 3 New Email</span></h6>
             
            </li>
            <li class="dropdown-divider"></li>
            <li class="ms-scrollable ms-dropdown-list ps">
              <a class="media p-2" href="#">
                <div class="media-body">
                  <span><strong>New User</strong></span>
                  <p>I feel great thank Team!</p>
                  <p class="fs-10 my-1 text-disabled"><i class="material-icons">access_time</i> Now </p>
                </div>
              </a>
              <a class="media p-2" href="#">
                <div class="media-body">
                  <span><strong>You have newly registered users</strong></span>
                  <p class="fs-10 my-1 text-disabled"><i class="material-icons">access_time</i> 45 minutes ago</p>
                </div>
              </a>
              <a class="media p-2" href="#">
                <div class="media-body">
                  <span><strong>Your account was logged in from an unauthorized IP</strong></span>
                   <p class="fs-10 my-1 text-disabled"><i class="material-icons">access_time</i> 1 day ago</p>
                </div>
              </a>
              

            <div class="ps__rail-x" Style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" Style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" Style="top: 0px; right: 0px;"><div class="ps__thumb-y" tabindex="0" Style="top: 0px; height: 0px;"></div></div></li>
            <li class="dropdown-divider"></li>
            <li class="dropdown-menu-footer text-center">
              <a href="#">View all Email</a>
            </li>
          </ul>
        </li>



        <li className="ms-nav-item dropdown">
          <a href="#" className="text-disabled ms-has-notification" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fa fa-bell"></i></a>
          <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="notificationDropdown">
            <li className="dropdown-menu-header">
              <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Notifications</span></h6>
              <span className="badge badge-pill badge-info">4 New</span>
            </li>
            <li className="dropdown-divider"></li>
            <li className="ms-scrollable ms-dropdown-list ps">
              <a className="media p-2" href="#">
                <div className="media-body">
                  <span>12 ways to improve your crypto dashboard</span>
                  <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 30 seconds ago</p>
                </div>
              </a>
              <a className="media p-2" href="#">
                <div className="media-body">
                  <span>You have newly registered users</span>
                  <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 45 minutes ago</p>
                </div>
              </a>
              <a className="media p-2" href="#">
                <div className="media-body">
                  <span>Your account was logged in from an unauthorized IP</span>
                  <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 2 hours ago</p>
                </div>
              </a>
              <a className="media p-2" href="#">
                <div className="media-body">
                  <span>An application form has been submitted</span>
                  <p className="fs-10 my-1 text-disabled"><i className="material-icons">access_time</i> 1 day ago</p>
                </div>
              </a>
            <div className="ps__rail-x" Style="left: 0px; bottom: 0px;"><div className="ps__thumb-x" tabindex="0" Style="left: 0px; width: 0px;"></div></div><div className="ps__rail-y" Style="top: 0px; right: 0px;"><div className="ps__thumb-y" tabindex="0" Style="top: 0px; height: 0px;"></div></div></li>
            <li className="dropdown-divider"></li>
            <li className="dropdown-menu-footer text-center">
              <a href="#">View all Notifications</a>
            </li>
          </ul>
        </li>
        <li className="ms-nav-item ms-nav-user dropdown">
          <Link to="#" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img className="ms-user-img ms-img-round float-right" src="/assets/img/doctor-3.jpg" alt="people"/> </Link>
          <ul className="dropdown-menu dropdown-menu-right user-dropdown" aria-labelledby="userDropdown">
            <li className="dropdown-menu-header">
              <h6 className="dropdown-header ms-inline m-0"><span className="text-disabled">Welcome, Admin</span></h6>
            </li>
            <li className="dropdown-divider"></li>
            <li className="ms-dropdown-list">
              <Link className="media fs-14 p-2" to="#"> <span>
                <i className="fa fa-user mr-2"></i> Profile</span> </Link>
             
            </li>
           
            
            <li className="dropdown-menu-footer">
              <Link to="/login" className="media fs-14 p-2" > <span>
                <i className="fa fa-power-off mr-2"></i> Logout</span> </Link>
            </li>
          </ul>
        </li>
      </ul>
      
      
      <div className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler" data-toggle="slideDown" data-target="#ms-nav-options">
        <span className="ms-toggler-bar bg-white"></span>
        <span className="ms-toggler-bar bg-white"></span>
        <span className="ms-toggler-bar bg-white"></span>
      </div>

      </nav>

      </>

    )
}

export default Sidebar
