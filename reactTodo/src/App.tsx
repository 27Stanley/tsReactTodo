import { useState, useEffect, FormEvent } from "react";
import { Task } from "./types";
import { addTask, getTasks } from "../utils/taskUtils";
import { v4 as uuidV4 } from "uuid";

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
      id: uuidV4(),
      title: taskTitle,
      completed: false,
      createdAt: new Date(),
    };

    await addTask(newTask);
    setTasks([...tasks, newTask]);
    setTaskTitle("");
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
                  <input type="checkbox" checked={task.completed} readOnly />
                  {task.title}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
