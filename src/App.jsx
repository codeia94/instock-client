import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import Header from './components/Header/Header';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import Footer from "./components/Footer/Footer";
import FormWarehouse from './pages/AddWarehouse/AddWarehouse';
import EditWarehouse from './pages/EditWarehouse/EditWarehouse';
import InventoryDetailsPage from './pages/InventoryDetailsPage/InventoryDetailsPage';
import WarehouseDetailsPage from './pages/WarehouseDetailsPage/WarehouseDetailsPage';


function App() {
  return (
<BrowserRouter>
    <Header/>
		<ContentWrapper>
      <Routes>
        {/* reroute to warehouse list?? */}
        <Route path='/'></Route>

        {/* Warehouse list */}
        <Route path='/warehouses' element={<WarehousesPage />}></Route>

        {/* Warehouse add form */}
        <Route path='/warehouses/add' element=
        {<FormWarehouse/>}></Route>

        {/* Warehouse details */}
        <Route path='/warehouses/:warehouseId' element={<WarehouseDetailsPage />} ></Route>

        {/* Warehouse edit form */}
        <Route path='/warehouses/:warehouseId/edit' element={<EditWarehouse/>}></Route>

        {/* Inventory list */}
        <Route path='/inventory' element={<InventoryPage />}></Route>
        
        {/* Add inventory item form */}
        <Route path='/inventory/add'></Route>
        {/* Inventory item details */}
        <Route path='/inventory/:itemId' element={<InventoryDetailsPage />} ></Route>

        {/* Edit inventory item form */}
        <Route path='/inventory/:itemId/edit'></Route>
      </Routes>
		</ContentWrapper>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;