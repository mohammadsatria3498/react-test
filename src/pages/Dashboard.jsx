const Dashboard = () => {
  return(
    <>
        <ul className="breadcrumb">
            <li><a href="#">Home</a></li>
            <li className="active">Dashboard</li>
          </ul>
          {/* END BREADCRUMB */}
          {/* PAGE CONTENT WRAPPER */}
          <div className="page-content-wrap">
            <div className="row">
              <div className="col-md-12">
                {/* LOGIN WIDGET */}
                <div className="panel panel-default">
                  <div className="panel-body">
                    <h2>SAMPLE</h2>
                    <div className="form-group">
                      <div className="col-md-12">
                        <div className="input-group">
                          <span className="input-group-btn">
                            <button className="btn btn-danger" type="button">Clear</button>
                          </span>
                          <input type="text" className="form-control" placeholder="Ketik Contoh: 453727547274672" />
                          <span className="input-group-btn">
                            <button className="btn btn-success" type="button">Cari <i className="fa fa-arrow-circle-right" /></button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END LOGIN WIDGET */}
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                {/* START SALES BLOCK */}
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="panel-title-box">
                      <h3>Billing Info</h3>
                      <span>Informasi dari Tertagih</span>
                    </div>
                    {/*<ul class="panel-controls panel-controls-title">                                        
                                        <li>
                                            <div id="reportrange" class="dtrange">                                            
                                                <span></span><b class="caret"></b>
                                            </div>                                     
                                        </li>                                
                                        <li><a href="#" class="panel-fullscreen rounded"><span class="fa fa-expand"></span></a></li>
                                    </ul> */}
                  </div>
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Billing Code</label>
                          <input type="text" className="form-control" defaultValue={"53562654725637"} disabled="disabled" />
                        </div>
                        <div className="form-group">
                          <label>NPWP</label>
                          <input type="text" className="form-control" defaultValue="5356-2.65-47256-1" disabled="disabled" />
                        </div>
                        <div className="form-group">
                          <label>Currency</label>
                          <input type="text" className="form-control" defaultValue={"016"} disabled="disabled" />
                        </div>
                       
                        <div className="form-group">
                          <label>Amount</label>
                          <input type="text" className="form-control" defaultValue="6,777,777" disabled="disabled" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>User ID</label>
                          <input type="text" className="form-control" defaultValue={"005648"} disabled="disabled" />
                        </div>
                        <div className="form-group">
                          <label>Terminal ID</label>
                          <input type="text" className="form-control" defaultValue="65.122.10.14" disabled="disabled" />
                        </div>
                        <div className="form-group">
                          <label>Branch Code</label>
                          <input type="text" className="form-control" defaultValue={"003"} disabled="disabled" />
                        </div>
                        <div className="form-group">
                          <label>Channel Type</label>
                          <input type="text" className="form-control" defaultValue={"712"} disabled="disabled" />
                        </div>
                        <div className="form-group">
                          <label>Address</label>
                          <textarea className="form-control" disabled="disabled" defaultValue={"Jl Pegangsaan Tmur No.56 Jakarta Timur Jakarta Indonesia"} />
                        </div>
                      </div>
                      {/*<div class="col-md-8">
                                            <div id="dashboard-map-seles" style="width: 100%; height: 200px"></div>
                                        </div>*/}
                    </div>
                  </div>
                </div>
                {/* END SALES BLOCK */}
              </div>
              <div className="col-md-7">
                {/* START PROJECTS BLOCK */}
                {/* START JUSTIFIED TABS */}
                <div className="panel panel-default tabs">
                  <ul className="nav nav-tabs nav-justified">
                    <li className="active"><a href="#tab8" data-toggle="tab">DJP</a></li>
                    <li><a href="#tab9" data-toggle="tab">JDBC</a></li>
                    <li><a href="#tab10" data-toggle="tab">DCA</a></li>
                    <li><a href="#tab11" data-toggle="tab">DEBIT</a></li>
                    <li><a href="#tab12" data-toggle="tab">KREDIT</a></li>
                  </ul>
                  <div className="panel-body tab-content">
                    <div className="tab-pane active" id="tab8">
                      <div className="b-form-row">
                        <div className="col-sm-6">
                          <label className="b-form-vertical__label">Map Code</label>
                          <input type="text" className="form-control input-sm" defaultValue={"5826824264294923"} disabled />
                          <label className="b-form-vertical__label">SK Number</label>
                          <input type="text" className="form-control input-sm" defaultValue="5545-428682622-002" disabled />
                          <label className="b-form-vertical__label">Tax Period</label>
                          <input type="text" className="form-control input-sm" defaultValue={"016"} disabled />
                        </div>
                        <div className="col-sm-6">
                          <label className="b-form-vertical__label">Deposit Type</label>
                          <input type="text" className="form-control input-sm" defaultValue="Joko Susanta" disabled />
                          <label className="b-form-vertical__label">OP Number</label>
                          <input type="text" className="form-control input-sm" defaultValue="Joko Susanta" disabled />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab9">
                      <div className="b-form-row">
                        <div className="col-sm-6">
                          <label className="b-form-vertical__label">Document Type</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled />
                          <label className="b-form-vertical__label">Document Number</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled />
                          <label className="b-form-vertical__label">KODE KPBC</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled />
                        </div>
                        <div className="col-sm-6">
                          <label className="b-form-vertical__label">Document Name</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled />
                          <label className="b-form-vertical__label">Type of Document</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab10">
                      <div className="b-form-row">
                        <div className="col-sm-6">
                          <label className="b-form-vertical__label">K/L</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled />
                          <label className="b-form-vertical__label">Unit Eselon</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled />
                        </div>
                        <div className="col-sm-6">
                          <label className="b-form-vertical__label">Work Unit Code</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab11">
                      <div className="b-form-row">
                        <div className="col-sm-6">
                          <label className="b-form-vertical__label">Ticket Number</label>
                          <input type="text" className="form-control input-sm" />
                          <label className="b-form-vertical__label">Cash Currency Code</label>
                          <input type="text" className="form-control input-sm" />
                          <label className="b-form-vertical__label">Cash Amount</label>
                          <input type="text" className="form-control input-sm" />
                          <label className="b-form-vertical__label">Customer Type</label>
                          <input type="text" className="form-control input-sm" />
                          <label className="b-form-vertical__label">ID Card Type and Number</label>
                          <div className="input-group">
                            <div className="input-group-btn">
                              <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">KTP <span className="caret" /></button>
                              <ul className="dropdown-menu">
                                <li><a href="#" style={{ fontSize: '10px' }}>KTP</a></li>
                                <li><a href="#" style={{ fontSize: '10px' }}>SIM</a></li>
                                <li><a href="#" style={{ fontSize: '10px' }}>PASSPORT</a></li>
                                <li role="separator" className="divider" />
                                <li><a href="#" style={{ fontSize: '10px' }}>KITAS</a></li>
                              </ul>
                            </div>{/* /btn-group */}
                            <input type="text" defaultValue={"3515084567890003"} className="form-control input-sm" style={{ fontSize: '10px' }} disabled />
                          </div>
                          <label className="b-form-vertical__label">Deposito Name</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled />
                          <label className="b-form-vertical__label">Date of Birth</label>
                          <div className="b-form-control__icon-wrap">
                            <input type="text" className="form-control datepicker input-sm  b-datepicker-without-icon" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <label className="b-form-vertical__label">Counter Rate</label>
                          <input type="text" className="form-control input-sm" defaultValue="1,000,000" disabled />
                          <label className="b-form-vertical__label">Special Rate</label>
                          <input type="text" className="form-control input-sm" defaultValue="1,000,000" disabled />
                          <label className="b-form-vertical__label">Address</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled />
                          <label className="b-form-vertical__label">Cross Currency Valas</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled />
                          <label className="b-form-vertical__label">Ref No. Valas to Valas</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled />
                          <label className="b-form-vertical__label">Original Rate</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled />
                          <label className="b-form-vertical__label">Cover Original Rate</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab12">
                      <div className="b-form-row">
                        <div className="col-md-6">
                          <label className="b-form-vertical__label">Account CCY Code</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled /><br />
                          <label className="b-form-vertical__label">KPPN Account Number</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled /><br />
                          <label className="b-form-vertical__label">Equivalent Amount</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled /><br />
                        </div>
                        <div className="col-md-6">
                          <label className="b-form-vertical__label">Ref. Number</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled /><br />
                          <label className="b-form-vertical__label">Account Name</label>
                          <input type="text" className="form-control input-sm" defaultValue disabled /><br />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END JUSTIFIED TABS */}
                {/* END PROJECTS BLOCK */}
              </div>
            </div>
          </div>
    </>
  );
}

export default Dashboard;
