import React from 'react'

import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doneIcon from './assets/check-mark-button.png'
import doingIcon from './assets/glowing-star.png'

const App = () => {
  return (
    <div className='app'>
      <TaskForm/>
      <main className='app_main'>

        <TaskColumn colName ="To Do" icon={todoIcon}/>
        <TaskColumn colName ="Doing" icon = {doingIcon}/>
        <TaskColumn colName ="Done" icon= {doneIcon}/>
      </main>
    </div>
  )
}

export default App