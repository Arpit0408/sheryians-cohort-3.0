let toDos = [];

function addTodo(task) {
  toDos.push({ id: toDos.length + 1, task, done: false });
}

function CompleteTodo(tid) {
  let todo = toDos.find((u) => u.id === tid);
  if (todo) {
    todo.done = true;
  }
}

function deleteTodo(id) {
  toDos = toDos.filter((t) => t.id != id);
}

function ShowTodo() {
  toDos.forEach((t) => {
    console.log(`${t.id}. [${t.done ? "X" : ""}] ${t.task}`);
  });
}

addTodo("dskghkdjsf");
CompleteTodo(1);
ShowTodo();
