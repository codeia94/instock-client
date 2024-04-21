import React from "react";
import WarehouseDetails from '../../components/WarehouseDetails/WarehouseDetails';
import axios from "axios";
import './WarehouseDetailsPage.scss';
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Edit from '../../assets/icons/edit-24px.svg';
import BackArrow from '../../assets/icons/arrow_back.svg';

function WarehouseDetailsPage () {

	const { warehouseId } = useParams();
	const [ warehouseDetails, setWarehouseDetails ] = useState({});
	const navigate = useNavigate();


	useEffect(() => {
		const fetchDetails = async () => {

			try {
				const fetchResponse = await axios.get(`http://localhost:8080/api/warehouses/${warehouseId}`);
				setWarehouseDetails(fetchResponse.data);


			} catch (error) {
				console.error(`Error fetching data: ${error}`);
			}
		}
	
		fetchDetails();

	}, [warehouseId]);


	return (
		<section className='warehouse-details'>
			<div className='warehouse-details-header'>
				<div className='warehouse-details-header__nav'>
					<img 
						src={BackArrow}
						alt='Back Arrow' 
						className='warehouse-details-header__nav-arrow'
                        onClick={() => navigate(-1)}/>
					<h1 className='warehouse-details-header__nav-current'>{warehouseDetails.warehouse_name}</h1>
				</div>
				<Link to={`/warehouses/${warehouseId}/edit`} >
					<button className='warehouse-details-header__btn'>
						<img className='warehouse-details-header__btn-edit' src={Edit} alt='Edit'/>
					</button>
				</Link>
			</div>
			<hr></hr>
			<WarehouseDetails details={warehouseDetails} warehouseId={warehouseId}/>

		</section>
	)
}



export default WarehouseDetailsPage;