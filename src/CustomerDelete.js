import React from 'react';

function CustomerDelete({customer, onDeleteCustomer}){

    function handleDeleteClick(){
        fetch(`https://salestracker-backend.herokuapp.com/customers/${customer.id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then(() => onDeleteCustomer(customer));
    }
    return (
        <div className = "delete">
        <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default CustomerDelete;