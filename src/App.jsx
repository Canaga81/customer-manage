import { useState } from 'react'
import './App.css'
import CustomerForm from './companents/CustomerForm'
import CustomerList from './companents/CustomerList'

function App() {

  const [customers, setCustomers] = useState([])

  const addNewCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer])
  }

  return (

    <>

      <div className="App">

        <h1>Customer Manage System</h1>

        <CustomerForm addNewCustomer={addNewCustomer} />
        <br />
        {customers.length === 0 && "There are no customers"}

        <CustomerList customers={customers} setCustomers={setCustomers} />

      </div>

    </>

  )

}

export default App