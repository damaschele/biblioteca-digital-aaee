
const NavNotice = () => {
    return (
        <li className='nav-item dropdown'>
            <a href="#" className='nav-link nav-icon' data-bs-toggle="dropdown">
                <i className='bi bi-bell'></i>
                <span className='badge bg-primary badge-number'>4</span>
            </a>

            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
                <li className='dropdown-hearder'>
                    You have 4 new notifications
                    <a href="#">
                        <span className='badge rounded-pill bg-primary p-2 ms-2'>
                            View all
                        </span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='notification-item'>
                    <i className='bi bi-exclamation-circle text-warning'></i>
                    <div>
                        <h4>Lorem Ipsum</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>30 min. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='notification-item'>
                    <i className='bi bi-exclamation-circle text-warning'></i>
                    <div>
                        <h4>Lorem Ipsum</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>40 min. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='notification-item'>
                    <i className='bi bi-exclamation-circle text-warning'></i>
                    <div>
                        <h4>Lorem Ipsum</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>1 hr. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='notification-item'>
                    <i className='bi bi-exclamation-circle text-warning'></i>
                    <div>
                        <h4>Lorem Ipsum</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>1 hr. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>

                <li className='notification-item'>
                    <i className='bi bi-check-circle text-success'></i>
                    <div>
                        <h4>Sit rerum fuga</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>2 hr.ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>

                <li className='notification-item'>
                    <i className='bi bi-check-circle text-success'></i>
                    <div>
                        <h4>Sit rerum fuga</h4>
                        <p>Quae dolorem earum veritatis oditseno</p>
                        <p>4 hr.ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='dropdown-footer'>
                    <a href="#">Show all notifications</a>
                </li>
            </ul>
        </li>
    );
}

export default NavNotice;
