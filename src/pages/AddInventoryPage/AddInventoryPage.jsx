import './AddInventoryPage.scss';
import axios from "axios";
import InventoryFormHeader from '../../components/InventoryFormHeader/InventoryFormHeader';
import InventoryForm from '../../components/InventoryForm/InventoryForm';

export default function AddInventory () {
    
    return (
        <div className="add-inventory">
            <InventoryFormHeader>Add New Inventory Item</InventoryFormHeader>
            <InventoryForm/>
        </div>
    );
}