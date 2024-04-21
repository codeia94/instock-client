import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../Modal/Modal';
import './InventoryModal.scss';

export default function InventoryModal ({ isOpen, onClose,inventoryId, fetchData }) {
  const [inventoryName, setInventoryName] = useState("");
 

  useEffect(() => {
    const fetchInventoryName = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/inventories/${inventoryId}`);
        setInventoryName(response.data.item_name);
        console.log(inventoryName);
      } catch (error) {
        console.error('Error fetching inventory name:', error);
      }
    };

    if (isOpen && inventoryId) {
      fetchInventoryName();
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
  const handleDelete = () => {
    deleteInventory(inventoryId);
    onClose();
  }
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} handleDelete={handleDelete}>
        <div className='inventory-modal__header'>Delete {inventoryName} inventory</div>
        <div className='inventory-modal__message'>
            Please confirm that you'd like to delete the {inventoryName} inventory from the list. You won't be able to undo this action.
        </div>
    </Modal>
  );
};