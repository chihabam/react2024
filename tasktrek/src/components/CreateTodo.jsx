import React, {useState} from "react";

const CreateTodo=()=>{
    const [count,setCount]= useState(0);
    const [input,setInput]=useState("");
    const tasks = ["Task 1","Task 2","Task 3"]
    console.log(count);

    const hideButton = true;

    const handleClick=()=>{
        setCount(count+1);
    };

    const handleChange=()=>{
        setInput(event.target.value)
    }

    const countTasks =()=>{
       return tasks>0? countTasks:"No tasks available";
    
    };

    return (
    <>
        <h1>Tasks: {count}</h1>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleClick} className='custo-btn' disabled={!hideButton}>Add Task</button>
        <h1>Input: {input}</h1>
        <ul>
            {
                tasks.map(task=><li key={task}>{task}</li>)
            }
        </ul>
    </>);
}

export default CreateTodo;