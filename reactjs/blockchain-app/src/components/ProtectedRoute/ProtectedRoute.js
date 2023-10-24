import { Navigate } from 'react-router-dom';

function getUser() {
    if (sessionStorage.getItem('user')) {
        return JSON.parse(sessionStorage.getItem('user'));
    }
    return null;
}

function ProtectedRoute({ children }) {
    const user = getUser();

    if (user === null) {
        return <Navigate to="/login" replace />;
    }

    if (!user.isadmin) {
        return <Navigate to="/post" replace />;
    }

    return children;
}

export default ProtectedRoute;
