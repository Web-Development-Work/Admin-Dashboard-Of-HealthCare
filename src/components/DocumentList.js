import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';

const DocumentList = () => {
    return (
        <main className="body-content">
             <Sidebar/>
            <div className="ms-content-wrapper">
            <div className="row">
                <div className="col-md-12">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb pl-0">
                            <li className="breadcrumb-item">
                                <Link to="#"><i className="material-icons">home</i> Home</Link>
                            </li>
                            <li className="breadcrumb-item active">Document List</li>
                        </ol>
                    </nav>
                    <div className="ms-panel">
                        <div className="ms-panel-header ms-panel-custome">
                            <h6>Document List</h6><Link className="ms-text-primary" to="/adddocument">Add Document</Link>
                        </div>
                        <div className="ms-panel-body">
                            <div className="table-responsive">
                                <table className="table table-striped thead-primary w-100" id="data-table-2">
                                 <thead>
                 <tr>
                 <th>SL.NO</th>
                <th>Patient ID</th>
                <th>Doctor Name</th>
                <th>Description</th>
                <th>Date</th>
                <th>Upload By</th>
                <th>Action</th>
                </tr>
        </thead>
                                   <tbody>
  <tr>
                                    <td>1</td>
                                    <td>P9XA38LW</td>
                                    <td>Hadad Atif  Nahas</td>
                                    <td>This is demo test</td>
                                    <td>2017-12-19</td> 
                                    <td></td> 
                                    <td className="center" width="80">
                                        <Link to="#"><i className="fa fa-pencil ms-text-primary"></i></Link> <Link to="#"><i className="fa fa-trash ms-text-danger"></i></Link>
                                    </td>
                                </tr><tr>
                                    <td>2</td>
                                    <td>P3LFN0JJ</td>
                                    <td></td>
                                    <td>This is demo test</td>
                                    <td>2017-12-19</td> 
                                    <td></td> 
                                    <td className="center" width="80">
                                        <Link to="#"><i className="fa fa-pencil ms-text-primary"></i></Link> <Link to="#"><i className="fa fa-trash ms-text-danger"></i></Link>
                                    </td>
                                </tr><tr>
                                    <td>3</td>
                                    <td>P3LFN0JJ</td>
                                    <td>Dr  Aikenhead</td>
                                    <td>This is text</td>
                                    <td>2017-12-19</td> 
                                    <td></td> 
                                    <td className="center" width="80">
                                        <Link to="#"><i className="fa fa-pencil ms-text-primary"></i></Link> <Link to="#"><i className="fa fa-trash ms-text-danger"></i></Link>
                                    </td>
                                </tr><tr>
                                    <td>4</td>
                                    <td>P1XWEV6W</td>
                                    <td></td>
                                    <td></td>
                                    <td>2020-03-23</td> 
                                    <td>Self</td> 
                                    <td className="center" width="80">
                                        <Link to="#"><i className="fa fa-pencil ms-text-primary"></i></Link> <Link to="#"><i className="fa fa-trash ms-text-danger"></i></Link>
                                    </td>
                                </tr><tr>
                                    <td>5</td>
                                    <td>P0SFFEA5</td>
                                    <td></td>
                                    <td>hhhhhhhhheeeeeeeeeee</td>
                                    <td>2020-03-26</td> 
                                    <td></td> 
                                    <td className="center" width="80">
                                       <Link to="#"><i className="fa fa-pencil ms-text-primary"></i></Link> <Link to="#"><i className="fa fa-trash ms-text-danger"></i></Link>
                                    </td>
                                </tr><tr>
                                    <td>6</td>
                                    <td>PLGBQOV2</td>
                                    <td>Dr  Truluck</td>
                                    <td>testing</td>
                                    <td>2020-04-06</td> 
                                    <td>Self</td> 
                                    <td className="center" width="80">
                                       <Link to="#"><i className="fa fa-pencil ms-text-primary"></i></Link> <Link to="#"><i className="fa fa-trash ms-text-danger"></i></Link>
                                    </td>
                                </tr><tr>
                                    <td>7</td>
                                    <td>P0SFFEA5</td>
                                    <td></td>
                                    <td>sending some documents</td>
                                    <td>2020-04-10</td> 
                                    <td></td> 
                                    <td className="center" width="80">
                                       <Link to="#"><i className="fa fa-pencil ms-text-primary"></i></Link> <Link to="#"><i className="fa fa-trash ms-text-danger"></i></Link>
                                    </td>
                                </tr><tr>
                                    <td>8</td>
                                    <td>PU7ZX7KO</td>
                                    <td></td>
                                    <td>&nbsp;abc</td>
                                    <td>2020-04-11</td> 
                                    <td></td> 
                                    <td className="center" width="80">
                                       <Link to="#"><i className="fa fa-pencil ms-text-primary"></i></Link> <Link to="#"><i className="fa fa-trash ms-text-danger"></i></Link>
                                    </td>
                                </tr><tr>
                                    <td>9</td>
                                    <td>megha</td>
                                    <td></td>
                                    <td>n mnm nm m,</td>
                                    <td>2020-04-14</td> 
                                    <td></td> 
                                    <td className="center" width="80">
                                        <Link to="#"><i className="fa fa-pencil ms-text-primary"></i></Link> <Link to="#"><i className="fa fa-trash ms-text-danger"></i></Link>
                                    </td>
                                </tr><tr>
                                    <td>10</td>
                                    <td>P5PKEAMN</td>
                                    <td></td>
                                    <td></td>
                                    <td>2020-04-17</td> 
                                    <td></td> 
                                    <td className="center" width="80">
                                        <Link to="#"><i className="fa fa-pencil ms-text-primary"></i></Link> <Link to="#"><i className="fa fa-trash ms-text-danger"></i></Link> 
                                    </td>
                                </tr></tbody>
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

export default DocumentList
