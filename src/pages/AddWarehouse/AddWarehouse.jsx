import './AddWarehouse.scss';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import back from "../../assets/icons/arrow_back.svg";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary/ButtonSecondary";
import FormError from "../../components/FormError/FormError";

function AddWarehouse(){
    const navigate = useNavigate();
    const [warehouse, setWarehouse] = useState("");
    const [address, setAddress] = useState("");
    const [city,setCity] = useState("");
    const [country,setCountry] = useState("");
    const [name,setName] =  useState("");
    const [position,setPosition] =  useState("");
    const [phone,setPhone] =  useState("");
    const [email,setEmail] = useState("");
    const [error, setError] = useState(false);
    const [activeInput, setActiveInput] = useState(null);

    const handleChangeWarehouse = (event) => {
        setWarehouse(event.target.value);
      };
      const handleChangeAddress = (event) => {
        setAddress(event.target.value);
      };
      const handleChangeCity = (event) => {
        setCity(event.target.value);
      };
      const handleChangeCountry = (event) => {
        setCountry(event.target.value);
      };
      const handleChangeName = (event) => {
        setName(event.target.value);
      };
      const handleChangePosition = (event) => {
        setPosition(event.target.value);
      };
      const handleChangePhone = (event) => {
        const phoneNumber = event.target.value;
        setPhone(phoneNumber);
       
        const isValid = isValidPhoneNumber(phoneNumber);
        
        setError(!isValid);
      };
      const handleChangeEmail = (event) => {
        setEmail(event.target.value);
        if (!isValidEmail(event.target.value)) {
            setError(true);
        }
        else
        {
            setError(false);
        }
      };

      const handleFocus = (input) => {
        setActiveInput(input);
     };

      const isValidEmail = () =>{       
        if(typeof email !== 'string'){
            return false;
        }
      
        const atIndex = email.indexOf('@');
        if (atIndex == -1){

            return false;  //if @ not found in the email
        }
        if (atIndex === 0 || atIndex === email.length-1){
            return false;  //if email begins with @ or ends with @
        }
         
        const afterAt= email.substring(atIndex+1);
        const dotIndex = afterAt.indexOf('.');
    
        if (dotIndex == -1){
            return false;  //if . not found in the email after @
        }
        if (dotIndex === 0 || dotIndex === afterAt.length - 1){
            return false;  //if . is at begining or end at remaining part
        }
        return true;
    };
    
    const isValidPhoneNumber = () => {
        // Regular expression to match a valid phone number
        const phoneRegex = /^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}-\d{4}$/;
        return phoneRegex.test(phone);
    };

    const isFormValid = () => {
        if (!warehouse|| !address || !city || !country || !name || !position || !phone || !email ) {
            setError(true);
          return false;
        }
        
        if (!isValidEmail()) {
            setError(true);  
          return false;
        }
       
    
        if (!isValidPhoneNumber()) {
            setError(true);
          return false;
        }
        setError(false);
        return true;
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        if(!isFormValid())
        {
            return;
        }
        if (isFormValid()) {
            try {
               
                const response = await axios.post("http://localhost:8080/api/warehouses", {
                    warehouse_name: warehouse,
                    address,
                    city,
                    country,
                    contact_name: name,
                    contact_position: position,
                    contact_phone: phone,
                    contact_email: email,
                  }
                );
                navigate(-1);
            } catch (error) {
              console.error("Error:", error);
              alert("An error occurred");
            }
          } 
          else {
            alert("Failed to create Warehouse");
          }
      };

    return (
    <div className="add-warehouse">
         <div className="add-warehouse__heading-container">
            <img 
              src={back} 
              className="add-warehouse__backimg" 
              alt="Go back"
              onClick={() => navigate(-1)}
            />
            <h1 className="add-warehouse__heading">Add New Warehouse</h1>
        </div>
        <form onSubmit={handleSubmit} className="form-container--wrapper">
            <div className="form-container">
                <div className="form-container__div1">
                    <h2 className="form-container__h2">Warehouse Details</h2>
                    
                    <label className="form-container__label">Warehouse Name </label>
                    <input
                    type="text"
                    name="warehouse"
                    value={warehouse}
                    onChange={handleChangeWarehouse}
                    onFocus={() => handleFocus("warehouse")}
                    placeholder="Warehouse Name"
                    className={`form-container__input ${
                    error && !warehouse ? "form-container__input--error" : ""
                    }`}
                    />
                    <FormError errorState={error} field={warehouse}>Warehouse is required</FormError>
                    
                    <label className="form-container__label">Street Address</label>
                    <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={handleChangeAddress}
                        onFocus={() => handleFocus("address")}
                        placeholder="Street Address"
                        className={`form-container__input ${
                        error && !address ? "form-container__input--error" : ""
                        }`}
                    />
                    <FormError errorState={error} field={address}>Address is required</FormError>
        
                    <label className="form-container__label">City </label>
                    <input
                        type="text"
                        name="city"
                        value={city}
                         onChange={handleChangeCity}
                        onFocus={() => handleFocus("city")}
                        placeholder="City"
                        className={`form-container__input ${
                            error && !city ? "form-container__input--error" : ""
                             }`}
                    />
                    <FormError errorState={error} field={city}>City is required</FormError>

                    <label className="form-container__label">Country</label>
                        <input
                        type="text"
                        name="country"
                        value={country}
                        onChange={handleChangeCountry}
                        onFocus={() => handleFocus("country")}
                        placeholder="Country"
                        className={`form-container__input ${
                    error && !country ? "form-container__input--error" : ""
                    } `}
                    />
                    <FormError errorState={error} field={country}>Country is required</FormError>

                </div>
                <div className="form-container__div2">
                    <h2 className="form-container__h2">Contact Details</h2>
                    <label className="form-container__label">Contact Name</label>
                    <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChangeName}
                    onFocus={() => handleFocus("name")}
                    placeholder="Contact Name"
                    className={`form-container__input ${
                        error && !name ? "form-container__input--error" : ""
                         }`}
                    />
                    <FormError errorState={error} field={name}>Contact Name is required</FormError>

                    <label className="form-container__label">Position</label>
                    <input
                    type="text"
                    name="position"
                    value={position}
                    onChange={handleChangePosition}
                    onFocus={() => handleFocus("position")}
                    placeholder="Position"
                    className={`form-container__input ${
                        error && !position ? "form-container__input--error" : ""
                        }`}
                    />
                    <FormError errorState={error} field={position}>Position is required</FormError>

                    <label className="form-container__label">Phone Number</label>
                    <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={handleChangePhone}
                    onFocus={() => handleFocus("phone")}
                    placeholder="Phone Number"
                    className={`form-container__input ${
                    error && !isValidPhoneNumber(phone) ? "form-container__input--error" : ""
                    } `}
                    />
                    <FormError errorState={error} field={isValidPhoneNumber(phone)}>Phone number format: +1(xxx)xxx-xxxx</FormError>

                    <label className="form-container__label">Email</label>
                    <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChangeEmail}
                    onFocus={() => handleFocus("email")}
                    placeholder="Email"
                    className={
                    `form-container__input ${
                    error && !isValidEmail(email) ? "form-container__input--error" : ""
                     } ${activeInput === "email" ? "form-container__input--active" : ""}`
                     }
                    />
                    <FormError errorState={error} field={isValidEmail(email)}>Email is invalid</FormError>

                    </div>
              </div>
              <div className="button-container">
                <div 
                  className="button-container__cancel"
                  onClick={() => navigate(-1)}
                >
                  <ButtonSecondary>Cancel</ButtonSecondary>
                </div>
                <div className="button-container__submit">
                  <ButtonPrimary onClick={handleSubmit}>+Add Warehouse</ButtonPrimary>
                </div>
            </div>
        </form>
    </div>
    );
    

}
export default AddWarehouse;