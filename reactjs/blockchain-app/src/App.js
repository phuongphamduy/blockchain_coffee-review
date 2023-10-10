import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Post from './layout/components/Post';
import PostDetail from './layout/components/PostDetail';
import AdminLayout from './layout/AdminLayout';
import Account from './layout/components/admin/Account';
import PostAdmin from './layout/components/admin/PostAdmin';
import Statistic from './layout/components/admin/Statistic';
import AllowPost from './layout/components/admin/AllowPost';
<<<<<<< Updated upstream
=======
import Login from './layout/components/Login';
import Signup from './layout/components/Signup';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/user';
>>>>>>> Stashed changes

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
                    </Route>
                    <Route path="/post" element={<MainLayout />}>
                        <Route index element={<Post />} />
                        <Route path="detail" element={<PostDetail />} />
                    </Route>
<<<<<<< Updated upstream
=======
                    <Route path="/login" element={<MainLayout />}>
                        <Route index element={<Login />} />
                    </Route>
                    <Route path="/signup" element={<MainLayout />}>
                        <Route index element={<Signup />} />
                    </Route>
>>>>>>> Stashed changes
                </Routes>
            </Router>
        </>
    );
}

export default App;
