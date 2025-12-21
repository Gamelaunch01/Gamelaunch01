import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Dashboard from "./pages/Dashboard"
import Community from "./pages/Community"
import Tournaments from "./pages/Tournaments"
import Learning from "./pages/Learning"
import Launchpad from "./pages/Launchpad"

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="px-6 py-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/launchpad" element={<Launchpad />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
