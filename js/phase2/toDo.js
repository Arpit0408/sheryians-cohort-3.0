let toDos = [];

function addToDo(task) {
    toDos.push({ id: toDos.length + 1, task, done: false });
};

function completeTodo(id) {
    let todo = toDos.find(t => t.id === id);
    if (todo) {
        todo.done = true;
    }
}

function removeTodo(id) {
    let toDo = toDos.filter(t => t.id !== id);
}

function updateTodo(id, value) {
    let toDo = toDos.find(t => t.id === id)
    if (toDo) {
        toDo.task = value;
    }
}

function showTodos() {
    toDos.forEach(t => {
        console.log(`${t.id}. [${t.done ? "x" : " "}] ${t.task}`);
    });
}

addToDo("Learn JS");
addToDo("Build a project");
addToDo("Sleep");
updateTodo(1, "updatedTodo")
// completeTodo(1);
showTodos();