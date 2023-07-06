import { Navigate} from 'react-router-dom';
import Cookie from 'js-cookie';



const ProtectedRoute = ({children}) => {
  const token = Cookie.get('jwtToken')
  if (token === undefined) {
    return <Navigate to="/login" replace />
  }else{
  return children
  }
}

export default ProtectedRoute
