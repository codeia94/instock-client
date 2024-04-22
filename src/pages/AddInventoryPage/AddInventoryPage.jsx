import InventoryFormHeader from '../../components/InventoryFormHeader/InventoryFormHeader';
import InventoryForm from '../../components/InventoryForm/InventoryForm';

export default function AddInventory () {
    
    const data =
        {
            "id": null,
            "warehouse_name": "",
            "item_name": "",
            "description": "",
            "category": "",
            "status": "Out of Stock",
            "quantity": 0,
        };

    return (
        <div className="add-inventory">
            <InventoryFormHeader>Add New Inventory Item</InventoryFormHeader>
            <InventoryForm
                data={data}
                button="+ Add Item"
            />
        </div>
    );
}