import React, { useEffect, useState} from 'react';
import CustomerDelete from './CustomerDelete';
import CustomerForm from './CustomerForm';

function Customers(){
    const[customers, setCustomers] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:9292/customers")
        .then((r) => r.json())
        .then((customers) => setCustomers(customers));
    }, []);

    function handleAddCustomer(newCustomer){
        setCustomers([...customers, newCustomer])
    }

    function handleDelete(deletedCustomer){
        const updateCustomers = customers.filter((customer) => customer.id !== deletedCustomer.id);
        setCustomers(updateCustomers);
    }

   
    return (
    <div className="appBody">
        <p className= "customer"><h2>Customers</h2></p>
       
        <div className= "customers">
       
          {customers.map((customer) =>        
        <div className= "customer">
            <p className = "customer1">
            <b><em>Name:</em></b> {customer.name}<br/>
            <b><em>Location:</em></b> {customer.location}<br /> 
            <b><em>Contact:</em> </b>{customer.contact} <br />
            <b><em>Comment:</em></b> {customer.comment} <br />
            {customers.map((customer) => (
            <CustomerDelete
            id={customer.id}
            key={customer.id}
            customer={customer}
            // updatedCustomers={handleUpdateCustomer}
            onDeleteCustomer={handleDelete} /> 
            ))}
         </p>
        </div>)}
        <CustomerForm onAddCustomer = {handleAddCustomer}/>

            


        </div>
        
   
    

    </div>
)
}

export default Customers;