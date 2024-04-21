import React from 'react'
import  Todo from "../assets/direct-hit.png"
import "../styles/TaskColumn.css"
import TaskCard from './TaskCard';

const TaskColumn = ({colName,icon}) => {
    // const {colName,icon}= props
    // const {title,icon}= props
    console.log(Todo);
  return (
    <section className='task_column'>
        <h2 classsName="task_column_heading">
            <img className="task_column_icon" src={icon} alt=""/>
            {colName} 
        </h2>
        <TaskCard/>
    </section>
  )
}

export default TaskColumn