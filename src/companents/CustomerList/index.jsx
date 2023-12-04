import React from 'react'
import './list.css'
import CustomerItem from '../CustomerItem';

const CustomerList = ({customers, setCustomers}) => {

  // Delete Customer

  const deleteHandler = (item) => {
    setCustomers(customers.filter((customer) => customer.id !== item.id))
  }

  return (

    <>
    
      <ul className='customer-list'>

        {
          customers.map((customer) => (
            <CustomerItem customer={customer} key={customer.id} deleteHandler={deleteHandler} />
          ))
        }
        
      </ul>

    </>

  )

}

export default CustomerList;