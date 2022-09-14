import React, {useState} from 'react';

function Form({onAddItem}){
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [status, setStatus] = useState("");
    const [customer_id, setCustomer_id] = useState("");
    const [employee_id, setEmployee_id] = useState("");

    function handleSubmit(e){
    e.preventDefault();
    const newItem ={
        name: name,
        price: price,
        status: status,
        customer_id: customer_id,
        employee_id: employee_id
    };
    fetch("http://localhost:9292/tasks",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            
        },
        body: JSON.stringify(newItem),
    })
    .then((r)=> r.json())
    .then((newData) => onAddItem(newData));

    }

    return(
            <form className = "formTask"
                onSubmit = {handleSubmit}>
            <label>
                Name:
                <input type = "text" name="name" value= {name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Price:
                <input type = "number" name="price" value= {price} onChange={(e) => setPrice(e.target.value)}/>
            </label>
            <label>
                Status:
                <input type = "text" name="status" value= {status} onChange={(e) => setStatus(e.target.value)}/>
            </label>
            <label>
                Customer_id:
                <input type = "number" name="customer_id" value= {customer_id} onChange={(e) => setCustomer_id(e.target.value)} />
            </label>
            <label>
                Employee_id:
                <input type = "number" name="number" value= {employee_id} onChange={(e) => setEmployee_id(e.target.value)}/>
            </label>
            <label>
            <input type="submit" name="Submit" />
        </label>
    </form>
    )
}

export default Form;