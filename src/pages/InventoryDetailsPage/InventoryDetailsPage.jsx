import React from "react";
import InventoryDetails from '../../components/InventoryDetails/InventoryDetails';
import axios from "axios";
import './InventoryDetailsPage.scss';
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom';
import Edit from '../../assets/icons/edit-24px.svg';
import BackArrow from '../../assets/icons/arrow_back.svg';

function InventoryDetailsPage () {
	const { itemId } = useParams();
	const [ inventoryDetails, setInventoryDetails ] = useState('');
    const navigate = useNavigate();

	useEffect(() => {
		const fetchDetails = async () => {

			try {
				const response = await axios.get(`http://localhost:8080/api/inventories/${itemId}`);
				setInventoryDetails(response.data);
                console.log(response.data);

			} catch (error) {
				console.error(`Error fetching data: ${error}`);
			}
		}

		fetchDetails();
	}, [itemId]);

    return (
        <section className='inventory-details-page'>
            <div className='inventory-details-header'>
                <div className='inventory-details-header__nav'>
                    <img 
                        src={BackArrow} 
                        alt='Back Arrow' 
                        className='inventory-details-header__nav-arrow'
                        onClick={() => navigate(-1)}/>
                    <h1 className='inventory-details-header__nav-current'>{inventoryDetails.item_name}</h1>
                </div>
                <Link to={`/inventory/${itemId}/edit`} className='inventory-details-header__btn-container'>
                    <button className='inventory-details-header__btn'>
                        <div className='inventory-details-header__btn-text'>Edit</div>
                        <img className='inventory-details-header__btn-edit' src={Edit} alt='Edit'/>
                    </button>
                </Link>
            </div>
            <hr />
            <InventoryDetails details={inventoryDetails} />
        </section>
    );
 }

export default InventoryDetailsPage;