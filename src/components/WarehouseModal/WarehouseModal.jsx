import { useEffect, useState } from 'react';
import axios from 'axios';
import './WarehouseModal.scss';
import Modal from '../Modal/Modal';

export default function DeleteModal ({ isOpen, onClose, warehouseId, fetchData }) {

  const [ warehouseName, setWarehouseName ] = useState("");

  useEffect(() => {
    const fetchWarehouseName = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/warehouses/${warehouseId}`);
        setWarehouseName(response.data.warehouse_name);
      } catch (error) {
        console.error('Error fetching warehouse name:', error)
      }
    }

    if (isOpen && warehouseId) {
      fetchWarehouseName();
    }
  }, [isOpen, warehouseId]);

  const deleteWarehouse = async (id) => {        
    try {
      await axios.delete(`http://localhost:8080/api/warehouses/${id}`);
      fetchData();
    } catch (error) {
      console.error('Could not delete warehouse', error)
    }
  }
  
  const handleDelete = () => {
    deleteWarehouse(warehouseId);
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} handleDelete={handleDelete}>
        <div className='warehouse-modal__header'>Delete {warehouseName} warehouse?</div>
        <div className='warehouse-modal__message'>
            Please confirm that you'd like to delete the {warehouseName} warehouse from the list of warehouses. You won't be able to undo this action.
        </div>
    </Modal>
  );
};

