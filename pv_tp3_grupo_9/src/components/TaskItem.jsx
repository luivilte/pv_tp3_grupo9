
import React from 'react'


const TaskItem = ({settar,tareas}) => {

  const cambiarEstado = (tar) => {
    const nuevasTareas = tareas.map(t => {
      if (t.id === tar.id) {
        return { ...t, completado: !t.completado }
      }
      return t
    })
    settar(nuevasTareas)
  }
    

    const eliminarLista = (tar) => {
      const nuevasTareas = tareas.filter(t => t.id !== tar.id)
      settar(nuevasTareas)
    }


  return (
    tareas.map((tar) => (
    <li key={tar.id}>
        <span style={{textDecoration: tar.completado ? 'line-through' : 'none'}}>
          {tar.id} - {tar.nombre}
          <button onClick={()=>cambiarEstado(tar)}>Completado</button>
          <button onClick={()=>eliminarLista(tar)}>eliminar</button>
        </span>
      
    </li>
    ))
  )
}


export default TaskItem