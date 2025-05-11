import React from 'react'

export const TaskList = () => {
return (
    <div>
        <TaskInput settar={settar} tareas={tareas}/>
        <ul>
        <TaskItem settar={settar} tareas={tareas}/>
        </ul>
        
    </div>
  )
}
