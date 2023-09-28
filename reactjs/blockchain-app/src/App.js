import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import SecondLayout from './layout/SecondLayout/SecondLayout';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<SecondLayout />} />
                    <Route path="/post" element={<MainLayout />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
