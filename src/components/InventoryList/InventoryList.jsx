import React from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import SortIcon from '../../assets/icons/sort-24px.svg';
import './InventoryList.scss'; 


function InventoryList({ inventory,handleOpenInventoryModal }) { 
    return (
        <section className="inventory-list-section">
            <div className="inventory-list-section__labels">
								<div className="inventory-list-section__label-container inventory-list-section__label-container-inventory">
									<div className="inventory-list-section__label">INVENTORY ITEM</div> 
									<img src={SortIcon} alt="Sort" className="inventory-list-section__label-img" />
								</div>
								<div className="inventory-list-section__label-container inventory-list-section__label-container-category">
									<div className="inventory-list-section__label">CATEGORY</div> 
									<img src={SortIcon} alt="Sort" className="inventory-list-section__label-img" />
								</div>
                <div className="inventory-list-section__label-container inventory-list-section__label-container-status">
									<div className="inventory-list-section__label">STATUS</div>
									<img src={SortIcon} alt="Sort" className="inventory-list-section__label-img"/>
                </div>
                <div className="inventory-list-section__label-container inventory-list-section__label-container-quantity">
									<div className="inventory-list-section__label">QTY</div>
									<img src={SortIcon} alt="Sort" className="inventory-list-section__label-img"/>
                </div>
                <div className="inventory-list-section__label-container inventory-list-section__label-container-warehouse">
									<div className="inventory-list-section__label inventory-list-section__label-warehouse">WAREHOUSE</div>
									<img src={SortIcon} alt="Sort" className="inventory-list-section__label-img"/>
                </div>
                <div className="inventory-list-section__label-container">
									<div className="inventory-list-section__label">ACTIONS</div>
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