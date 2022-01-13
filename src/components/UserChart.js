import React from 'react'
import Sidebar from './Sidebar';
import {Link} from 'react-router-dom';


const UserChart = () => {
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
              <li className="breadcrumb-item active">Service User detail</li>
            </ol>
          </nav>
          <div className="ms-panel">
            <div className="section_box1_content2">
                            <div className="row">
                                <div className="col-sm-12" Style="padding-left: 30px;">
                                    <div className="tab_menus" Style="float:left;">
                                        <ul>
                                            <li><Link to="/userdetails">Profile</Link></li>
                                            <li><Link to="#">Daily Logs</Link></li>
                                            <li className="active"><Link to="/userchart">Charts</Link></li>
                                            <li><Link to="#">Documents</Link></li>
                                            <li><Link to="#">Support Plan</Link></li>
                                            <li><Link to="#">Medication</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
            <div className="ms-panel-body">
              	<div Style="margin: 0px auto; height: 100%;">
		<div>
			<div className="Row" Style="display: flex; flex-wrap: wrap; margin: 45px auto 50px; max-width: 1080px;">
				<div Style="min-height: 1px; padding-left: 0px; padding-right: 0px; width: 50%;">
					<div Style="margin-right: 24px;">
						<div>
							<div className="Row" Style="display: flex; flex-wrap: wrap; margin-left: -10px; margin-right: -10px; margin-bottom: 35px;">
								<div Style="min-height: 1px; padding-left: 10px; padding-right: 10px; width: 100%;">
									<div Style="width: 100%;">
										<div Style="display: flex; justify-content: space-between;">
											<div Style="min-height: 34px;">
												<h2 Style="margin-bottom: 6px;">Food &amp; Drink</h2>
											</div>
											<div></div>
										</div>
										<div className="lmc-theme-gradient" Style="height: 2px; margin-bottom: 8px; margin-top: 0px; width: 100%;"></div>
									</div>
									<div>
										<div className="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
											<div className="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
												<div className="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
													<div>
														<div Style="background: rgb(101 31 112); border-radius: 30px; align-items: center; display: flex; flex-shrink: 0; height: 40px; justify-content: center; width: 40px;"><img alt="" src="https://lmc-data-production.s3.eu-west-2.amazonaws.com/icons/Oi4WmT6-qcsu7slU.png" Style="color: white; height: 20px;"/></div>
													</div>
													<div className="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
														<span className="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Fluids</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">21/12/21 • 15:45</span><span Style="font-size: 14px;">0 ml last 24h</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div className="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
											<div className="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
												<div className="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
													<div>
														<div Style="background: rgb(101 31 112); border-radius: 30px; align-items: center; display: flex; flex-shrink: 0; height: 40px; justify-content: center; width: 40px;"><img alt="" src="https://lmc-data-production.s3.eu-west-2.amazonaws.com/icons/DCoSqmmpfBcirydW.png" Style="color: white; height: 20px;"/></div>
													</div>
													<div className="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
														<span className="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Food</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">21/12/21 • 15:45</span><span Style="font-size: 14px;">0 portions in 24h</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="Row" Style="display: flex; flex-wrap: wrap; margin-left: -10px; margin-right: -10px; margin-bottom: 35px;">
								<div Style="min-height: 1px; padding-left: 10px; padding-right: 10px; width: 100%;">
									<div Style="width: 100%;">
										<div Style="display: flex; justify-content: space-between;">
											<div Style="min-height: 34px;">
												<h2 Style="margin-bottom: 6px;">Other</h2>
											</div>
											<div></div>
										</div>
										<div className="lmc-theme-gradient" Style="height: 2px; margin-bottom: 8px; margin-top: 0px; width: 100%;"></div>
									</div>
									<div>
										<div className="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
											<div className="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
												<div className="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
													<div>
														<div Style="background: rgb(249, 193, 116); border-radius: 30px; align-items: center; display: flex; flex-shrink: 0; height: 40px; justify-content: center; width: 40px;"><img alt="" src="https://lmc-data-production.s3.eu-west-2.amazonaws.com/icons/ItCjQ2ixsdEh4JDq.png" Style="color: white; height: 20px;"/></div>
													</div>
													<div className="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
														<span className="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Activities &amp; Social</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">14/10/21 • 21:15</span><span Style="font-size: 14px;">he went swimming . He really enjoyed swimming</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div className="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
											<div className="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
												<div className="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
													<div>
														<div Style="background: rgb(157, 213, 192); border-radius: 30px; align-items: center; display: flex; flex-shrink: 0; height: 40px; justify-content: center; width: 40px;"><img alt="" src="https://lmc-data-production.s3.eu-west-2.amazonaws.com/icons/GtcblVGplIsUPtCx.png" Style="color: white; height: 20px;"/></div>
													</div>
													<div className="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
														<span className="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Health Visit</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">22/10/21 • 18:02</span><span Style="font-size: 14px;">ada visited the Chiropodist. His care plan was updated because health professional observ3d</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div className="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
											<div className="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
												<div className="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
													<div>
														<div Style="background: rgb(232, 91, 120); border-radius: 30px; align-items: center; display: flex; flex-shrink: 0; height: 40px; justify-content: center; width: 40px;"><img alt="" src="https://lmc-data-production.s3.eu-west-2.amazonaws.com/icons/HTuzKuiQjwsGToJD.png" Style="color: white; height: 20px;"/></div>
													</div>
													<div className="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
														<span className="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Behaviour</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">11/11/21 • 18:57</span><span Style="font-size: 14px;">Relating to behaviour at nana. Antecedent: ksnzn. Behaviour: very aggrebdnd. Consequence: jdnd. notified the senior on shift,</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div className="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
											<div className="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
												<div className="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
													<div>
														<div Style="background: rgb(232, 91, 120); border-radius: 30px; align-items: center; display: flex; flex-shrink: 0; height: 40px; justify-content: center; width: 40px;"><img alt="" src="https://lmc-data-production.s3.eu-west-2.amazonaws.com/icons/EQyT6tfSm478PBWH.png" Style="color: white; height: 20px;"/></div>
													</div>
													<div className="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
														<span className="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Incident</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">11/11/21 • 18:49</span><span Style="font-size: 14px;">At nn, ada was involved in an Assault. mmm. Submitted an incident report, notified the senior on shift, updated his care plan, informed management,</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div className="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
											<div className="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
												<div className="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
													<div>
														<div Style="background: rgb(180, 215, 139); border-radius: 30px; align-items: center; display: flex; flex-shrink: 0; height: 40px; justify-content: center; width: 40px;"><img alt="" src="https://lmc-data-production.s3.eu-west-2.amazonaws.com/icons/jdQh4LOSLQkvBdbX.png" Style="color: white; height: 20px;"/></div>
													</div>
													<div className="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
														<span className="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Wash</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">03/11/21 • 20:16</span><span Style="font-size: 14px;">ada was assisted with personal care: assisted out of bed, showered, shaved, oral hygiene, getting dressed,</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div Style="min-height: 1px; padding-left: 0px; padding-right: 0px; width: 50%;">
					<div Style="margin-right: 24px;">
						<div>
							<div className="Row" Style="display: flex; flex-wrap: wrap; margin-left: -10px; margin-right: -10px; margin-bottom: 35px;">
								<div Style="min-height: 1px; padding-left: 10px; padding-right: 10px; width: 100%;">
									<div Style="width: 100%;">
										<div Style="display: flex; justify-content: space-between;">
											<div Style="min-height: 34px;">
												<h2 Style="margin-bottom: 6px;">Health Recordings</h2>
											</div>
											<div></div>
										</div>
										<div className="lmc-theme-gradient" Style="height: 2px; margin-bottom: 8px; margin-top: 0px; width: 100%;"></div>
									</div>
									<div>
										<div className="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
											<div className="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
												<div className="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
													<div>
														<div Style="background: rgb(171, 151, 198); border-radius: 30px; align-items: center; display: flex; flex-shrink: 0; height: 40px; justify-content: center; width: 40px;"><img alt="" src="https://lmc-data-production.s3.eu-west-2.amazonaws.com/icons/aDNSicKIcyP8qMMT.png" Style="color: white; height: 20px;"/></div>
													</div>
													<div className="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
														<span className="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Mobility</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">11/11/21 • 19:38</span><span Style="font-size: 14px;">Very Good</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div className="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
											<div className="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
												<div className="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
													<div>
														<div Style="background: rgb(171, 151, 198); border-radius: 30px; align-items: center; display: flex; flex-shrink: 0; height: 40px; justify-content: center; width: 40px;"><img alt="" src="https://lmc-data-production.s3.eu-west-2.amazonaws.com/icons/IhD_XpzHvfRXg2Ax.png" Style="color: white; height: 20px;"/></div>
													</div>
													<div className="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
														<span className="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Mood</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">03/11/21 • 21:15</span><span Style="font-size: 14px;">Best</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div className="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
											<div className="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
												<div className="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
													<div>
														<div Style="background: rgb(171, 151, 198); border-radius: 30px; align-items: center; display: flex; flex-shrink: 0; height: 40px; justify-content: center; width: 40px;"><img alt="" src="https://lmc-data-production.s3.eu-west-2.amazonaws.com/icons/FeSag-FyxOIIUjZ7.png" Style="color: white; height: 20px;"/></div>
													</div>
													<div className="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
														<span className="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Stool</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">03/11/21 • 22:16</span><span Style="font-size: 14px;">Type 2</span>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div className="lmc-list-item" Style="display: flex; flex-direction: column; justify-content: space-between; padding: 8px 16px; cursor: pointer;">
											<div className="lmc-list-item-header" Style="display: flex; justify-content: space-between; flex-direction: row;">
												<div className="lmc-list-item-link-container" Style="align-items: center; display: flex; cursor: pointer; margin-right: 12px; flex: 1 1 0%;">
													<div>
														<div Style="background: rgb(171, 151, 198); border-radius: 30px; align-items: center; display: flex; flex-shrink: 0; height: 40px; justify-content: center; width: 40px;"><img alt="" src="https://lmc-data-production.s3.eu-west-2.amazonaws.com/icons/Q1UCv5XYAzaPcbL-.png" Style="color: white; height: 20px;"/></div>
													</div>
													<div className="lmc-list-item-parent-link" Style="display: flex; flex-direction: column; padding-left: 10px;">
														<span className="lmc-list-item-link" Style="font-weight: bold; font-size: 16px;">Temperature</span><span Style="color: rgb(153, 153, 153); font-size: 12px;">11/11/21 • 19:38</span><span Style="font-size: 14px;">99°C</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div Style="width: 100%;">
									<div Style="display: flex; justify-content: space-between;">
										<div Style="min-height: 34px;">
											<h2 Style="margin-bottom: 6px;">No Recorded Data</h2>
											<p Style="opacity: 0.6; margin-top: 0px; margin-bottom: 0px;">Select Link title below to view Link sample chart.</p>
											<p Style="opacity: 0.6; margin-top: 0px; margin-bottom: 5px;"><span>Service User charts are populated by logs made via the Carer App.<Link to="https://support.logmycare.co.uk/the-care-office/managing-your-residents/how-do-i-view-charts-in-the-care-office" rel="noreferrer" Style="padding-left: 5px;" target="_blank">Find out more</Link></span></p>
										</div>
										<div></div>
									</div>
									<div className="lmc-theme-gradient" Style="height: 2px; margin-bottom: 8px; margin-top: 2px; width: 100%;"></div>
								</div>
								<div Style="padding-top: 4px; padding-bottom: 4px;">
									<Link to="/residents/61684e043d0f675cb8bb7756/charts/blood_glucose" Style="color: rgb(34, 34, 34);">Blood Glucose</Link>
								</div>
								<div Style="padding-top: 4px; padding-bottom: 4px;">
									<Link to="/residents/61684e043d0f675cb8bb7756/charts/blood_oxygen" Style="color: rgb(34, 34, 34);">Blood Oxygen</Link>
								</div>
								<div Style="padding-top: 4px; padding-bottom: 4px;">
									<Link to="/residents/61684e043d0f675cb8bb7756/charts/blood_pressure" Style="color: rgb(34, 34, 34);">Blood Pressure</Link>
								</div>
								<div Style="padding-top: 4px; padding-bottom: 4px;">
									<Link to="/residents/61684e043d0f675cb8bb7756/charts/heart_rate" Style="color: rgb(34, 34, 34);">Heart Rate</Link>
								</div>
								<div Style="padding-top: 4px; padding-bottom: 4px;">
									<Link to="/residents/61684e043d0f675cb8bb7756/charts/must" Style="color: rgb(34, 34, 34);">MUST</Link>
								</div>
								<div Style="padding-top: 4px; padding-bottom: 4px;">
									<Link to="/residents/61684e043d0f675cb8bb7756/charts/turns" Style="color: rgb(34, 34, 34);">Re-positioning</Link>
								</div>
								<div Style="padding-top: 4px; padding-bottom: 4px;">
									<Link to="/residents/61684e043d0f675cb8bb7756/charts/respiratory_rate" Style="color: rgb(34, 34, 34);">Respiratory Rate</Link>
								</div>
								<div Style="padding-top: 4px; padding-bottom: 4px;">
									<Link to="/residents/61684e043d0f675cb8bb7756/charts/waterlow" Style="color: rgb(34, 34, 34);">Waterlow</Link>
								</div>
								<div Style="padding-top: 4px; padding-bottom: 4px;">
									<Link to="/residents/61684e043d0f675cb8bb7756/charts/weight" Style="color: rgb(34, 34, 34);">Weight</Link>
								</div>
							</div>
						</div>
        					</div>
        				</div>
        			</div>
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

export default UserChart
