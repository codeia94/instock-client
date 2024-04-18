import React from 'react';
import Sort from "../../assets/icons/sort-24px.svg";
import "./WarehouseLabel.scss"



function WarehouseLabel() {
	return (
		<div className="warehouseLabel">
			<div className="warehouseLabel-container">
				<div className="warehouseLabel-column">
					<h3 className="warehouseLabel-label"><span>WAREHOUSE</span><button className="warehouseLabel-btn"><img src={Sort} alt="sort" /></button></h3>
				</div>
				<div className=" warehouseLabel-column">
					<h3 className="warehouseLabel-label"><span>ADDRESS</span><button className="warehouseLabel-btn"><img src={Sort} alt="sort" /></button></h3>
				</div>
				<div className=" warehouseLabel-column">
					<h3 className="warehouseLabel-label"><span>CONTACT NAME</span><button className="warehouseLabel-btn"><img src={Sort} alt="sort" /></button></h3>
				</div>
				<div className=" warehouseLabel-column">
					<h3 className="warehouseLabel-label"><span>CONTACT INFORMATION</span><button className="warehouseLabel-btn"><img src={Sort} alt="sort" /></button></h3>
				</div>
				<div className=" warehouseLabel-column">
					<h3 className="warehouseLabel-label"><span>ACTIONS</span></h3>
				</div>
			</div>
		</div>
	);
}

export default WarehouseLabel;