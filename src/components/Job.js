import React, { useContext } from "react";
import { itLoggerContext } from "../context/itLoggerContext";

const Job = ({ task }) => {
  const { removeTask, findItem } = useContext(itLoggerContext);
  return (
    <li className="list-item">
      <span>{task.title}</span>
      <div>
        <button
          className="delete-btn task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>
        <button className="edit-btn task-btn" onClick={() => findItem(task.id)}>
          <i className="fas fa-pencil-alt"></i>
        </button>
      </div>
    </li>
  );
};

export default Job;
