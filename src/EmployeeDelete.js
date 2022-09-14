import React from 'react';

function EmployeeDelete({employee, onDeleteEmployee}){

    function handleDelete(){
        fetch(`http://localhost:9292/employees/${employee.id}`, {
            method: "DELETE",

        })
        .then((r) => r.json())
        .then((r) => onDeleteEmployee(employee));
    }
    return(
        <div className = "delete">
                <button onClick={handleDelete}>Delete</button>
            </div>
    )
}

export default EmployeeDelete;


