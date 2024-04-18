import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InventoryHeader from '../../components/InventoryHeader/InventoryHeader'; 
import InventoryList from '../../components/InventoryList/InventoryList';
import './InventoryPage.scss';

function InventoryPage() {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        const fetchInventories = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/inventories/`);
                console.log(response.data);
                setInventory(response.data);
            } catch (error) {
                console.error('Error fetching inventory:', error);
            }
        };

        fetchInventories();
    }, []);

    //try doing a useEffect to get the warehouse name from localhost:8080/api/warehouses/:id

    return (
        <div className="inventory-page">
            <InventoryHeader />
            <InventoryList inventory={inventory} />
        </div>
    );
}

export default InventoryPage;
