const TopBar = () => {
  return(
    <ul className="x-navigation x-navigation-horizontal x-navigation-panel">
      {/* TOGGLE NAVIGATION */}
      <li className="xn-icon-button">
        <a href="#" className="x-navigation-minimize"><span className="fa fa-dedent" /></a>
      </li>
      {/* END TOGGLE NAVIGATION */}
      {/* SEARCH */}
      <li className="xn-search">
        <form role="form">
          <input type="text" name="search" placeholder="CARI KODE TRANSAKSI" />
        </form>
      </li>
      {/* END SEARCH */}
      {/* SIGN OUT */}
      <li className="xn-icon-button pull-right">
        <a href="#" className="mb-control" data-box="#mb-signout"><span className="fa fa-sign-out" /></a>
      </li>
      {/* END SIGN OUT */}
      {/* MESSAGES */}
      <li className="xn-icon-button pull-right">
        <a href="#"><span className="fa fa-user" /></a>
        <div className="informer informer-danger">4</div>
        <div className="panel panel-primary animated zoomIn xn-drop-left xn-panel-dragging">
          <div className="panel-heading">
            <div className="pull-left">
              <span className="label label-danger"><i className="fa fa-desktop" /> IP:
                111.111.123.100</span><br />
              <span className="label label-success"><i className="fa fa-home" /> 3005 - MKK (003 -
                KC.THAMRIN)</span>
            </div>
          </div>
          
          <div className="panel-footer text-left">
            <a href="pages-messages.html"><i className="fa fa-pencil" /> Edit My Profile</a><br />
            <a href><i className="fa fa-warning" /> Admin Report</a><br />
            <a href><i className="fa fa-lock" /> Change Password</a>
          </div>
        </div>
      </li>
      {/* END MESSAGES */}
      {/* TASKS */}
      <li className="xn-icon-button pull-right">
        <a href="#"><span className="fa fa-home" /></a>
        <div className="panel panel-primary animated zoomIn xn-drop-left xn-panel-dragging">
          <div className="panel-heading">
            <h3 className="panel-title"><span className="fa fa-tasks" /> Option</h3>
          </div>
          <div className="panel-body list-group scroll" style={{ height: '200px' }}>
            <a className="list-group-item" href="#">
              <strong><i className="fa fa-building" /> Check Branch </strong><br />
              <small className="text-muted">Cek Terakhir pada 25 Sep 2014</small>
            </a>
            <a className="list-group-item" href="#">
              <strong><i className="fa fa-plus-square" /> Denomination Calculator</strong><br />
              <small className="text-muted">Gunakan Untuk Perhitungan</small>
            </a>
          </div>
        </div>
      </li>
      {/* END TASKS */}
    </ul>
  );
}
export default TopBar;
