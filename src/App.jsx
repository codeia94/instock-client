import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import Redirect from './components/Redirect/Redirect';
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import AddWarehouse from './pages/AddWarehouse/AddWarehouse';
import WarehouseDetailsPage from './pages/WarehouseDetailsPage/WarehouseDetailsPage';
import EditWarehouse from './pages/EditWarehouse/EditWarehouse';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import AddInventoryPage from './pages/AddInventoryPage/AddInventoryPage';
import InventoryDetailsPage from './pages/InventoryDetailsPage/InventoryDetailsPage';
import EditInventoryPage from './pages/EditInventoryPage/EditInventoryPage';
import Footer from "./components/Footer/Footer";


function App() {
  return (
<BrowserRouter>
    <Header/>
		<ContentWrapper>
      <Routes>
        <Route path='/' element={<Redirect/>}></Route>
        <Route path='/warehouses' element={<WarehousesPage />}></Route>
        <Route path='/warehouses/add' element={<AddWarehouse/>}></Route>
        <Route path='/warehouses/:warehouseId' element={<WarehouseDetailsPage />} ></Route>
        <Route path='/warehouses/:warehouseId/edit' element={<EditWarehouse/>}></Route>
        <Route path='/inventory' element={<InventoryPage />}></Route>
        <Route path='/inventory/add' element={<AddInventoryPage></AddInventoryPage>}></Route>
        <Route path='/inventory/:itemId' element={<InventoryDetailsPage />} ></Route>
        <Route path='/inventory/:itemId/edit' element={<EditInventoryPage/>}></Route>
      </Routes>
		</ContentWrapper>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;