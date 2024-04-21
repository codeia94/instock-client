import React from 'react';
import { Link } from 'react-router-dom';
import './Warehouse.scss';
import DeleteButton from "../../assets/icons/delete_outline-24px.svg";
import EditButton from "../../assets/icons/edit-24px.svg";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import EditWarehouse from '../../pages/EditWarehouse/EditWarehouse';


function Warehouse({ data, handleOpenWarehouseModal }) {

	const { id, warehouse_name, address, city, country, contact_name, contact_phone, contact_email } = data;

	return (
		<div className="wrapper">
			<div className="warehouse">
				<div className="warehouse-top">
					<div className="warehouse-container warehouse-container__one">
						<div className="warehouse-location">
							<h4 className="warehouse-label">WAREHOUSE</h4>
							<Link className="warehouse-location__item">{warehouse_name} <img src={Chevron} alt='chevron'/></Link>
						</div>
						<div className="warehouse-address">
							<h4 className="warehouse-label">ADDRESS</h4>
							<p className="warehouse-address__item">{address}, {city}, {country}</p>
						</div>
					</div>

					<div className="warehouse-container warehouse-container__two">
						<div className="warehouse-contact">
							<h4 className="warehouse-label">CONTACT NAME</h4>
							<p className="warehouse-contact__item">{contact_name}</p>
						</div>
						<div className="warehouse-information">
							<h4 className="warehouse-label">CONTACT INFORMATION</h4>
							<p className="warehouse-information__item">{contact_phone}</p>
							<p className="warehouse-information__item warehouse-information__item-email">{contact_email}</p>
						</div>
					</div>
				</div>
				<div className="warehouse-btm ">
					<div className="warehouse-actions">
						<h4 className="warehouse-actions__label warehouse-label">ACTIONS</h4>
						<button className="warehouse-actions__button">
							<img src={DeleteButton} id={id} alt="Delete Button" onClick={handleOpenWarehouseModal}/>
						</button>
						<Link to={`/warehouses/${id}/edit`}>
							<button className="warehouse-actions__button">
								<img src={EditButton} alt="Edit Button" />
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}


export default Warehouse;