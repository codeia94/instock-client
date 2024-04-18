import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import InventoryPage from './pages/InventoryPage/InventoryPage.jsx';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* Redirect root path to inventory list */}
        <Route path="/" element={<Navigate replace to="/inventories" />} />
        
        {/* Inventory list */}
        <Route path="/inventories" element={<InventoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;