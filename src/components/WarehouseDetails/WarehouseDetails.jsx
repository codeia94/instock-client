import './WarehouseDetails.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InventoryList from '../InventoryList/InventoryList';
import InventoryModal from '../InventoryModal/InventoryModal';


function WarehouseDetails({ details, warehouseId }) {
	const { address, city, contact_name, contact_email, contact_phone, contact_position, country } = details;

	const [ inventory, setInventory ] = useState([]);
	const [ inventoryModalOpen, setInventoryModalOpen ] = useState(false);
	const [ selectedInventoryId, setSelectedInventoryId ] = useState("");

	useEffect(() => {
		const fetchInventory = async () => {
			try {
				const response = await axios.get(`http://localhost:8080/api/warehouses/${warehouseId}/inventories`);
				setInventory(response.data);
			} catch (error) {
				console.error(`Error fetching data: ${error}`);
			}
		};

		fetchInventory();
	}, [warehouseId]);

	const handleOpenInventoryModal = (event) => {
		setSelectedInventoryId(event.target.id);
		console.log(selectedInventoryId);
		setInventoryModalOpen(true);
	};

	const handleCloseInventoryModal = () => {
		setInventoryModalOpen(false);
	
	}

	return (
		<div>
			<section className='warehouse-details__container'>
				<div className='warehouse-address__container'>
					<h4 className='warehouse-address__label'>WAREHOUSE ADDRESS:</h4>
					<div className='warehouse-address__list'>
						<p className='warehouse-address__list-item'>{address},</p>
						<p className='warehouse-address__list-item'>{city}, {country}</p>
					</div>
				</div>
				
				<div className='details-contact'>
					<div className='details-contact__name'>
						<h4 className='details-contact__name-label'>CONTACT NAME:</h4>
						<p className='details-contact__name-item'>{contact_name}</p>
						<p className='details-contact__name-pos'>{contact_position}</p>
					</div>
					<div className='details-contact__info'>
						<h4 className='details-contact__info-label'>CONTACT INFORMATION:</h4>
						<p className='details-contact__info-num'>{contact_phone}</p>
						<p className='details-contact__info-email'>{contact_email}</p>
					</div>
				</div>
			</section>

			<section className='inventory-container__list'>
				<InventoryList inventory={inventory} handleOpenInventoryModal={handleOpenInventoryModal}/>
			</section>
			<InventoryModal 
        isOpen={inventoryModalOpen} 
        onClose={handleCloseInventoryModal} 
        inventoryId={selectedInventoryId} 
        fetchData={setInventory} 
      />
		</div>
	);
}

export default WarehouseDetails;