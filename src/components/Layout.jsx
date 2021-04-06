import Sidebar from './Sidebar';
import TopBar from './TopBar';

const Layout = ({ children }) => {
  return(
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <TopBar />
        {children}
      </div>
    </div>
  );
}

export default Layout;
