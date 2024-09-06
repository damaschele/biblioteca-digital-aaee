import Logo from '../Logo/Logo'
import NavToll from "../NavToll/NavToll";
import SearchBar from "../NavToll/SearchBar";
import './topbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const Topbar = () => {
    return (
      <header id="header" className="header fixed-top d-flex align-items-center">
        {/* Logo/ Search/ NavToll ou nav de profile */}
        <Logo />
        <SearchBar />
        <NavToll />
      </header>
    );
}

export default Topbar;
