import './WarehouseDetails.scss';
import Delete from '../../assets/icons/delete_outline-24px.svg';
import Edit from '../../assets/icons/edit-24px.svg';


function WarehouseDetails({ details }) {

	const { address, city, contact_name, contact_email, contact_phone, contact_position, country } = details;

	return (
		<section className='warehouse-details__container'>
			<div className='warehouse-address'>
				<h4 className='warehouse-address__label'>WAREHOUSE ADDRESS:</h4>
				<div className='warehouse-address__container'>
					<p className='warehouse-address__container-item'>{address},</p>
					<p className='warehouse-address__container-item'>{city}, {country}</p>
				</div>
			</div>
			
			<div className='details-contact'>
				<div className='details-contact__name'>
					<h4 className='details-contact__name-label'>CONTACT NAME:</h4>
					<p className='details-contact__name-item'>{contact_name}</p>
					<p className='details-contact__name-pos'>{contact_position}</p>
				</div>
				<div className='details-contact__info'>
					<h4 className='details-contact__info-label'>CONTACT INFORMATION:</h4>
					<p className='details-contact__info-num'>{contact_phone}</p>
					<p className='details-contact__info-email'>{contact_email}</p>
				</div>
			</div>
		</section>
	);
}

export default WarehouseDetails;