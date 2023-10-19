import { Navigate } from 'react-router-dom';

function getUser() {
    if (sessionStorage.getItem('user')) {
        return JSON.parse(sessionStorage.getItem('user'));
    }
    return null;
}

function ProtectedRoute({ children, isAllow }) {
    const user = getUser();

    if (user === null) {
        return <Navigate to="/login" replace />;
    }

    if (!isAllow) {
        return <Navigate to="/post" replace />;
    }

    return children;
}

export default ProtectedRoute;
