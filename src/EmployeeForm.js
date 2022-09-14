import React, {useState} from 'react';

function EmployeeForm({onAddEmployee}){
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [contact, setContact] = useState("");
    const [comment, setComment] = useState("");

    function handleNewEmployee(e){
        e.preventDefault();
        const newEmployee ={
            name: name,
            location: location, 
            contact: contact,
            comment: comment
        };
        fetch("http://localhost:9292/employees",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            
            },
            body: JSON.stringify(newEmployee),
        })

        .then((r) => r.json())
        .then((newEmployee) => onAddEmployee(newEmployee));

    }
    return(

        <form className = "formTask"
                onSubmit = {handleNewEmployee}>
            <label>
                Name:
                <input type = "text" name="name" value= {name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Location:
                <input type = "string" name="location" value= {location} onChange={(e) => setLocation(e.target.value)}/>
            </label>
            <label>
                Contact:
                <input type = "number" name="contact" value= {contact} onChange={(e) => setContact(e.target.value)}/>
            </label>
            <label>
                Comment:
                <input type = "string" name="comment" value= {comment} onChange={(e) => setComment(e.target.value)} />
            </label>
            <label>
            <input type="submit" name="Submit" />
        </label>
    </form>

    )

}

export default EmployeeForm;