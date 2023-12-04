import React, { useState } from 'react'
import './form.css'
import { FaPlus } from "react-icons/fa";

const CustomerForm = ({ addNewCustomer }) => {

    const [customerName, setCustomerName] = useState("")

    const handleSubmit = (event) => {
        
        event.preventDefault();

        const newCustomer = {
            id: Math.random(),
            customerName
        }

        if (customerName.trim() === '') {
            alert('Please do not leave it blank!')
        }
        else {
            addNewCustomer(newCustomer)
            setCustomerName('')
        }

    }

    return (

        <form className='customer-form' onSubmit={handleSubmit}>

            <input type="text" className='customer-input' placeholder='Add a new customer' onChange={(e) => setCustomerName(e.target.value)} value={customerName} />

            <button>
                <FaPlus />
            </button>

        </form>

    )
}

export default CustomerForm