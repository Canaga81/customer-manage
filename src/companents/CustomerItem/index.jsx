import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "../CustomerList/list.css";
import styled from "styled-components";

const DeleteBtn = styled.button`
  padding: 8px 12px;
  background-color: red;
  transition: all 0.126s ease-in;

  & :hover {
    opacity: 0.75;
  }
`;

const CustomerItem = ({ customer, deleteHandler }) => {
  return (
    <>
      <li className="customer-item">
        <div className="customer-info">
          <div className="customer-image">
            <img
              src="https://i.pravatar.cc/300"
              alt=""
              className="customer-avatar"
            />
          </div>
          <span className="customer-name">{customer.customerName}</span>
        </div>

        <DeleteBtn
          onClick={() => deleteHandler(customer)}
          className="customer-trash_btn"
        >
          <FaTrashAlt />
        </DeleteBtn>
      </li>
    </>
  );
};

export default CustomerItem;
