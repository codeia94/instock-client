import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../Modal/Modal';

export default function InventoryModal ({ isOpen, onClose, inventoryId, fetchData }) {
  const [inventoryName, setInventoryName] = useState("");

  useEffect(() => {
    const fetchInventoryDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/inventories/${inventoryId}`);
        setInventoryName(response.data.item_name);
      } catch (error) {
        console.error('Error fetching inventory details:', error);
      }
    };

    if (isOpen && inventoryId) {
      fetchInventoryDetails();
    }
  }, [isOpen, inventoryId]);

  const deleteInventory = async () => {        
    try {
      await axios.delete(`http://localhost:8080/api/inventories/${inventoryId}`);
      fetchData();
      onClose();
    } catch (error) {
      console.log('Could not delete inventory:', error);
    }
  }
  
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className='inventory-modal__header'>Delete {inventoryName} inventory</div>
        <div className='inventory-modal__message'>
            Please confirm that you'd like to delete the {inventoryName} inventory from the list. You won't be able to undo this action.
        </div>
        <button onClick={deleteInventory}>Delete</button>
    </Modal>
  );
};