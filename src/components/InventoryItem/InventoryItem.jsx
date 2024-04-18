import React from 'react';
import './InventoryItem.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as DeleteIcon } from '../../assets/icons/delete_outline-24px.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/edit-24px.svg';
import ChevronRightIcon from '../../assets/icons/chevron_right-24px.svg';

function InventoryItem({inventory}) {

    //const { id, item_name, description, category, status, quantity, warehouse } = inventory;

    return (
        <div className="inventory-item">
            <div className="inventory-item__main-container">
                <div className="inventory-item__details-container">
                    <div className="inventory-item__name-container">
                        <p className="inventory-item__label-mobile">INVENTORY ITEM</p>
                        <Link to={``} className="inventory-item__name-sub-container">
                            <p className="inventory-item__name">{inventory.item_name}</p>
                            <img src={ChevronRightIcon} alt="More details" className="inventory-item__chevron" />
                        </Link>
                    </div>
                    <div className="inventory-item__category-container">
                        <p className="inventory-item__label-mobile">CATEGORY</p>
                        <p className="inventory-item__category">{inventory.category}</p>
                    </div>
                </div>
                <div className="inventory-item__info-container">
                    <div className="inventory-item__status-container">
                        <p className="inventory-item__label-mobile">STATUS</p>
                        <p className="inventory-item__status">{inventory.status}</p>
                    </div>
                    <div className="inventory-item__quantity-container">
                        <p className="inventory-item__label-mobile">QTY</p>
                        <p className="inventory-item__quantity">{inventory.quantity}</p>
                    </div>
                    <div className="inventory-item__warehouse-container">
                        <p className="inventory-item__label-mobile">WAREHOUSE</p>
                        <p className="inventory-item__warehouse">{inventory.warehouse_name}</p>
                    </div>
                </div>
            </div>
            <div className="inventory-item__actions">
                <button aria-label="Delete item" className="inventory-item__delete">
                    <DeleteIcon />
                </button>
                <button aria-label="Edit item" className="inventory-item__edit">
                    <EditIcon />
                </button>
            </div>
        </div>
    );
}

export default InventoryItem;
