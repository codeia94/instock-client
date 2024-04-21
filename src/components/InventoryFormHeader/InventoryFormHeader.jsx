import './InventoryFormHeader.scss'
import { Link } from 'react-router-dom'
import back from '../../assets/icons/arrow_back-24px.svg'

export default function InventoryFormHeader ({ children }) {
    return (
        <div className="inventory-form__header">
            <Link to='/inventory'>
                <img src={back} className="inventory-form__back-icon" alt="Go back"/>
            </Link>
            <h1 className="inventory-form__title">{ children }</h1>
        </div>
    )
}