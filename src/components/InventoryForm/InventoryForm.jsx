import './InventoryForm.scss';
import ErrorIcon from '../../assets/icons/error-24px.svg';
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
    const [ quantity, setQuantity ] = useState("");
    const [ warehouse, setWarehouse ] = useState("");
    const [ error, setError ] = useState(false);
    const [ activeInput, setActiveInput ] = useState(null);

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
        console.log(item);
    }
    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
        console.log(description);
    }
    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
        console.log(category);
    }
    const handleChangeSatus = (event) => {
        setInStock(event.target.value);
        if (inStock === "Out of stock") {
            setQuantity("0");
        }
        console.log(inStock);
    }
    const handleChangeQuantity = (event) => {
        setQuantity(event.target.value);
        console.log(quantity);
    }
    const handleChangeWarehouse = (event) => {
        setWarehouse(event.target.value);
        console.log(warehouse);
    }
    const handleFocus = (input) => {
        setActiveInput(input);
    }

    // Validation functions
    const isValidQuantity = () => {
        const num = Number(quantity);
        if (!num) {
            return false;
        }
        if (num < 0) {
            return false;
        }
        return true;
    }

    const isFormValid = () => {
        if ( !item || !description || !category || !inStock || !quantity || !warehouse ) {
            setError(true);
            return false;
        }

        if (!isValidQuantity) {
            setError(true);
            return false;
        }
    }

    // Submit form
    const handleSubmit = async (event) => {
        event.preventDefault();
        isFormValid();
        if (isFormValid) {
            try {
                console.log("Sending post request...")
                const requestBody = {
                    warehouse_id: warehouse,
                    item_name: item,
                    description: description,
                    category: category,
                    status: inStock,
                    quantity: quantity
                }
                console.log(requestBody);
            } catch (error) {
                console.log("Error:", error);
            }
        } else {
            alert("Failed to add inventory item")
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
                        onFocus={() => handleFocus('name')}
                        className={
                            `inventory-form__input 
                            ${error && !item ? "inventory-form__input--error" : ""}
                            ${activeInput === "name" ? "inventory-form__input--active" : ""}`
                        }
                    />
                    <FormError errorState={error} field={item}>Item is required</FormError>

                    <label className='inventory-form__label' htmlFor='description'>Description</label>
                    <textarea
                        name='description'
                        value={description}
                        onChange={handleChangeDescription}
                        onFocus={() => handleFocus('description')}
                        placeholder='Please enter a brief description...'
                        className={
                            `inventory-form__textarea
                            ${error && !description ? "inventory-form__textarea--error" : ""}
                            ${activeInput === "name" ? "inventory-form__textarea--active" : ""}`
                        }
                    />
                    <FormError errorState={error} field={description}>Item is required</FormError>


                    <label className='inventory-form__label' htmlFor='category'>Category</label>
                    <select
                        name='category'
                        value={category}
                        onChange={handleChangeCategory}
                        onFocus={() => handleFocus('category')}
                        className={
                            `inventory-form__input
                            ${error && !category ? 'inventory-form__input--error' : ""}
                            ${activeInput === 'category' ? 'inventory-form__input--active' : ""}`
                        }
                    >
                        <option value="">Please select</option>
                        <option value="accessories">Accessories</option>
                        <option value="apparel">Apparel</option>
                        <option value="electronics">Electronics</option>
                        <option value="gear">Gear</option>
                        <option value="health">Health</option>
                    </select>
                    <FormError errorState={error} field={category}>Item is required</FormError>

                </div>

                <div className='inventory-form__section inventory-form__section--2'>
                    <h2 className='inventory-form__subheader'>Item Availability</h2>

                    <label className='inventory-form__label' htmlFor='status'>Status</label>
                    <input
                        type='radio'
                        id='in-stock'
                        name='status'
                        value="In Stock"
                        onFocus={() => setActiveInput('in-stock')}
                        onClick={handleChangeSatus}
                        />
                    <label htmlFor='in-stock'>In stock</label>
                    <input
                        type='radio'
                        id='out-of-stock'
                        name='status'
                        value="Out of stock"
                        onFocus={() => setActiveInput('out-of-stock')}
                        onClick={handleChangeSatus}
                        defaultChecked
                    />
                    <label htmlFor='out-of-stock'>Out of stock</label>

                    <label className='inventory-form__label' htmlFor='quantity'>Quantity</label>
                    <input
                        type='text'
                        name='quantity'
                        value={quantity}
                        onChange={handleChangeQuantity}
                        onFocus={() => setActiveInput('quantity')}
                        placeholder='0'
                        className={
                            `inventory-form__input
                            ${inStock === "Out of Stock" ? 'inventory-form__input--hidden' : ""}
                            ${error && !quantity ? 'inventory-form__input--error' : ""}
                            ${activeInput === 'quantity' ? 'inventory-form__input--active' : ""}`
                        }
                    />
                    {error && !quantity && (
                        <span className='inventory-form__error-container'>
                            <img className='inventory-form__error-icon' src={ErrorIcon} alt='ErrorIcon'></img>
                            <p className='inventory-form__error-message'>Quantity is required</p>
                        </span>
                    )}

                    <label htmlFor='warehouse' className='inventory-form__label'>Warehouse</label>
                    <select
                        name='warehouse'
                        value={warehouse}
                        onChange={handleChangeWarehouse}
                        onFocus={() => handleFocus('warehouse')}
                        className={
                            `inventory-form__input
                            ${error && !warehouse ? 'inventory-form__input--error' : ""}
                            ${activeInput === 'warehouse' ? 'inventory-form__input--active' : ""}`
                        }
                    >
                        <option value="">Please select</option>
                        {warehouseList.map((warehouse)=>{
                            return (
                            <option 
                                key={warehouse.id} 
                                value={warehouse.id}
                            >{warehouse.warehouse_name}
                            </option>
                            )})
                        }
                    </select>
                    <FormError errorState={error} field={warehouse}>Item is required</FormError>

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