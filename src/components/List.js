import React, { useState } from "react";

function List() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const taskx = prompt("What is your task?");
    if (!taskx || taskx.trim() === "") {
      alert("Task cannot be empty");
    } else if (!isNaN(taskx)) {
      alert("Task cannot be a number");
    } else {
      setTasks([...tasks, taskx]);
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <ul className="bg-gray-100 p-5 h-[80vh] text-black">
      <h4 className="text-xl font-bold mb-4">Task List</h4>
      {tasks.map((task, index) => (
        <li key={index} className="flex justify-between items-center py-2">
          {task}
          <button 
            onClick={() => deleteTask(index)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
      <button 
        className="bg-green-500 text-white px-5 py-2 rounded mt-4 hover:bg-green-600" 
        onClick={addTask}
      >
        Add Task
      </button>
    </ul>
  );
}

export default List;