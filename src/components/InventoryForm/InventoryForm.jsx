import './InventoryForm.scss';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import FormError from '../FormError/FormError';

export default function InventoryForm () {
    const navigate = useNavigate();

    const [ warehouseList, setWarehouseList ] = useState([]);
    const [ item, setItem ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ inStock, setInStock ] = useState("Out of stock");
    const [ quantity, setQuantity ] = useState("0");
    const [ warehouse, setWarehouse ] = useState("");
    const [ error, setError ] = useState(false);
    const [ quantityValid, setQuantityValid ] = useState(true);
    const [ warehouseMenuVisible, setWarehouseMenuVisible ] = useState(false);
    const [ warehouseDropdownLable, setWarehouseDropdownLabel ] = useState("Please select");
    const [ categoryMenuVisible, setCategoryMenuVisible ] = useState(false);
    const [ categoryDropdownLable, setCategoryDropdownLabel ] = useState("Please select")

    // Get warehouse list for dropdown menu
    useEffect(() => {
        const getWarehouses = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/warehouses`);
                setWarehouseList(response.data);
                console.log(warehouseList);
            } catch (error) {
                console.error(`Error fetching data: ${error}`);
            }
        }
        getWarehouses();
    }, [])

    // Change handlers
    const handleChangeItem = (event) => {
        setItem(event.target.value);
    }
    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    }
    const handleChangeCategory = (event) => {
        setCategory(event.target.id);
        setCategoryMenuVisible(false);
        setCategoryDropdownLabel(event.target.id)
    }
    const handleChangeSatus = (event) => {
        setInStock(event.target.value)
    }

    useEffect(() => {
        console.log(`inStock set to ${inStock}`);
        if (inStock === "Out of stock") {
            setQuantity("0");
        }
    }, [inStock]);

    useEffect (() => {
        const quantityUpdate = isValidQuantity();
        setQuantityValid(quantityUpdate);
        console.log(quantityUpdate);
    }, [quantity, inStock]);

    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value);
        console.log(quantity);
    }
    const handleChangeWarehouse = (event) => {
        console.log(event.target.value)
        setWarehouse(event.target.value);
        setWarehouseMenuVisible(false);
        setWarehouseDropdownLabel(event.target.id)
        console.log(warehouse);
    }
    const handleWarehouseDropdown = () => {
        if (!warehouseMenuVisible) {
            setWarehouseMenuVisible(true)
            setWarehouseDropdownLabel("Please select")
            setWarehouse("")
        } else {
            setWarehouseMenuVisible(false)
        }
    }

    const handleCategoryDropdown = () => {
        if (!categoryMenuVisible) {
            setCategoryMenuVisible(true)
            setCategoryDropdownLabel("Please select")
            setCategory("")
        } else {
            setCategoryMenuVisible(false)
        }
    }

    // Validation functions
    const isValidQuantity = () => {
        const num = Number(quantity);
        console.log(num);
        if ((inStock === "In stock") && (num <= 0 || !num)) {
            console.log("validating for state 'In Stock'")
            setQuantityValid(false);
            return false;
        }
        if ((inStock === "Out of stock") && num > 0) {
            console.log("validating for state 'Out of Stock'")
            setQuantityValid(false);
            return false;
        }
        return true;
    }

    const isFormValid = () => {
        if ( !item || !description || !category || !inStock || !quantity || !warehouse ) {
            setError(true);
            return false;
        }

        if (!quantityValid) {
            setError(true);
            return false;
        }
    }

    // Submit form
    const handleSubmit = async (event) => {
        event.preventDefault();
        const valid = isFormValid();

        if (!valid) {
            return;
        } else {
            try {
                console.log("Sending post request...")
                const requestBody = {
                    warehouse_id: Number(warehouse),
                    item_name: item,
                    description: description,
                    category: category.toLocaleLowerCase(),
                    status: inStock,
                    quantity: quantity
                }
                console.log(requestBody);
            } catch (error) {
                console.log("Error:", error);
            }
    }
    }

    return (
        <form className='inventory-form'>
            <section className='inventory-form__content'>
                <div className='inventory-form__section'>
                    <h2 className='inventory-form__subheader'>Item Details</h2>
                    
                    <label className='inventory-form__label' htmlFor='name'>Item Name</label>
                    <input 
                        type='text'
                        name='name'
                        value={item}
                        placeholder='Item Name'
                        onChange={handleChangeItem}
                        className={
                            `inventory-form__input 
                            ${error && !item ? "inventory-form__input--error" : ""}`
                        }
                    />
                    <FormError errorState={error} field={item}>Item is required</FormError>

                    <label className='inventory-form__label' htmlFor='description'>Description</label>
                    <textarea
                        name='description'
                        value={description}
                        onChange={handleChangeDescription}
                        placeholder='Please enter a brief description...'
                        className={
                            `inventory-form__textarea
                            ${error && !description ? "inventory-form__textarea--error" : ""}`
                        }
                    />
                    <FormError errorState={error} field={description}>Item is required</FormError>


                    <label className='inventory-form__label' htmlFor='category'>Category</label>
                    <div
                        className={
                            `inventory-form__input inventory-form__input--dropdown 
                            ${error && !category ? 'inventory-form__input--error' : ""}`
                        }
                    >
                        <div 
                            value=""
                            className='inventory-form__option'
                            onClick={handleCategoryDropdown}
                        >{categoryDropdownLable}</div>
                        <div className={
                            `inventory-form__dropdown
                            ${!categoryMenuVisible ? 'inventory-form__dropdown--hidden' : ""}`
                            }
                        >
                            <div id="Accessories" className='inventory-form__option' onClick={handleChangeCategory}>Accessories</div>
                            <div id="Apparel" className='inventory-form__option' onClick={handleChangeCategory}>Apparel</div>
                            <div id="Electronics" className='inventory-form__option' onClick={handleChangeCategory}>Electronics</div>
                            <div id="Gear" className='inventory-form__option' onClick={handleChangeCategory}>Gear</div>
                            <div id="Health" className='inventory-form__option' onClick={handleChangeCategory}>Health</div>                    
                        </div>
                    </div>
                    <FormError errorState={error} field={category}>Item is required</FormError>

                </div>

                <div className='inventory-form__section inventory-form__section--2'>
                    <h2 className='inventory-form__subheader'>Item Availability</h2>

                    <label className='inventory-form__label' htmlFor='status'>Status</label>
                    <div className='inventory-form__radio-container'>
                        <div className='inventory-form__radio-option'>
                            <input
                                type='radio'
                                id='in-stock'
                                name='status'
                                value="In stock"
                                onClick={handleChangeSatus}
                                />
                            <label htmlFor='in-stock' className='inventory-form__radio'>In stock</label>
                        </div>
                        <div className='inventory-form__radio-option'>
                            <input
                                type='radio'
                                id='out-of-stock'
                                name='status'
                                value="Out of stock"
                                onClick={handleChangeSatus}
                                defaultChecked
                            />
                            <label htmlFor='out-of-stock' className='inventory-form__radio'>Out of stock</label>
                        </div>
                    </div>
                    <div 
                        className={
                            `inventory-form__quantity 
                            ${inStock === "Out of stock" ? 'inventory-form__quantity--hidden' : ""}`
                        }>
                        <label className='inventory-form__label' htmlFor='quantity'>Quantity</label>
                        <input
                            type='text'
                            name='quantity'
                            value={quantity}
                            onChange={handleChangeQuantity}
                            placeholder='0'
                            className={
                                `inventory-form__input
                                ${error && !quantity ? 'inventory-form__input--error' : ""}`
                            }
                            />
                    </div>
                    <FormError errorState={error} field={quantityValid}>Invalid quantity</FormError>

                    <label htmlFor='warehouse' className='inventory-form__label'>Warehouse</label>
                    <div
                        className={
                            `inventory-form__input inventory-form__input--dropdown 
                            ${error && !warehouse ? 'inventory-form__input--error' : ""}`
                        }
                    >
                        <div 
                            value=""
                            className='inventory-form__option'
                            onClick={handleWarehouseDropdown}
                        >{warehouseDropdownLable}</div>
                        <div className={
                            `inventory-form__dropdown
                            ${!warehouseMenuVisible ? 'inventory-form__dropdown--hidden' : ""}`
                            }
                        >
                            {warehouseList
                                .map((warehouse)=>{
                                return (
                                <div 
                                    key={warehouse.id} 
                                    name={warehouse.id}
                                    id={warehouse.warehouse_name}
                                    className={'inventory-form__option'}
                                    onClick={handleChangeWarehouse}
                                >{warehouse.warehouse_name}
                                </div>
                                )})
                            }
                        </div>
                    </div>
                    <FormError errorState={error} field={warehouse}>Warehouse is required</FormError>

                </div>
            </section>
            <section className='inventory-form__buttons'>
                <div 
                    className='inventory-form__button-wrapper' 
                    onClick={() => navigate('/inventory')}
                >
                    <ButtonSecondary>Cancel</ButtonSecondary>
                </div>
                <div
                    className='inventory-form__button-wrapper'
                    onClick={handleSubmit}
                >
                    <ButtonPrimary>+ Add Item</ButtonPrimary>
                </div>
            </section>
        </form>
    );
}