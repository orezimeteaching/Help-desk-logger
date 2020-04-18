import React, { useState, useContext, useEffect } from "react";
import { itLoggerContext } from "../context/itLoggerContext";

const JobForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(
    itLoggerContext
  );
  const [title, setTitle] = useState("");

  const handleChange = e => {
    setTitle(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={handleChange}
        type="text"
        placeholder="Add a Task..."
        required
        className="task-input"
      />
      <div className="buttons">
        {" "}
        <button type="submit" className="btn add-task-btn">
          {editItem ? "Edit Task" : "Add Task"}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  );
};

export default JobForm;
