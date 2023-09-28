import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import SecondLayout from './layout/SecondLayout/SecondLayout';

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainLayout />} />
                    <Route path="/home" element={<SecondLayout />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
