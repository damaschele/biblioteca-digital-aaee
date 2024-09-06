
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  const AuthRoute = (props) => {
    const token = localStorage.getItem('token');
    console.log("Token: ", token)
    if (!token) {
      return <Navigate to="/" />;
    }
    return <Component {...props} />;
  }
  return AuthRoute;
}

export default withAuth;


