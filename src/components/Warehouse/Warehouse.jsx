import React from 'react';
import { Link } from 'react-router-dom';
import './Warehouse.scss';
import DeleteButton from "../../assets/icons/delete_outline-24px.svg";
import EditButton from "../../assets/icons/edit-24px.svg";
import Chevron from "../../assets/icons/chevron_right-24px.svg";



function Warehouse() {

	// const { id, warehouseName, address, city, country, contactName, phone, email } = data;

	return (
		
			<div className="warehouse">
				<div className="warehouse-top">
					<div className="warehouse-container">
						<div className="warehouse-location">
							<h3 className="warehouse-label">WAREHOUSE</h3>
							<Link className="warehouse-location__item">Manhattan <img src={Chevron}/></Link>
						</div>
						<div className="warehouse-address">
							<h3 className="warehouse-label">ADDRESS</h3>
							<p className="warehouse-address__item">503 Broadway, New York, USA</p>
						</div>
					</div>

					<div className="warehouse-container">
						<div className="warehouse-contact">
							<h3 className="warehouse-label">CONTACT NAME</h3>
							<p className="warehouse-contact__item">Parmin Aujla</p>
						</div>
						<div className="warehouse-information">
							<h3 className="warehouse-label">CONTACT INFORMATION</h3>
							<p className="warehouse-information__item">+1 (629) 555-0129</p>
							<p className="warehouse-information__item warehouse-information__item-email">paujla@instock.com</p>
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