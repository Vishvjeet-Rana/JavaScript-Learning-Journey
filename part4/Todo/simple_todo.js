let todo = [];

let req = prompt("Enter the REquest to want to perform.");

while (true) {
  if (req === "quit") {
    console.log("You quit the todo");
    break;
  }

  if (req === "add") {
    let task = prompt("Add your task");
    todo.push(task);
    console.log("Task added");
  } else if (req === "list") {
    console.log("-----------------");
    for (t of todo) {
      console.log(t);
    }
    console.log("-----------------");
  } else if (req === "dlt") {
    let task = prompt("Enter task to remove");
    if (todo.includes(task)) {
      let index = todo.indexOf(task);
      todo.splice(index, 1);
      console.log("task deleted");
    } else {
      console.log("There is no such task");
    }
  } else {
    console.log("Wrong todo");
  }

  req = prompt("Enter the task to want to perform.");
}
