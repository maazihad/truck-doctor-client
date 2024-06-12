import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import ReactLoading from 'react-loading';
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-96'>
        <ReactLoading type={'bars'} color={'#f1c40f'} height={50} width={100} />
      </div>
    );
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to='/login' state={location.pathname} replace></Navigate>;
};

export default PrivateRoute;
