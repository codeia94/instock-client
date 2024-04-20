import './EditInventoryPage.scss';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import InventoryFormHeader from '../../components/InventoryFormHeader/InventoryFormHeader';
import InventoryForm from '../../components/InventoryForm/InventoryForm';

export default function EditInventoryPage () {
    
    const { itemId } = useParams();

    const [ data, setData ] = useState("");
    // const [ warehouseList, setWarehouseList ] = useState([]);
    const [ warehouseId, setWarehouseId ] = useState("");

    useEffect(() => {
        const getItem = async () => {
            try {
                const itemResponse = await axios.get(`http://localhost:8080/api/inventories/${itemId}`);
                const itemData = itemResponse.data
                console.log(itemData)
                setData(itemData)
                
                const warehouseResponse = await axios.get(`http://localhost:8080/api/warehouses`);
                const warehouseList = warehouseResponse.data
                console.log(warehouseList)

                const itemWarehouse = warehouseList.find((warehouse) => warehouse.warehouse_name === data.warehouse_name)
                console.log("Warehouse info:", itemWarehouse)
                setWarehouseId(itemWarehouse.id);
        
            } catch (error) {
                console.error(`Error fetching data for ID: ${error}`);   
            }
        }
        getItem();
    }, []);


    if (!data || !warehouseId) {
        return <>Loading data</>
    }

    return (
        <div className="add-inventory">
            <InventoryFormHeader>Edit New Inventory Item</InventoryFormHeader>
            <InventoryForm
                data={data}
                button="Save"
                warehouseId={warehouseId}
            />
        </div>
    );
}