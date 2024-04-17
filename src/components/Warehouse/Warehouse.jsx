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
			<div className="warehouse-container">
				<div className="warehouse-location">
					<h3>WAREHOUSE</h3>
					<Link>Manhattan <img src={Chevron}/></Link>
				</div>
				<div className="warehouse-address">
					<h3>ADDRESS</h3>
					<p>503 Broadway, New York, USA</p>
				</div>
			</div>

			<div className="warehouse-container">
				<div className="warehouse-contact">
						<h3>CONTACT NAME</h3>
						<p>Parmin Aujla</p>
					</div>
					<div className="warehouse-information">
						<h3>CONTACT INFORMATION</h3>
						<p>+1 (629) 555-0129</p>
						<p>paujla@instock.com</p>
					</div>
				</div>
				<div className="warehouse-container">
					<div className="warehouse-actions">
						<h3>ACTIONS</h3>
						<button>
							<img src={DeleteButton} alt="Delete Button" />
							<img src={EditButton} alt="Edit Button" />
						</button>
					</div>
				</div>
		</div>
	);
}


export default Warehouse;