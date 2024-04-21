import React from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import SortIcon from '../../assets/icons/sort-24px.svg';
import './InventoryList.scss'; 


function InventoryList({ inventory,handleOpenInventoryModal }) { 
    return (
        <section className="inventory-list-section">
            <div className="inventory-list-section__labels">
                <div className="inventory-list-section__label-container">
                    <span className="inventory-list-section__label">INVENTORY ITEM <img src={SortIcon} alt="Sort" /></span>
                </div>
                <div className="inventory-list-section__label-container">
                    <span className="inventory-list-section__label">CATEGORY <img src={SortIcon} alt="Sort" /></span>
                </div>
                <div className="inventory-list-section__label-container">
                    <span className="inventory-list-section__label">STATUS <img src={SortIcon} alt="Sort" /></span>
                </div>
                <div className="inventory-list-section__label-container">
                    <span className="inventory-list-section__label">QTY <img src={SortIcon} alt="Sort" /></span>
                </div>
                <div className="inventory-list-section__label-container">
                    <span className="inventory-list-section__label">WAREHOUSE <img src={SortIcon} alt="Sort" /></span>
                </div>
                <div className="inventory-list-section__label-container">
                    <span className="inventory-list-section__label">ACTIONS</span>
                </div>
            </div>
            <ul className="inventory-list">
                {inventory.map((item) => (
                    <InventoryItem 
                        key={item.id} 
                        inventory={item} 
                        handleOpenInventoryModal={handleOpenInventoryModal}
                    />
                ))}
            </ul>           
        </section>
    );
}

export default InventoryList;