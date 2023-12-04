import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import '../CustomerList/list.css'

const CustomerItem = ({customer, deleteHandler}) => {
    
    return (

        <>

            <li className='customer-item'>

                <div className='customer-info'>

                    <div className="customer-image">
                        <img src="https://i.pravatar.cc/300" alt="" className='customer-avatar' />
                    </div>
                    <span className='customer-name'>{customer.customerName}</span>

                </div>

                <button onClick={() => deleteHandler(customer)} className='customer-trash_btn'>
                    <FaTrashAlt />
                </button>

            </li>

        </>

    )
}

export default CustomerItem