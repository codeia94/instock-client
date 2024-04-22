import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './InventoryPage.scss';
import InventoryHeader from '../../components/InventoryHeader/InventoryHeader'; 
import InventoryList from '../../components/InventoryList/InventoryList';
import InventoryModal from '../../components/InventoryModal/InventoryModal';

function InventoryPage() {
    const [inventory, setInventory] = useState([]);
    const [inventoryModalOpen, setInventoryModalOpen] = useState(false);
    const [selectedInventory, setSelectedInventory] = useState("");

    const handleOpenInventoryModal = (event) => {
        const id = Number(event.target.id);
        setSelectedInventory(id);
        setInventoryModalOpen(true);
    };
  
    const handleCloseInventoryModal = () => {
        setInventoryModalOpen(false);
    };
  
    const fetchInventories = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/inventories/`);
            setInventory(response.data);
        } catch (error) {
            console.error('Error fetching inventory:', error);
        }
    };

    useEffect(() => {
        fetchInventories();
    }, []);

    return (
        <>
            <InventoryModal
                isOpen={inventoryModalOpen}
                onClose={handleCloseInventoryModal}
                inventoryId={selectedInventory}
                fetchData={fetchInventories}
            />
            <div className="inventory-page">
                <InventoryHeader />
                <InventoryList inventory={inventory} handleOpenInventoryModal={handleOpenInventoryModal} />
            </div>
        </>
    );
}

export default InventoryPage;
