import React from "react";
import Task from "./Task";
const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  done.sort((a, b) => b.finishDate - a.finishDate);
  active.sort((a, b) => {
    if (a.addDate < b.addDate) return 1;
    if (a.addDate > b.addDate) return -1;
    return 0;
  });

  const activeTasks = active.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <div>
      <div className="active">
        <h1>Zadania do zrobienia ({active.length})</h1>
        {activeTasks.length > 0 ? activeTasks : "brak zadań"}
      </div>
      <div className="done">
        <h1>Zadania zrobione ({done.length})</h1>
        {doneTasks.length > 0 ? doneTasks : "brak zrobionych"}
      </div>
    </div>
  );
};
export default TaskList;
