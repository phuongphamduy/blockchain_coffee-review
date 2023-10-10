import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Post from './layout/components/Post';
import PostDetail from './layout/components/PostDetail';
import AdminLayout from './layout/AdminLayout';
import Account from './layout/components/admin/Account';
import PostAdmin from './layout/components/admin/PostAdmin';
import Statistic from './layout/components/admin/Statistic';
import AllowPost from './layout/components/admin/AllowPost';
import ReportFeedback from './layout/components/admin/ReportFeedback';


import Login from './layout/components/Login';
import Signup from './layout/components/Signup';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/user';

import Home from './layout/components/Home';
import UserInfor from './layout/components/UserInfor';

function App() {
    const dispatch = useDispatch();
    if (sessionStorage.getItem('user')) {
        dispatch(setUser(sessionStorage.getItem('user')));
    }
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route path="account" element={<Account />} />
                        <Route path="post" element={<PostAdmin />} />
                        <Route path="statistic" element={<Statistic />} />
                        <Route path="allowPost" element={<AllowPost />} />
                        <Route path="reportFeedback" element={<ReportFeedback/>}/>
                    </Route>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                        <Route path="post" element={<Post />} />
                        <Route path="detail" element={<PostDetail />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="UserInfo" element={<UserInfor />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
