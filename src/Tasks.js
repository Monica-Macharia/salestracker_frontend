import React, {useEffect, useState} from 'react';
import Form from "./Form.js";
import TaskDelete from "./TaskDelete.js";
import UpdatePrice from "./UpdatePrice.js"

function Tasks(){
    const[tasks, setTasks] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:9292/tasks")
        .then((r) => r.json())
        .then((tasks) => setTasks(tasks));
    }, []);

    function handleAddItem(newData){
        setTasks([...tasks, newData])
    }

    function onUpdateTask(newPrice){
        setTasks([...tasks, newPrice])
    }

    function handleTaskDelete(deletedTask){
        const updateTasks = tasks.filter((task) => task.id !== deletedTask.id);
        setTasks(updateTasks);
    }

    return (
    <div className="appBody">
        <p className= "order"><h2>Today's Tasks!</h2></p>
       
        <div className= "orders">
       
        
        {tasks.map((task)=>
        <div className= "tasker">
            <p className = "tasker1">
            <b><em>Name:</em></b> {task.name}<br/>
            <b><em>Price:</em> </b>{task.price}<br /> 
            <b><em>Status:</em></b> {task.status}<br />
            <b><em>Customer_id:</em></b> {task.customer_id} <br />
            <b><em>Employee_id:</em> </b>{task.employee_id}<br />
            <UpdatePrice task = {task} onUpdateTask = {onUpdateTask} />
           {tasks.map((task) => (
               <TaskDelete
               id={task.id}
               key={task.id}
               task={task}
               onDeleteTask={handleTaskDelete} />
           ))}
         </p>
        </div>)}
        <Form onAddItem={handleAddItem}/>  
       
        </div>
         

    </div>
)
}

export default Tasks;