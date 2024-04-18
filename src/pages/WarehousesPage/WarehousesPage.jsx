import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

import axios from 'axios';
import './WarehousesPage.scss';
import Warehouse from "../../components/Warehouse/Warehouse"
import WarehouseLabel from "../../components/WarehouseLabel/WarehouseLabel"
import WarehouseModal from '../../components/WarehouseModal/WarehouseModal';


function Warehouses() {

	const [data, setData] = useState([]);

	const [ warehouseModalOpen, setWarehouseModalOpen ] = useState(false);
    const [ selectedWarehouse, setSelectedWarehouse ] = useState("");
  
    const handleOpenWarehouseModal = (event) => {
        const id = Number(event.target.id);
        setSelectedWarehouse(id);
        setWarehouseModalOpen(true);
    };
  
    const handleCloseWarehouseModal = () => {
        setWarehouseModalOpen(false);
    };
	
	const fetchData = async () => {
		try {
			const response = await axios.get(`http://localhost:8080/api/warehouses`);
			setData(response.data);
		} catch (error) {
			console.error(`Error fetching data: ${error}`);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);



	return(
	<>
		<WarehouseModal
			isOpen={warehouseModalOpen}
			onClose={handleCloseWarehouseModal}
			warehouseId={selectedWarehouse}
			fetchData={fetchData}
		/>
		<section className="warehouses">
			<div className="warehouses-bg">
				<div className="warehouses-container">
					<div className="warehouses-header">
						<h1 className="warehouses-header__title">Warehouses</h1>
					</div>
					<div className="warehouses-form__container">
						<form className="warehouses-form">
							<input type="text" className="warehouses-form__search" placeholder="Search..."/>
						</form>
						<Link>
							<button className="warehouses-form__button">
								+ Add New Warehouse
							</button>
						</Link>
					</div>
				</div>
				<hr></hr>
				<WarehouseLabel className="warehouseLabel-component"/>
				{data.map((warehouse) => {
						return (
							<div className="warehouses-container__flex" key={warehouse.id}>
								<Warehouse 
									data={warehouse}
									className="warehouse-component" 
									handleOpenWarehouseModal={handleOpenWarehouseModal}
								/>
							</div>
						);
					})
				}
				{/* <Warehouse /> */}
			</div>
		</section>
	</>
	)
};


export default Warehouses;