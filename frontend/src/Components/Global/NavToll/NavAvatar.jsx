import axios from "axios";
import { useState, useEffect } from "react";

const NavAvatar = () => {
    const [usuarios, setUsuarios] = useState([]);

    const nomeUsuario = () =>{
        axios.get('http://localhost:8080/listar')
        .then(res => {
            setUsuarios(res.data);
            console.log(res.data)
        })
    }

    useEffect(() =>{
        nomeUsuario();
    },[])
    return (
        <li className='nav-item dropdown pe-3' >
            <a
                className='nav-link nav-profile d-flex align-items-center pe-0'
                href="#"
                data-bs-toggle="dropdown"
            >
                <img src="" alt="profile" className='rounded-cicle' style={{borderRadius: "60%",width: "35px",height: "35px", objectFit: "cover"}}/>
                <span className='d-none d-md-block dropdown-toggle ps-2'>{usuarios.nome}</span>
            </a>

            {/* <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
                <li className='dropdown-header'>
                    <h6>Chele</h6>
                    <span>Web Developer</span>
                </li>
                <li>
                    <hr className='dropdown-divider'/>
                </li>
                <li>
                    <a href="users-profile.html" className='dropdown-item d-flex align-items-center'>
                        <i className='bi bi-person'></i>
                        <span>My Profile</span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider'/>
                </li>
                <li>
                    <a href="users-profile.html" className='dropdown-item d-flex align-items-center'>
                        <i className='bi bi-gear'></i>
                        <span>Account Settigns</span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider'/>
                </li>
                <li>
                    <a href="pages-faq.html" className='dropdown-item d-flex align-items-center'>
                        <i className='bi bi-question-circle'></i>
                        <span>Need help?</span>
                    </a>
                </li>
                <li>
                    <hr className='dropdown-divider'/>
                </li>
                <li>
                    <a href="#" className="dropdown-item d-flex align-items-center">
                        <i className='bi bi-box-arrow-right'></i>
                        <span>Sign out</span>
                    </a>
                </li>
            </ul> */}
        </li>
    );
}

export default NavAvatar;
