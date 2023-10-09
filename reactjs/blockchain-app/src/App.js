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

function App() {
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
                    <Route path="/login" element={<MainLayout />}>
                        <Route index element={<Login />} />
                       
                    </Route>
                    <Route path="/signup" element={<MainLayout />}>
                        <Route index element={<Signup />} />
                       
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
