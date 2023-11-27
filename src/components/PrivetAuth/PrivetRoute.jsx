import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../sharedPages/Context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // if (loading) {
    //     return <button className="btn btn-square loading"> loading from </button>;
    // }
    if (!user) {
        // Redirect to the login page, but save the current location they were trying to go to
        return <Navigate to='/login' state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;
