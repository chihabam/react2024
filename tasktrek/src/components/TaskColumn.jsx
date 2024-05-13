import React from 'react'
import  Todo from "../assets/direct-hit.png"
import "../styles/TaskColumn.css"
import TaskCard from './TaskCard';

const TaskColumn = ({colName,icon,tasks,status,handleDelete}) => {
    // const {colName,icon}= props
    // const {title,icon}= props
    console.log(Todo);
  return (
    <section className='task_column'>
        <h2 className="task_column_heading">
            <img className="task_column_icon" src={icon} alt=""/>
            {colName} 
        </h2>
        {
          tasks.map((task,index)=>task.status==status &&<TaskCard key={index} title={task.task} tags={task.tags} handleDelete={handleDelete} index = {index}/>)
        }
    </section>
  )
}

export default TaskColumn