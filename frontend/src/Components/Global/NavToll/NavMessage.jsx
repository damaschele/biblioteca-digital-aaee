

const NavMessage = () => {
    return (
        <li className='nav-item dropdown'>
            <a href="#" className='nav-link nav-icon' data-bs-toggle="dropdown">
                <i className='bi bi-chat-left-text'></i>
                <span className='badge bg-success badge-number'>3</span>
            </a>
            <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
                <li className='dropdown-header'>
                    You have 3 messages
                    <a href="#">
                        <span className='badge rounded-pill bg-primary p-2 ms-2'>View all</span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='message-item'>
                    <div>
                        <h4>Maria Hudson</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing...</p>
                        <p>4 hrs. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='message-item'>
                    <div>
                        <h4>Maria Hudson</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing...</p>
                        <p>4 hrs. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='message-item'>
                    <div>
                        <h4>Maria Hudson</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing...</p>
                        <p>4 hrs. ago</p>
                    </div>
                </li>
                <li>
                    <hr className='dropdown-divider' />
                </li>
                <li className='message-item'>
                    <div>
                        <h4>Maria Hudson</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing...</p>
                        <p>4 hrs. ago</p>
                    </div>
                </li>
            </ul>
        </li>
    );
}

export default NavMessage;
