import React, { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export const itLoggerContext = createContext();

const ItLoggerContextProvider = props => {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(initialState);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = title => {
    setTasks([...tasks, { title, id: uuid() }]);
  };

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearList = id => {
    setTasks([]);
  };

  const findItem = id => {
    const item = tasks.find(task => task.id === id);
    setEditItem(item);
  };

  const editTask = (title, id) => {
    const newTask = tasks.map(
      task => (task = task.id === id ? { title, id } : task)
    );
    setTasks(newTask);
    setEditItem(null);
  };

  return (
    <itLoggerContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem
      }}
    >
      {props.children}
    </itLoggerContext.Provider>
  );
};
export default ItLoggerContextProvider;
