import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
const [tasks, setTasks] = useState([
  {
    id: 1,
    text: 'Running with the wind',
    date: 'Today'
  },
  {
    id: 2,
    text: 'Dentist Appointment',
    date: 'Tomorrow'
  },
  {
    id: 3,
    text: 'Watch a movie',
    date: 'July 16, 2020'
  }

])

const [taskDone, setTaskDone] = useState(false)

const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

const onDelete = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ))
}

  return (
    <div className="App">
      <Header  taskDone={taskDone} />
      {tasks.length > 0 ? ( 
      <Tasks tasks={tasks} onDelete={onDelete} setTaskDone={setTaskDone} />
      ) : (
        <h6>No tasks to show</h6>
      )}
      <AddTask onAdd={addTask} tasks={tasks} />
    </div>
  );
}

export default App;
