import React, { useState } from 'react';

const TaskInput = ({settar,tareas}) => {
    const [nuevaTarea, setnuevaTarea] = useState('')

    const agregarTarea = (nuevaTarea,tareas) => {
        if (nuevaTarea.trim() === '') return
        
        settar([...tareas,{id:tareas.length , nombre:nuevaTarea, completado:false}])
        setnuevaTarea('')
    }

  return (
    <div>
        <input type="text" value={nuevaTarea} placeholder="Ingrese una tarea" onChange={(e) => setnuevaTarea(e.target.va) } />
    </div> )
}