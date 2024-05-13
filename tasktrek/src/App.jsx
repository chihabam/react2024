import React,{useState} from 'react'

import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doneIcon from './assets/check-mark-button.png'
import doingIcon from './assets/glowing-star.png'

const App = () => {
  const [tasks, setTasks]= useState([]);
  const handleDelete =(taskIndex)=>{
    const newTasks = tasks.filter((task,index)=> index!== taskIndex)
    setTasks(newTasks)
  }
  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        <TaskColumn colName ="To Do" icon={todoIcon} tasks={tasks} status="todo" handleDelete={handleDelete}/>
        <TaskColumn colName ="Doing" icon = {doingIcon} tasks={tasks} status="doing" handleDelete={handleDelete}/>
        <TaskColumn colName ="Done" icon= {doneIcon} tasks={tasks} status="done" handleDelete={handleDelete}/>
      </main>
    </div>
  );
};

export default App