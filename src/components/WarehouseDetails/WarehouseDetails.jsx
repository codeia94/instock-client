import './WarehouseDetails.scss';
import Delete from '../../assets/icons/delete_outline-24px.svg';
import Edit from '../../assets/icons/edit-24px.svg';
export default WarehouseDetails;import './WarehouseDetails.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import InventoryList from '../InventoryList/InventoryList';

function WarehouseDetails({ details }) {

	const { address, city, contact_name, contact_email, contact_phone, contact_position, country } = details;

	const [ inventory, setInventory ] = useState([]);

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
	}, [warehouseId])

	return (
		<section className='warehouse-details__container'>
			<div className='warehouse-address'>
				<h4 className='warehouse-address__label'>WAREHOUSE ADDRESS:</h4>
				<div className='warehouse-address__container'>
					<p className='warehouse-address__container-item'>{address},</p>
					<p className='warehouse-address__container-item'>{city}, {country}</p>
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
<InventoryList inventory={inventory}/>
</section>
</div>
);
}
	



