import { useState } from 'react';
import { Header } from "./components/header";
import {TasksAlerts} from "./components/tasks";

export interface toMake{
  id: string; 
  content: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<toMake[]> ([]);

  function addTasks(taskContent: string) {
    setTasks([
    ...tasks,
    {
      id: crypto.randomUUID(),
      content: taskContent,
      isDone: false,
    }
    ])
  }

  function  deleteTask(taskId:string) {
    const newTask = tasks.filter((task) => task.id != taskId);
    setTasks(newTask);
  }

  function completeTaskButton(taskId:string) {
    const newTask = tasks.map((task) => {
      if(task.id === taskId) {
        return{
          ...task,
          isDone: !task.isDone,
        };
      }
      return task;
    });
    setTasks(newTask);
  }

  return (
    <div>
      <Header onAddTask={addTasks}/>
      <TasksAlerts tasks={tasks} onDelete={deleteTask} onComplete={completeTaskButton}/>
    </div>
  )
}

export default App
