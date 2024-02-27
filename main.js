// variable para almacenar elementos de tareas pendientes
let todos = [];

// Funcion para agregar una nueva tarea pendiente
function addTodo() { 
    const todoInput = document.getElementById('todo-input');//obtenemos el elemento de entrada de texto a traves del id TODO-INPUT
    const todoText = todoInput.value.trim();// ahora lo que hice fue obtener el valor del elemento de entrada de texto y eliminar los espacios en blanco al principio y al final

    if (isNaN(todoText)) { // con el is not a number verificamos que no ingrese un numero el usuario
        // Verificar si el texto no está vacío
        if (todoText !== '') { // se agrega el texto aca
            todos.push(todoText); // en esta parte enviamos la tarea ingresada a la lista
            renderTodoList();
            todoInput.value = ''; // Limpiar campo de entrada después de agregar la tarea
        }
    } else {
        alert('Por favor, ingrese una tarea válida.'); // cuando ingresa un número por ejemplo sale este mensaje
    }
}

//nos vamos a encargar de actualizar la lista de tareas en la interfaz de usuario basada en el contenido del array todos
function renderTodoList() {
    const todoListContainer = document.getElementById('todo-list');// Acá vamos a representar la lista de tareas pendientes usando una funcion obteniendo el id=todo-list para que se muestren las tareas
    todoListContainer.innerHTML = ''; // limpiamos la lista existente

    todos.forEach((todo, index) => { // utilizamos arrays para ejecutar la función proporcionada donde TODO representa el valor del elemento actual y INDEX representa el indice del elemento actual en el array
        const todoItem = document.createElement('div'); // el elemento div es para representar cada tarea
        todoItem.classList.add('todo-item'); //Esto nos permite aplicar estilos css especificos a las tareas SOLO SI ES NECESARIOS (no hicimos estilos)
        todoItem.textContent = `${index + 1}. ${todo}`; // contenido de texto del div. Concatené el índice mas uno y el texo de la tarea
        todoListContainer.appendChild(todoItem); //Agregamos el elemento div que representa la tarea al contenedor de la lista de tareas, de modo que aparezca en la interfaz de usuario.
    });
}
