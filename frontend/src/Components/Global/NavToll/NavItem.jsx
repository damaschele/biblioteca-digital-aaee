/* eslint-disable react/prop-types */
function NavItem( { nav } ){
    return (
        <li className='nav-item' key={nav._id}>
            <a href="#" className='nav-link collapsed'>
                <i className={nav.icon}></i>
                <span>{nav.name}</span>
            </a>
        </li>
    );
}

export default NavItem;