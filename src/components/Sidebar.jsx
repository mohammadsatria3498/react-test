import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const history = useHistory();

  const redirectTo = (path) => {
    history.push(path);
  }

  return (
    <>
      <div className="page-sidebar">
        <ul className="x-navigation">
          <li className="xn-logo">
            <a href="index.html">XXX</a>
            <a href="#" className="x-navigation-control" />
          </li>
          <li className="xn-title">Navigation</li>
          <li style={{ cursor: 'pointer' }}>
            <a onClick={() => redirectTo('/')}><span className="fa fa-desktop" /> <span className="xn-text">Dashboard</span></a>
          </li>
          <li style={{ cursor: 'pointer' }}>
            <a onClick={() => redirectTo('/transaction')}><span className="fa fa-exchange" /> <span className="xn-text">Transaction</span></a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
