import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Community from './pages/Community';
import Tournaments from './pages/Tournaments';
import Learning from './pages/Learning';
import Launchpad from './pages/Launchpad';
import Profile from './pages/Profile';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="community" element={<Community />} />
                    <Route path="tournaments" element={<Tournaments />} />
                    <Route path="learning" element={<Learning />} />
                    <Route path="launchpad" element={<Launchpad />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
