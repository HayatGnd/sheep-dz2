import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sheeps from './pages/sheeps.jsx';
import SheepDetails from "./components/SheepDetails.jsx"; 
import AdminDashboard from "./admin/pages/AdminDashboard.jsx"; // adapte le chemin si besoin

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sheeps" element={<Sheeps />} />
        <Route path="/sheep/:id" element={<SheepDetails />} />
         <Route path="/admin" element={<AdminDashboard />} />
        {/* autres routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;