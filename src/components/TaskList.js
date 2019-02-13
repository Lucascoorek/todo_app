import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, change, delete1 }) => {
  const active = tasks.filter(task => task.active);
  const done = tasks.filter(task => !task.active);
  if (done.length >= 2) {
    done.sort((a, b) => b.finishDate - a.finishDate);
  }
  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }
  active.sort((a, b) => b.text - a.text);
  const activeTasks = active.map(task => (
    <Task key={task.id} {...task} change={change} delete1={delete1} />
  ));
  const doneTasks = done.map(task => (
    <Task key={task.id} {...task} change={change} delete1={delete1} />
  ));

  return (
    <>
      <div className="active">
        <h1>Zadania do zrobiena</h1>
        {activeTasks.length > 0 ? activeTasks : <p>Brak zadań do zrobienia</p>}
      </div>
      <hr />
      <div className="done">
        <h3>
          Zadania zrobione <em>({doneTasks.length})</em>
          {doneTasks.length > 5 && (
            <p style={{ fontSize: 15, color: "red" }}>
              Wyświetlane jest jedynie 5 zrobionych zadań
            </p>
          )}
        </h3>
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
