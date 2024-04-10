import React from "react";

function CreateTodo(){
    let tasks =0;
    const hideButton = true;
    const handleClick=()=>{
        tasks++;
        console.log("Add Task")
    }
    const countTasks =()=>{
       return tasks>0? countTasks:"No tasks available";
    
    };

    return (
    <>
        <h1>{countTasks()}</h1>
        <button onClick={handleClick} className='custo-btn' disabled={!hideButton}>Add Task</button>
    </>);
}

export default CreateTodo;