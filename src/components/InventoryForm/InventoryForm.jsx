import './InventoryForm.scss';
import error from '../../assets/icons/error-24px.svg';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function InventoryForm () {
    const navigate = useNavigate();

    const [ item, setItem ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ inStock, setInStock ] = useState(true);
    const [ quantity, setQuantity ] = useState("");
    const [ warehouse, setWarehouse ] = useState("");
    const [ error, setError ] = useState(false);
    const [ activeInput, setActiveInput ] = useState(null);

    const handleChangeItem = (event) => {
        setItem(event.target.value);
    }

    const handleChangeDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
    }

    const handleChangeSatus = (event) => {
        setInStock(event.target.value);
    }

    const handleChangeQuantity = (event) => {
        // put this in validation function with a check for number
        // if (event.target.value <= 0) {
        //     setError(true);
        // }
        setQuantity(event.target.value);
    }

    const handleChangeWarehouse = (event) => {
        // validation here for making sure the warehouse exists?
        setWarehouse(event.target.value);
    }

    const handleFocus = (input) => {
        setActiveInput(input);
    }

    // const isValidQuantity

    // const isFormValid

    // const handleSubmit
        const requestBody = {
            "warehouse_id": warehouse,
            "item_name": item,
            "description": description,
            "category": category,
            "status": inStock,
            "quantity": quantity
        }
    return (
        <form className='inventory-form'>
            <section className='inventory-form__content'>
                <div className='inventorty-form__section'>
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
                    <div className='inventory-form__error-container'>
                        {error && !item && (
                            <p className='inventory-form__error-message'>
                                <img className='inventory-form error-icon' src={error}></img>
                                Item name is required
                            </p>
                        )}
                    </div>

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
                    <div className='inventory-form__error-container'>
                        {error && !description && (
                            <p className='inventory-form__error-message'>
                                <img className='inventory-form error-icon' src={error}></img>
                                Description is required
                            </p>
                        )}
                    </div>

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
                    <div className='inventory-form__error-container'>
                        {error && !category && (
                            <p className='inventory-form__error-message'>
                                <img className='inventory-form error-icon' src={error}></img>
                                Category is required
                            </p>
                        )}
                    </div>
                </div>

                <div className='inventorty-form__section'>
                    <h2 className='inventory-form__subheader'>Item Availability</h2>

                    <label className='inventory-form__label' htmlFor='status'>Status</label>
                    <input
                        type='radio'
                        id='in-stock'
                        name='status'
                        value="In Stock"
                        onFocus={() => setActiveInput('in-stock')}
                        onSelect={handleChangeSatus}
                        checked
                    />
                    <label htmlFor='in-stock'>In stock</label>
                    <input
                        type='radio'
                        id='out-of-stock'
                        name='status'
                        value="Out of Stock" // how does this work with data in state??
                        onFocus={() => setActiveInput('out-of-stock')}
                        onSelect={handleChangeSatus}
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
                            ${error && !quantity ? 'inventory-form__input--error' : ""}
                            ${activeInput === 'quantity' ? 'inventory-form__input--active' : ""}`
                        }
                    />
                    <div className='inventory-form__error-container'>
                        {error && !quantity && (
                            <p className='inventory-form__error-message'>
                                <img className='inventory-form error-icon' src={error}></img>
                                Quantity is required
                            </p>
                        )}
                    </div>

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
                        <option value="Boston">Boston</option>
                        <option value="Brooklyn">Brooklyn</option>
                        <option value="Jersey">Jersey</option>
                        <option value="Miami">Miami</option>
                        <option value="Santa Monica">Santa Monica</option>
                        <option value="Seattle">Seattle</option>
                        <option value="SF">SF</option>
                        <option value="Washington">Washington</option>
                    </select>
                </div>
            </section>
            <section className='inventory-form__buttons'>
                <div className='inventory-form__button-wrapper' onClick={() => navigate('/inventory')}>
                    <ButtonSecondary>Cancel</ButtonSecondary>
                </div>
                <div className='inventory-form__button-wrapper'>
                    <ButtonPrimary>+ Add Item</ButtonPrimary>
                </div>
            </section>
        </form>
    );
}