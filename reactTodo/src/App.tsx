import { useState, useEffect, FormEvent } from "react";
import { Task } from "./types";
import { addTask, getTasks, updateTaskStatus } from "../utils/taskUtils";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskTitle, setTaskTitle] = useState<string>("");

  useEffect(() => {
    async function fetchTasks() {
      const tasks = await getTasks();
      setTasks(tasks);
    }
    fetchTasks();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (taskTitle.trim() === "") return;

    const newTask: Task = {
      title: taskTitle,
      completed: false,
      createdAt: new Date(),
    };

    const savedTask = await addTask(newTask);
    setTasks([...tasks, savedTask]);
    setTaskTitle("");
  };

  const handleCheckboxClick = async (taskId: string, completed: boolean) => {
    try {
      await updateTaskStatus(taskId, completed);
      setTasks(
        tasks.map((task) =>
          task.id === taskId ? { ...task, completed } : task
        )
      );
    } catch (err) {
      console.log("Error checking task: ", err);
    }
  };

  return (
    <>
      <div>
        <div>
          <h1>Daily To-do List</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="New Task Title"
            />
            <button type="submit">Add Task</button>
          </form>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={(e) =>
                      handleCheckboxClick(task.id!, e.target.checked)
                    }
                  />
                  {task.title}
                  <br></br>
                  <span>
                    &emsp; Created on:&nbsp;
                    {task.createdAt.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </label>
                <p></p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
