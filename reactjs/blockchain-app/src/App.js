import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import SecondLayout from './layout/SecondLayout/SecondLayout';
import Post from './layout/components/Post';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<SecondLayout />} />
                    <Route path="/post" element={<MainLayout />}>
                        <Route index element={<Post />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
