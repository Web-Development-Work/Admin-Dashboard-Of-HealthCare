import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';


const TodoList = () => {
    return (
        <main className="body-content">
         <Sidebar/>
        <div className="ms-content-wrapper">
            <div className="row">
               <div className="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol className="breadcrumb pl-0">
                        <li className="breadcrumb-item"><a href="#"><i className="material-icons">home</i> Home</a></li>
                       
                        <li className="breadcrumb-item active" aria-current="page">To-do List</li>
                     </ol>
                  </nav>
                  <div className="ms-panel">
                     <div className="ms-panel-header ms-panel-custome">
                        <h6>To-do List</h6>
                        <Link to="#" className="ms-text-primary">Add To-do</Link>
                     </div>
                     <div className="ms-panel-body">
                        <div className="table-responsive">
                           <div className="table-responsive">
                           <table id="data-table-2" className="table table-striped thead-primary w-100">
                            <thead>
                                <tr><th>Title</th>
                                <th>Type</th>
                               
                                <th>Doctor/Carers</th>
                                <th>Start Date</th>
                                <th>How Often</th>
                                <th>Action</th>
                            </tr></thead>  

                            <tbody>
                              <tr>
                                
                                <td><strong>Body mapo for ted</strong><br/>
                                mark mody maps check for bruises or any cuts as he is being discharged from the hospital</td>
                                <td>Home</td>
                                <td>Justin Parker</td>
                                <td>03-12-2021 19:05</td>
                                <td>Daily</td>
                                <td> <a href="#"><i className="fa fa-pencil ms-text-primary"></i></a> <a href="#"><i className="fa fa-trash ms-text-danger"></i></a></td>
                              </tr>
                               <tr>
                                
                                <td><strong>Body mapo for ted</strong><br/>
                                mark mody maps check for bruises or any cuts as he is being discharged from the hospital</td>
                                <td>Home</td>
                                <td>Justin Parker</td>
                                <td>03-12-2021 19:05</td>
                                <td>Daily</td>
                                <td> <a href="#"><i className="fa fa-pencil ms-text-primary"></i></a> <a href="#"><i className="fa fa-trash ms-text-danger"></i></a></td>
                              </tr>
                              <tr>
                                
                                <td><strong>Body mapo for Lol</strong><br/>
                                mark mody maps check for bruises or any cuts as he is being discharged from the hospital</td>
                                <td>Home</td>
                                <td>Justin Parker</td>
                                <td>03-12-2021 19:05</td>
                                <td>Once</td>
                                <td> <a href="#"><i className="fa fa-pencil ms-text-primary"></i></a> <a href="#"><i className="fa fa-trash ms-text-danger"></i></a></td>
                              </tr>
                               <tr>
                                
                                <td><strong>Body mapo for ted</strong><br/>
                                mark mody maps check for bruises or any cuts as he is being discharged from the hospital</td>
                                <td>Home</td>
                                <td>Justin Parker</td>
                                <td>03-12-2021 19:05</td>
                                <td>Daily</td>
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
         </div>
         </main>
         
    )
}

export default TodoList
