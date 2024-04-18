import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import AddWarehouse from './components/AddWarehouse/AddWarehouse';
import FormWarehouse from './components/AddWarehouse/AddWarehouse';

function App() {
  return (
<BrowserRouter>
    <Header/>
      <Routes>
        {/* reroute to warehouse list?? */}
        <Route path='/'></Route>
        
        {/* Warehouse list */}
        <Route path='/warehouses'></Route>

        {/* Warehouse add form */}
        <Route path='/warehouses/add' element=
        {<FormWarehouse/>}></Route>

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
