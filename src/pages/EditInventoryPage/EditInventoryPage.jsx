import './EditInventoryPage.scss';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import InventoryFormHeader from '../../components/InventoryFormHeader/InventoryFormHeader';
import InventoryForm from '../../components/InventoryForm/InventoryForm';

export default function EditInventoryPage () {
    
    const { itemId } = useParams();

    const [ data, setData ] = useState("");
    const [ warehouseId, setWarehouseId ] = useState("");
    const [ error, setError ] = useState(false);

    useEffect(() => {
        const getItem = async () => {
            try {
                const itemResponse = await axios.get(`http://localhost:8080/api/inventories/${itemId}`);
                const itemData = itemResponse.data
                setData(itemData)        
            } catch (error) {
                console.error(`Error fetching data for ID: ${error}`);
                setError(true);
            }
        }
        getItem();
    }, [itemId]);

    
    useEffect(() => {
        const getWarehouse = async () => {
            try {
                const warehouseResponse = await axios.get(`http://localhost:8080/api/warehouses`);
                const warehouseList = warehouseResponse.data
                
                const itemWarehouse = warehouseList.find((warehouse) => warehouse.warehouse_name === data.warehouse_name)
                setWarehouseId(itemWarehouse.id);
            } catch (error) {
                console.error(`Could not fetch warehouse data.`)
            }
        }
        getWarehouse();
    }, [data.warehouse_name]);
    
    if (error) {
        return (
            <div className='error-message'>
            Inventory item not found.lease return to the&nbsp; <Link to='/inventory'>inventory page</Link>.
            </div>
        ) 
    } else if (!warehouseId) {
        return <div className='error-message'>Loading data...</div>
    }

    return (
        <div className="edit-inventory">
            <InventoryFormHeader>Edit New Inventory Item</InventoryFormHeader>
            <InventoryForm
                data={data}
                button="Save"
                warehouseId={warehouseId}
            />
        </div>
    );
}