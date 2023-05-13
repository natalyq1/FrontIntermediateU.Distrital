const Tareas = () => {
    //datos del componente
    const listaTareas = [
        { id: 1, titulo: 'Running' },
        { id: 2, titulo: 'Programming' },
        { id: 3, titulo: 'Reading' },
        { id: 4, titulo: 'Writing' },
    ]
    //OBJETO JSON PARA REPRESENTAR UN STYLE
//objeto para el estilo, no requiere doble corchete al llamarlo
const estiloSpan = {
    color: 'lime',
    fontStyle: 'italic'
}


//{Expresion}
    return (
        <>
        {/* comentario con ctrl + k + c */}

        {/* OBJETOS CON ESTILO INLINE */}
        <h2 style={{color :'red', background:'pink'}}>Listado de tareas</h2>
        <span style={estiloSpan}>List of tasks</span>
        {listaTareas.length > 0 ? ( 
        <h3>Hay {listaTareas.length} tareas</h3>) :
         (<h3>No hay tareas</h3>) }
            <ul>
                {listaTareas.map(tarea => (
                    <li className="tarea" key={tarea.id}> {tarea.titulo}</li>
                ))}
            </ul>
        </>
    )
}
export default Tareas