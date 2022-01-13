import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';

const LogList = () => {
    return (
        <main className="body-content">
            <Sidebar/>
        <div className="ms-content-wrapper">
            <div className="row">
               <div className="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol className="breadcrumb pl-0">
                        <li className="breadcrumb-item"><Link to="#"><i className="material-icons">home</i> Home</Link></li>
                       
                        <li className="breadcrumb-item active" aria-current="page">Log List</li>
                     </ol>
                  </nav>
                  <div className="ms-panel">
                     <div className="ms-panel-header ms-panel-custome">
                        <h6>Log List</h6>
                        <Link to="#" className="ms-text-primary">Add Logs</Link>
                     </div>
                     <div className="ms-panel-body">
                        <div className="table-responsive">
                           <table id="data-table-2" className="table table-striped thead-primary w-100">
                            <thead>
                                <tr><th>Time Logged</th>
                                <th>Service User</th>
                               
                                <th>Log</th>
                                <th>Doctor</th>
                                <th>Action</th>
                            </tr></thead>  

                            <tbody>
                              <tr>
                                <td>03-12-2021 19:05</td>
                                <td>Micjegl Lol</td>
                                <td><strong>Pudding</strong></td>
                                <td>Justin Parker</td>
                                <td> <a href="#"><i className="fa fa-pencil ms-text-primary"></i></a> <a href="#"><i className="fa fa-trash ms-text-danger"></i></a></td>
                              </tr>
                               <tr>
                                <td>06-12-2021 19:05</td>
                                <td>Micjegl Lol</td>
                                <td><strong>Meal - Breakfast 0%</strong><br/>
                                Micjegl had a medium-sized pudding</td>
                                <td>Justin Parker</td>
                                <td> <a href="#"><i className="fa fa-pencil ms-text-primary"></i></a> <a href="#"><i className="fa fa-trash ms-text-danger"></i></a></td>
                              </tr>
                               <tr>
                                <td>06-12-2021 19:05</td>
                                <td>Jihn Smith</td>
                                <td><strong>Sleep Check: awake</strong><br/>
                                Jihn was awake when checked</td>
                                <td>Justin Parker</td>
                                <td> <a href="#"><i className="fa fa-pencil ms-text-primary"></i></a> <a href="#"><i className="fa fa-trash ms-text-danger"></i></a></td>
                              </tr>
                               <tr>
                                <td>06-12-2021 20:05</td>
                                <td>asdsa sdfsdfsD</td>
                                <td><strong>Pad check</strong><br/>
                                asdsa's pad was wet when checked (about 100% wet). His pad was not changed. Refused </td>
                                <td>Justin Parker</td>
                                <td> <a href="#"><i className="fa fa-pencil ms-text-primary"></i></a> <a href="#"><i className="fa fa-trash ms-text-danger"></i></a></td>
                              </tr>
                            </tbody> 
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         </main>
    )
}

export default LogList
