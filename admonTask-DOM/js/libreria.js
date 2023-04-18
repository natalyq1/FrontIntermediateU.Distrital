function mostrarCantidadTareas() {  
  const cantidadTareas = document.getElementById("cantidadTareas");
  const lista = document.getElementById("lista");
  
  // Obtiene la cantidad de hijos de la lista
  const cantidad = lista.children.length;
  // Modifica la cantidad de tareas
  cantidadTareas.textContent = `Tenemos ${cantidad} tareas`;
}

const handlerCheckboxClick = (evento) => {
  //obtiene el checkbox al cual se le hizo clic
  const checkbox = evento.target
  
//obtiene el <span> hermnao
  const hermano = checkbox.nextElementSibling;
  //agrega /elimina la clase CSS
hermano.classList.toggle('terminada')

//ternario q hace lo mismo q toggle
//evento.target.checked ?hermano.classList.add('terminada'):hermano.classList.remove('terminada')

//todo lo anterior en una sola linea, agrega y elimina la clase del texto tarea
//evento.target.nextElementSibling.classList.toggle('terminada')

}

function handlerSpanBorrarClick(evento) {
  //obtiene el elemento al que se le hizo clic
  //const spanBorrar = evento.target
  //const padre= spanBorrar.parentElement
  //padre.remove()
  
  //obtiene el elemento a borrar
  evento.target.parentElement.remove()

  mostrarCantidadTareas();
}


const crearLi = (tarea) => {
    // Crea el <li>
    const li = document.createElement("li");
    // Crea el <input:checkbox>
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener('click', handlerCheckboxClick)
    // Crea el <span> del texto de la tarea
    const spanTexto = document.createElement("span");
    spanTexto.textContent = tarea;
    // Crea el <span> para eliminar la tarea
    const spanBorrar = document.createElement("span");
    spanBorrar.textContent = "x";
    spanBorrar.addEventListener('click', handlerSpanBorrarClick)

    //tareas terminadas
    const terminadas = document.createElement('h3')
terminadas.textContent = "";
    // Agrega los elementos al <li>
    li.append(checkbox, spanTexto, spanBorrar);
    // Retorna el <li>
    return li;
  };
  
  export { crearLi, mostrarCantidadTareas};