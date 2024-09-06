import Logo from '../../assets/aaee.png';
import './register.css';

// eslint-disable-next-line react/prop-types
function Register({ botao, eventoTeclado, cadastrar }) {
  return (
    <div className="container container_register">
      <div className="register">
        <div className="login_imag">
          <img src={Logo} alt="logo" />
        </div>
        <div className="register-container">
          <h2>Register</h2>
          <form>
            <div className="form-content">
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  id="first-name"
                  required
                  onChange={eventoTeclado}
                  name='firstName'
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  required
                  onChange={eventoTeclado}
                  name='lastName'
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  onChange={eventoTeclado}
                  name='email'
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  required
                  onChange={eventoTeclado}
                  name='username'
                />
              </div>
            </div>
            <div className="form-content">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  required
                  onChange={eventoTeclado}
                  name='password'
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  required
                  onChange={eventoTeclado}
                  name='confirmPassword'
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  onChange={eventoTeclado}
                  name='phone'
                />
              </div>
              <div className="form-group">
                {botao ? <input className='button' type="button" value="Cadastrar" onClick={cadastrar} /> : <div></div>}
              </div>
            </div>

            <div className='register-link'>
              Do you have an account? <a href="/">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register;
