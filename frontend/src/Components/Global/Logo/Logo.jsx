import logo from '../../../assets/aaee.png';
import './logo.css'

function Logo() {
    
    const handleToggleSideBar = () =>{
        document.body.classList.toggle('toggle-sidebar');
    }

  return (
    <div className="d-flex align-items-center justify-content-between dashboard-logo">
        <a href="/dasboard" className='logo1 d-flex align-items-center'>
            <img src={logo} alt="" />
            <span className='d-none d-lg-block'>Painel do Admin</span>
        </a>
        <i
        className='bi bi-list toggle-sidebar-btn'
        onClick={handleToggleSideBar}
        ></i>
    </div>
  )
}

export default Logo