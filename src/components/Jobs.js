import React, { useContext } from "react";
import { itLoggerContext } from "../context/itLoggerContext";
import Job from "./Job";
const Jobs = () => {
  const { tasks } = useContext(itLoggerContext);
  console.log(tasks);
  return (
    <div>
      {tasks.length <= 0 && (
        <div
          className="no-task"
          style={{ color: "white", textAlign: "center" }}
        >
          {" "}
          No task to track for now
        </div>
      )}
      <ul>
        {tasks.map(task => {
          return <Job task={task} key={task.id} />;
        })}
      </ul>
    </div>
  );
};

export default Jobs;
