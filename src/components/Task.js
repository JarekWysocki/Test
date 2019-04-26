import React from "react";

const Task = props => {
  const style = {
    color: "red"
  };

  const { text, date, id, active, important, finishDate } = props.task;
  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text} </strong>do {date}{" "}
          <button onClick={() => props.change(id)}>zrobione</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div>
        {" "}
        <p>
          <strong>{text} </strong>
          <em>(zrobić do {date})</em>
          <br /> - potwierdzenie zrobienia {finish}
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};
export default Task;
