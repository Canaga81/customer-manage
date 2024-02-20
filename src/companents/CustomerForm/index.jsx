import React, { useState } from "react";
import "./form.css";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  height: 50px;
  width: 100%;
  outline: none;
  border: 2px solid #000;
  padding-left: 10px;
  text-transform: capitalize;
  border-radius: 6px;
  font-size: 18px;
  letter-spacing: 1.5px;
`;

const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (customerName.trim().length === 0) {
      setIsValid(true);
      return;
    }

    const newCustomer = {
      id: Math.random(),
      customerName,
    };

    // alert('Please do not leave it blank!')

    addNewCustomer(newCustomer);
    setCustomerName("");

    // if (customerName.trim() === '') {
    //     alert('Please do not leave it blank!')
    // }
    // else {
    //     addNewCustomer(newCustomer)
    //     setCustomerName('')
    // }
  };

  const nameInputChangeHandler = (e) => {
    const nameValue = e.target.value;
    // setCustomerName(nameValue)
    if (nameValue.trim().length > 0) {
      setIsValid(false);
    }

    setCustomerName(nameValue);
  };

  //   console.log(customerName.length);

  return (
    <Form className="customer-form" onSubmit={handleSubmit}>
      <Input
        type="text"
        className={`customer-input ${isValid ? "invalid" : ""}`}
        placeholder="Add a new customer"
        onChange={nameInputChangeHandler}
        value={customerName}
        // style={{backgroundColor: isValid ? 'red' : ""}}
      />

      <button>
        <FaPlus />
      </button>
    </Form>
  );
};

export default CustomerForm;
