import { useState } from 'react';
import { Header } from "./components/header";
import {TasksAlerts} from "./components/tasks";

export interface toMake{
  id: string; 
  content: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<toMake[]> ([
    {
    id: 'teste',
    content: 'teste',
    isDone: true,
  },
  {
    id: 'teste',
    content: 'teste',
    isDone: false,
  }
  ]);

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

  return (
    <div>
      <Header onAddTask={addTasks}/>
      <TasksAlerts tasks={tasks} />
    </div>
  )
}

export default App
