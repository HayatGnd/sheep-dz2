import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sheeps from './pages/sheeps.jsx'; // Assure-toi que ce fichier existe

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sheeps" element={<Sheeps />} />
        {/* autres routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;