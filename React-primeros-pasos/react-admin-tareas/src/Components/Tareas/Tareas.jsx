const Tareas = () => {
//datos del componente
    const listaTareas = [
        { id: 1, titulo: 'Running'},
        { id: 2, titulo: 'Programming'},
        { id: 3, titulo: 'Reading'},
        { id: 4, titulo: 'Writing'},
    ]

  return (
    <>
    {listaTareas.map( tarea => (
        <h4 key={tarea.id}> { tarea.titulo }</h4>
    ))}
    </>
  )
}
export default Tareas