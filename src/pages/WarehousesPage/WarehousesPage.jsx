import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

import axios from 'axios';
import './WarehousesPage.scss';
import Warehouse from "../../components/Warehouse/Warehouse"


function Warehouses() {

	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(`http://localhost:8080/warehouses`);
				setData(response.data);
			} catch (error) {
				console.error(`Error fetching data: ${error}`);
			}
		}

		fetchData();
	}, []);



	return(
		<section className="warehouses">
			<div className="warehouses-bg">
				<div className="warehouses-container">
					<div className="warehouses-header">
						<h1 className="warehouses-header__title">Warehouses</h1>
					</div>
					<form className="warehouses-form">
						<input type="text" className="warehouses-form__search" placeholder="Search..."/>
					</form>
					<Link>
						<button className="warehouses-form__button">
							+ Add New Warehouse
						</button>
					</Link>
				</div>
				<hr></hr>
				{/* {data.map((warehouse) => {
					return <Warehouse key={warehouse.id} data={warehouse}/>
				})} */}
				<Warehouse />
				<hr></hr>
			</div>
		</section>
	)
};


export default Warehouses;