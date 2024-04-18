import './WarehouseModal.scss';
import axios from 'axios';
import Modal from '../Modal/Modal';

export default function DeleteModal ({ isOpen, onClose, warehouseId, fetchData }) {

  // NEEDS TO BE UPDATED
  // useEffect on component load to get warehouse details by id (warehouseId)
  // assign the response "name" to warehouse variable
  const warehouse = "Washington"

  const deleteWarehouse = async (id) => {        
    try {
      await axios.delete(`http://localhost:8080/api/warehouses/${id}`);
      fetchData();
    } catch (error) {
      console.log('Could not delete warehouse')
    }
  }
  
  const handleDelete = () => {
    deleteWarehouse(warehouseId);
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} handleDelete={handleDelete}>
        <div className='warehouse-modal__header'>Delete {warehouse} warehouse?</div>
        <div className='warehouse-modal__message'>
            Please confirm that you'd like to delete the {warehouse} warehouse from the list of warehouses. You won't be able to undo this action.
        </div>
    </Modal>
  );
};

