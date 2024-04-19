import React from "react";
import InventoryDetails from '../../components/InventoryDetails/InventoryDetails';
import axios from "axios";
import './InventoryDetailsPage.scss';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Edit from '../../assets/icons/edit-24px.svg';
import BackArrow from '../../assets/icons/arrow_back.svg';

function InventoryDetailsPage () {

	const { InventoryId } = useParams();
	const [ InventoryDetails, setInventoryDetails ] = useState('');

	useEffect(() => {
		const fetchDetails = async () => {

			try {
				const response = await axios.get(`http://localhost:8080/api/inventories/${InventoryId}`);
				setInventoryDetails(response.data);

			} catch (error) {
				console.error(`Error fetching data: ${error}`);
			}
		}

		fetchDetails();

	}, [InventoryId]);


	return (
		<section className='Inventory-details'>
			<div className='Inventory-details-header'>
				<div className='Inventory-details-header__nav'>
					<Link to='/Inventory' className='Inventory-details-header__nav-arrow'>
						<img src={BackArrow} alt='Back Arrow'/>
					</Link>
					<h1 className='Inventory-details-header__nav-current'>{InventoryDetails.Inventory_name}</h1>
				</div>
				<button className='Inventory-details-header__btn'>
					<img className='Inventory-details-header__btn-edit' src={Edit} alt='Edit'/>
				</button>
			</div>
			<hr></hr>
			<InventoryDetails details={InventoryDetails}/>
		</section>
	)
}

export default InventoryDetailsPage;