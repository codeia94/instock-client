import './InventoryDetails.scss';

function InventoryDetails({ details }) {

	const {warehouse_name, description, category, status, quantity} = details;
    const statusClass = status ? (status.toLowerCase() === 'in stock' ? 'in-stock' : 'out-of-stock') : '';

	return (
		<section className='inventory-details'>
            <div className='inventory-details__container1'> 
                <div className='inventory-description'>
                    <h4 className='inventory-description__label'>ITEM DESCRIPTION:</h4>
                    <p className='inventory-description__content'>{description}</p>
                </div>
                <div className='inventory-category'>
                    <h4 className='inventory-category__label'>CATEGORY:</h4>
                    <p className='inventory-category__content'>{category}</p>
                </div>
            </div>

			<div className='inventory-details__container2'>
                <div className='inventory-details__status-and-quantity'>
                    <div className='inventory-status'>
                        <h4 className='inventory-status__label'>STATUS:</h4>
                        <p className='inventory-status__content'>{statusClass}</p>
                    </div>
                    <div className='inventory-quantity'>
                        <h4 className='inventory-quantity__label'>QUANTITY:</h4>
                        <p className='inventory-quantity__content'>{quantity}</p>
                    </div>
                </div>
                <div className='inventory-warehouse'>
                    <h4 className='inventory-warehouse__label'>WAREHOUSE:</h4>
                    <p className='inventory-warehouse__content'>{warehouse_name}</p>
                </div>
			</div>
		</section>
	);
}

export default InventoryDetails;