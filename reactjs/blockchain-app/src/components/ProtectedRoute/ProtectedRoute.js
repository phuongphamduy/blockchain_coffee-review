import { Navigate, useLocation } from 'react-router-dom';

function getUser() {
    if (sessionStorage.getItem('user')) {
        return JSON.parse(sessionStorage.getItem('user'));
    }
    return null;
}

function ProtectedRoute({ children }) {
    const user = getUser();
    const location = useLocation();
    if (user === null) {
        return <Navigate to="/login" replace />;
    }

    if (!user.isadmin && location.pathname.includes('/admin')) {
        return <Navigate to="/post" replace />;
    }

    return children;
}

export default ProtectedRoute;
