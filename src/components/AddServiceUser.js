import React from 'react'
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';

const AddServiceUser = () => {
    return (
        <main className="body-content">
           <Sidebar/>
            <div className="ms-content-wrapper">
            <div className="row">


               <div className="col-md-12">
                  <nav aria-label="breadcrumb">
                     <ol className="breadcrumb pl-0">
                        <li className="breadcrumb-item"><Link to="#"><i className="material-icons">home</i> Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Add Service User</li>
                     </ol>
                  </nav>
               </div>



               <div class="col-md-12" Style="margin-bottom:10px;">
                  <div class="ms-panel">
     
                    <div class="ms-panel-body" Style="padding: 0px;">
                        <div class="profile_menu">
                            <span class="menu"></span>
                            <div class="top-menu top-menu1"><ul>
                                    <li id="l1" class="active"><Link to="https://lamavie.ml/wisterias/pages/all/service-user-detail.html" class="active">Profile </Link></li>
                                    <li id="l2"><Link to="#">Medical</Link></li>
                                    
                                    <li id="l3"><Link to="#">Transfer</Link></li>
                                    <li id="l4"><Link to="#">Diary</Link></li>
                                    <li id="l5"><Link to="#">Assessments</Link></li>
                                    <li id="l6"><Link to="#">Wounds</Link></li>
                                    <li id="l14"><Link to="#">Infection</Link></li>
                                    <li id="l7"><Link to="#">Careplan</Link></li>
                                    <li id="l8"><Link to="#">Risk</Link></li>
                                   
                                    
                                    <li id="l10"><Link to="javascript:void(0)">Accident &amp; Incident</Link></li>
                                    <li id="l13"><Link to="javascript:void(0)">Vitals </Link></li>
                                    <li id="l12"><Link to="javascript:void(0)">Contacts</Link></li>
                                    <li id="l11"><Link to="javascript:void(0)">Summary </Link></li>
                                    
                                </ul></div>

                            
                        </div>
                        </div>
                        </div>
                        <div class="clearfix"></div>
               </div>


               <div class="col-md-12">
                 <div class="ms-panel">
                     <div class="ms-panel-body" Style="padding: 0px;">
                     <div class="section_box1_content2">
                            <div class="row">
                                <div class="col-sm-12" Style="padding-left: 30px;">
                                    <div class="tab_menus" Style="float:left;">
                                        <ul>
                                            <li class="active"><Link to="/userdetails" class="active">Service User</Link></li>
                                            <li><Link to="#">Daily Logs</Link></li>
                                            <li><Link to="/userchart">Charts</Link></li>
                                            <li><Link to="#">Documents</Link></li>
                                            <li><Link to="#">Support Plan</Link></li>
                                            <li><Link to="#">Medication</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                         <div class="clearfix"></div>
               </div>



               <div className="col-xl-12 col-md-12">
                  <div className="ms-panel">
                     {/* <div className="ms-panel-header ms-panel-custome">
                        <h6>Add Service User</h6>
                        <Link to="/userlist" className="ms-text-primary">Service Users List
                        </Link>
                     </div> */}
                     <div class="ms-panel-body">
                        <form class="needs-validation" novalidate="">
                             <div class="form-row justify-content-center">
                                 
                             <div class="col-md-5 mb-3 text-center">
                                 <label>Upload Photo</label>
                                 <div class="custom-file">
                                  <label Style="cursor:pointer;">
                                  <center><img id="blah" alt="your image" src="https://dreamteamtalk.com/wp-content/uploads/2020/06/male-profile-blank.jpg" Style="    border: 2px solid #651f70; height:150px; width:150px; border-radius: 10px;"/></center><br/><br/>

                             <input type="file" class="form-control" onchange="document.getElementById('blah').src = window.URL.createObjectURL(this.files[0])" Style="display:none;"/>
                             </label> 
                                 </div>
                              </div>
                              </div>
                       <div role="form">
                                        <div class="row">
                                            <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Title <span class="man_fields1">*</span></label>
                                                    <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlTtl">
                                                        <option value="">Title</option>
                                                        <option value="Mr">Mr</option>
                                                        <option value="Mrs">Mrs</option>
                                                        <option value="Ms">Ms</option>
                                                    </select></span>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">First Name <span class="man_fields1">*</span></label>
                                                    <input type="text" class="form-control" id="txtfname" placeholder="First Name " maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Last Name <span class="man_fields1">*</span></label>
                                                    <input type="text" class="form-control" id="txtlanme" placeholder="Last Name " maxlength="50"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Gender <span class="man_fields1">*</span></label>
                                                    <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlGndr">
                                                        <option value="">Gender</option>
                                                        <option value="M">Male</option>
                                                        <option value="F">Female</option>
                                                    </select></span>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">ForeName1</label>
                                                    <input type="text" class="form-control" id="txtfore1" placeholder="ForeName1" maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4 col-lg-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">ForeName2</label>
                                                    <input type="text" class="form-control" id="txtfore2" placeholder="ForeName2 " maxlength="50"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Nickname</label>
                                                    <input type="text" class="form-control" id="txtnick" placeholder="Nickname" maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Marital Status</label>
                                                    <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlMerital">
                                                        <option value="S">Single</option>
                                                        <option value="M">Married</option>
                                                        <option value="W">Widowed</option>
                                                        <option value="P">Separated</option>
                                                        <option value="D">Divorced</option>
                                                    </select></span>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Last Occupation</label>
                                                    <input type="text" class="form-control" id="txtoccu" placeholder="Last Occupation" maxlength="50"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Address 1</label>
                                                    <input type="text" class="form-control" placeholder="Address 1" maxlength="150" id="txtaddr1"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Address 2</label>
                                                    <input type="text" class="form-control" placeholder="Address 2" maxlength="150" id="txtaddr2"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Address 3</label>
                                                    <input type="text" class="form-control" placeholder="Address 3" maxlength="150" id="txtaddr3"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Nationality</label>
                                                    <span class="select-wrapper"><select name="ctl00$cphContent$ddlCntry" id="ddlCntry" class="custom-select">
	                                                      <option value="0">Select Country</option>
	                                                      <option value="1">Ireland</option>
                                                </select></span>
                                                </div>
                                            </div>

                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Religion</label>
                                                    <input type="text" class="form-control" id="txtrelgn" placeholder="Religion" maxlength="50"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Ethinicity</label>
                                                    <input type="text" class="form-control" id="txtethn" placeholder="Ethinicity"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-sm-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Date of Birth <span class="man_fields1">*</span></label>
                                                    <input type="text" class="form-control text-wrapper select-calander" id="txtdob" placeholder="Date of Birth " onchange="CalculateAge()"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-2 ">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Age</label>
                                                    <input type="text" class="form-control" id="txtage" placeholder="Age"/>
                                                </div>
                                            </div>
                                            <div class="col-sm-3">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Resident Home ID</label>
                                                    <input type="text" class="form-control" id="txthmid" placeholder="Home ID "/>
                                                </div>
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Resident ID </label>
                                                    <input type="text" class="form-control" id="txtres" placeholder="Resident ID " readonly="true"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </form>
                     </div>
                  </div>
               </div>




               <div class="col-xl-3 col-md-3">
                  <div class="ms-panel">
                  <div class="ms-panel-header ms-panel-custome">
                        <h6 Style="font-size: 12px;">Personal Appearance</h6>
                       
                     </div>
                    <div class="ms-panel-body">
                         
                        <div class="form-group">
                                            <label for="exampleInputEmail1">Weight</label>
                                            <input type="number" class="form-control" id="txtweight" placeholder="Weight "/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Height</label>
                                            <input type="number" class="form-control" id="txtheight" placeholder="Height in cm"/>
                                        </div>
                                        <div class="form-group ">
                                            <label for="exampleInputEmail1">Eye Color</label>
                                            <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlEye">
                                                <option value="">Eye Color</option>
                                                <option value="A">Amber</option>
                                                <option value="B">Blue</option>
                                                <option value="W">Brown</option>
                                                <option value="G">Gray</option>
                                                <option value="N">Green</option>
                                                <option value="H">Hazel</option>
                                                <option value="R">Red &amp; Violet</option>
                                            </select></span>
                                        </div>
                                        <div class="form-group ">
                                            <label for="exampleInputEmail1">Build</label>
                                            <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlBuild">
                                                <option value="">Select Build</option>
                                                <option value="1">Ectomorph</option>
                                                <option value="2">Mesomorph</option>
                                                <option value="3">Endomorph</option>
                                            </select></span>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Hair Color</label>
                                            <input type="text" class="form-control" id="txthair" placeholder="Hair Color" maxlength="50"/>
                                        </div>
                                        <div class="form-group ">
                                            <label for="exampleInputEmail1">Glasswear</label>
                                            <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlGlass">
                                                <option value="">Glasswear</option>
                                                <option value="Y">Yes</option>
                                                <option value="N">No</option>
                                            </select></span>
                                        </div>
                                        <div class="form-group ">
                                            <label for="exampleInputEmail1">Hearing aid</label>
                                            <span class="select-wrapper"><select name="timepass" class="custom-select" id="ddlaid">
                                                <option value="">Hearing aid</option>
                                                <option value="Y">Yes</option>
                                                <option value="N">No</option>
                                            </select></span>
                                        </div>  
                        
                    </div>
                   </div>
               </div>







               <div class="col-xl-3 col-md-3">
                  <div class="ms-panel">
                  <div class="ms-panel-header ms-panel-custome">
                        <h6 Style="font-size: 12px;">Next of Kin Details</h6>
                       
                     </div>
                    <div class="ms-panel-body">
                         
                         <div role="form">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Name</label>
                                            <input type="text" class="form-control" id="txtkin" placeholder="Name" maxlength="50"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 1</label>
                                            <input type="text" class="form-control" id="txtkinaddr1" placeholder="Address 1" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 2</label>
                                            <input type="text" class="form-control" id="txtkinaddr2" placeholder="Address 2" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 3</label>
                                            <input type="text" class="form-control" id="txtkinaddr3" placeholder="Address 3" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Telephone</label>
                                            <input type="text" class="form-control" id="txtkinph" placeholder="Telephone"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Relationship</label>
                                            <input type="text" class="form-control" id="txtkinrel" placeholder="Relationship"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email</label>
                                            <input type="email" class="form-control" id="txtkinmail" placeholder="Email"/>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Best time to contact</label>
                                            <div class="clearfix"></div>
                                                {/* <div class="row">
                                                    <div class="col-xs-6 ">
                                                        <input type="checkbox" id="chksig2y" name="sig2night" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>
                                                       <div class="col-xs-6 ">
                                                        <input id="chksig2n" name="sig2night" value="N" type="checkbox"/><label for="checkbox1"><span></span>  No</label>
                                                    </div>
                                                </div> */}

                                        </div>
                                        <div class="form-group">
                                            <label for="checkbox1"><span><input id="chksig2emgerncy" name="sig2emergency" value="Y" type="checkbox"/></span> Anytime</label>
                                        </div>
                                        <div class="form-group">
                                          <label for="checkbox2"><span>  <input id="chksig2emgerncy1" name="sig2emergency" value="Y" type="checkbox"/></span> Weekdays Mornings afternoons evenings</label>
                                        </div>
                                        <div class="form-group">
                                          <label for="checkbox2"><span>  <input id="chksig2emgerncy2" name="sig2emergency" value="Y" type="checkbox"/></span> Weekends Mornings afternoons evenings</label>
                                        </div>
                                    </div>
                        
                    </div>
                   </div>
               </div>





               <div class="col-xl-3 col-md-3">
                  <div class="ms-panel">
                  <div class="ms-panel-header ms-panel-custome">
                        <h6 Style="font-size: 12px;">Significant Other 1</h6>
                       
                     </div>
                    <div class="ms-panel-body">
                            <div role="form">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Name</label>
                                            <input type="text" class="form-control" id="txtsig1" placeholder="Name" maxlength="50"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 1</label>
                                            <input type="text" class="form-control" id="txtsig1addr1" placeholder="Address 1" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 2</label>
                                            <input type="text" class="form-control" id="txtsig1addr2" placeholder="Address 2" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 3</label>
                                            <input type="text" class="form-control" id="txtsig1addr3" placeholder="Address 3" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Telephone</label>
                                            <input type="text" class="form-control" id="txtsig1ph" placeholder="Telephone"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Relationship</label>
                                            <input type="text" class="form-control" id="txtsig1rel" placeholder="Relationship"/>
                                        </div>
                                         <div class="form-group">
                                        <label for="exampleInputEmail1">Email</label>
                                        <input type="email" class="form-control" id="txtsig1mail" placeholder="Email"/>
                                    </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Best time to contact</label>
                                            <div class="clearfix"></div>
                                                {/* <div class="row">
                                                    <div class="col-xs-6 ">
                                                        <input type="checkbox" id="chksig2y" name="sig2night" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>
                                                       <div class="col-xs-6 ">
                                                        <input id="chksig2n" name="sig2night" value="N" type="checkbox"/><label for="checkbox1"><span></span>  No</label>
                                                    </div>
                                                </div> */}

                                        </div>
                                        <div class="form-group">
                                            <label for="checkbox1"><span><input id="chksig2emgerncy" name="sig2emergency" value="Y" type="checkbox"/></span> Anytime</label>
                                        </div>
                                        <div class="form-group">
                                          <label for="checkbox2"><span>  <input id="chksig2emgerncy1" name="sig2emergency" value="Y" type="checkbox"/></span> Weekdays Mornings afternoons evenings</label>
                                        </div>
                                        <div class="form-group">
                                          <label for="checkbox2"><span>  <input id="chksig2emgerncy2" name="sig2emergency" value="Y" type="checkbox"/></span> Weekends Mornings afternoons evenings</label>
                                        </div>
                                    </div>
                        
                    </div>
                   </div>
               </div>





               <div class="col-xl-3 col-md-3">
                  <div class="ms-panel">
                  <div class="ms-panel-header ms-panel-custome">
                        <h6 Style="font-size: 12px;">Significant Other 2</h6>
                       
                     </div>
                    <div class="ms-panel-body">
                         
                        <div role="form">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Name</label>
                                            <input type="text" class="form-control" id="txtsig2" placeholder="Name" maxlength="50"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 1</label>
                                            <input type="text" class="form-control" id="txtsig2addr1" placeholder="Address 1" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 2</label>
                                            <input type="text" class="form-control" id="txtsig2addr2" placeholder="Address 2" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Address 3</label>
                                            <input type="text" class="form-control" id="txtsig2addr3" placeholder="Address 3" maxlength="150"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Telephone</label>
                                            <input type="text" class="form-control" id="txtsig2ph" placeholder="Telephone"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Relationship</label>
                                            <input type="text" class="form-control" id="txtsig2rel" placeholder="Relationship"/>
                                        </div>
                                          <div class="form-group">
                                        <label for="exampleInputEmail1">Email</label>
                                        <input type="email" class="form-control" id="txtsig2mail" placeholder="Email"/>
                                    </div>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Best time to contact</label>
                                            <div class="clearfix"></div>
                                                {/* <div class="row">
                                                    <div class="col-xs-6 ">
                                                        <input type="checkbox" id="chksig2y" name="sig2night" value="Y"/><label for="checkbox1"><span></span> Yes</label>
                                                    </div>                                                        <div class="col-xs-6 ">
                                                        <input id="chksig2n" name="sig2night" value="N" type="checkbox"/><label for="checkbox1"><span></span>  No</label>
                                                    </div>
                                                </div> */}

                                        </div>
                                        <div class="form-group">
                                            <label for="checkbox1"><span><input id="chksig2emgerncy" name="sig2emergency" value="Y" type="checkbox"/></span> Anytime</label>
                                        </div>
                                        <div class="form-group">
                                          <label for="checkbox2"><span>  <input id="chksig2emgerncy1" name="sig2emergency" value="Y" type="checkbox"/></span> Weekdays Mornings afternoons evenings</label>
                                        </div>
                                        <div class="form-group">
                                          <label for="checkbox2"><span>  <input id="chksig2emgerncy2" name="sig2emergency" value="Y" type="checkbox"/></span> Weekends Mornings afternoons evenings</label>
                                        </div>
                                    
                                    </div>
                        
                    </div>
                   </div>
               </div>



               <div class="col-xl-12 col-md-12" >
                  <button class="btn btn-primary mt-4 d-inline w-20" type="submit">Create Profile</button>
                 </div>





            </div>
         </div>
        </main>
    )
}

export default AddServiceUser
