import React from 'react';
import Sort from "../../assets/icons/sort-24px.svg";
import "./WarehouseLabel.scss"



function WarehouseLabel() {
	return (
		<div className="warehouseLabel">
			<div className="warehouseLabel-container">

				<div className="warehouseLabel-column warehouseLabel-column__warehouse">
					<h4 className="warehouseLabel-label">WAREHOUSE</h4>
					<button className="warehouseLabel-btn"><img src={Sort} alt="sort" /></button>
				</div>

				<div className=" warehouseLabel-column warehouseLabel-column__address">
					<h4 className="warehouseLabel-label">ADDRESS</h4>
					<button className="warehouseLabel-btn"><img src={Sort} alt="sort" /></button>
				</div>

				<div className=" warehouseLabel-column warehouseLabel-column__contact">
					<h4 className="warehouseLabel-label">CONTACT NAME</h4>
					<button className="warehouseLabel-btn"><img src={Sort} alt="sort" /></button>
				</div>

				<div className=" warehouseLabel-column warehouseLabel-column__info">
					<h4 className="warehouseLabel-label">CONTACT INFORMATION</h4>
					<button className="warehouseLabel-btn"><img src={Sort} alt="sort" /></button>
				</div>
				
				<div className=" warehouseLabel-column">
					<h4 className="warehouseLabel-label">ACTIONS</h4>
				</div>
			</div>
		</div>
	);
}

export default WarehouseLabel;