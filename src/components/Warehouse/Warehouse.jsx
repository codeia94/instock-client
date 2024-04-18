import React from 'react';
import { Link } from 'react-router-dom';
import './Warehouse.scss';
import DeleteButton from "../../assets/icons/delete_outline-24px.svg";
import EditButton from "../../assets/icons/edit-24px.svg";
import Chevron from "../../assets/icons/chevron_right-24px.svg";

//import react component



function Warehouse({ data }) {

	const { id, warehouse_name, address, city, country, contact_name, contact_phone, contact_email } = data;

	return (
		
			<div className="warehouse">
				<div className="warehouse-top">
					<div className="warehouse-container">
						<div className="warehouse-location">
							<h3 className="warehouse-label">WAREHOUSE</h3>
							<Link className="warehouse-location__item">{warehouse_name} <img src={Chevron}/></Link>
						</div>
						<div className="warehouse-address">
							<h3 className="warehouse-label">ADDRESS</h3>
							<p className="warehouse-address__item">{address}, {city}, {country}</p>
						</div>
					</div>

					<div className="warehouse-container">
						<div className="warehouse-contact">
							<h3 className="warehouse-label">CONTACT NAME</h3>
							<p className="warehouse-contact__item">{contact_name}</p>
						</div>
						<div className="warehouse-information">
							<h3 className="warehouse-label">CONTACT INFORMATION</h3>
							<p className="warehouse-information__item">{contact_phone}</p>
							<p className="warehouse-information__item warehouse-information__item-email">{contact_email}</p>
						</div>
					</div>
				</div>
				<div className="warehouse-btm warehouse-container">
					<div className="warehouse-actions">
						<h3 className="warehouse-actions__label warehouse-label">ACTIONS</h3>
						<button className="warehouse-actions__button">
							<img src={DeleteButton} alt="Delete Button" />
						</button>
						<button className="warehouse-actions__button">
							<img src={EditButton} alt="Edit Button" />
						</button>
					</div>
				</div>
			</div>

	);
}


export default Warehouse;