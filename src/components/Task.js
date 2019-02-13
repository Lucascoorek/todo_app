import React from "react";

const Task = ({
  text,
  date,
  id,
  change,
  delete1,
  active,
  important,
  finishDate
}) => {
  const style = {
    color: "red"
  };

  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong> - do{" "}
          <span>{date}</span>
          <button onClick={() => change(id)}>Zostało zribione</button>
          <button onClick={() => delete1(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finishTime = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          {text} - ( zrobić do <span>{date}</span>)
          <br />
          <span>potwierdzenie wykonania {finishTime}</span>
          <button onClick={() => delete1(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
