import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";

function App() {
  return (
<BrowserRouter>
    {/* Header */}
      <Routes>
        {/* reroute to warehouse list?? */}
        <Route path='/'></Route>
        
        {/* Warehouse list */}
        <Route path='/warehouses' element={<WarehousesPage />}></Route>

        {/* Warehouse add form */}
        <Route path='/warehouses/add'></Route>

        {/* Warehouse details */}
        <Route path='/warehouses/:warehouseId'></Route>

        {/* Warehouse edit form */}
        <Route path='/warehouses/:warehouseId/edit'></Route>

        {/* Inventory list */}
        <Route path='/inventory'></Route>
        
        {/* Add inventory item form */}
        <Route path='/inventory/add'></Route>

        {/* Inventory item details */}
        <Route path='/inventory/:itemId'></Route>

        {/* Edit inventory item form */}
        <Route path='/inventory/:itemId/edit'></Route>
      </Routes>
    {/* Footer */}
    </BrowserRouter>
  );
}

export default App;
