import { useState } from 'react';
import Topbar from '../Global/Topbar/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboardPrincipal.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import SideBar from '../Global/Sidebar/SideBar';
import Main from '../Global/Main/Main';

function DashboardPrincipal() {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const changePage = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <>
      <Topbar />
      <div className="container-app">
        <SideBar changePage={changePage}/>
        <Main currentPage={currentPage} />
      </div>
    </>
  );
}

export default DashboardPrincipal;
