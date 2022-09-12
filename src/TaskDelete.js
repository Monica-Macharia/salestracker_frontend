import React from 'react';

function TaskDelete({task, onDeleteTask}){


    function handleDelete(){
        fetch(`https://salestracker-backend.herokuapp.com/tasks/${task.id}`,{
            method: "DELETE",

        })
        .then((r) => r.json())
        .then((r) => onDeleteTask(task));
    }
    return(
        <div className = "deleter">
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}


export default TaskDelete;


