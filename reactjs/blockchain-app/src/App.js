import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Post from './layout/components/Post';
import PostDetail from './layout/components/PostDetail';
import AdminLayout from './layout/AdminLayout';
import Account from './layout/components/admin/Account';
import PostAdmin from './layout/components/admin/PostAdmin';
import Statistic from './layout/components/admin/Statistic';
import AllowPost from './layout/components/admin/AllowPost';

import Login from './layout/components/Login';
import Signup from './layout/components/Signup';
import Forgot from './layout/components/Forgot';

import Home from './layout/components/Home';
import UserInfor from './layout/components/UserInfor';
import ReportFeedback from './layout/components/admin/ReportFeedback';
import ProtectedRoute from './components/ProtectedRoute';
import EditProfile from './layout/components/EditProfile';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute>
                                <AdminLayout />
                            </ProtectedRoute>
                        }
                    >
                        <Route path="account" element={<Account />} />
                        <Route path="post" element={<PostAdmin />} />
                        <Route path="statistic" element={<Statistic />} />
                        <Route path="allowPost" element={<AllowPost />} />
                        <Route path="reportFeedback" element={<ReportFeedback />} />
                    </Route>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="post" element={<Post />} />
                        <Route path="post/:postId" element={<PostDetail />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="forgot" element={<Forgot />} />
                        <Route path="userinfo/:id" element={<UserInfor />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route
                            path="EditProfile"
                            element={
                                <ProtectedRoute>
                                    <EditProfile />
                                </ProtectedRoute>
                            }
                        />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
