import React from 'react';

function CustomerDelete({customer, onDeleteCustomer}){

    function handleDeleteClick(){
        fetch(`http://localhost:9292/customers/${customer.id}`, {
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