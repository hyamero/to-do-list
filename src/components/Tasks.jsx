import Task from './Task'
import React, { useEffect, useRef } from 'react'

const Tasks = ({ tasks, onDelete, setTaskDone }) => {

    const tasksEndRef = useRef(null)

    const scrollToBottom = () => {
      tasksEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  
    useEffect(() => {
      scrollToBottom()
    }, [tasks]);

    return (
        <div className='taskParent' >
            {tasks.map((task) => (
                <Task key={task.id} task={task}  onDelete={onDelete} setTaskDone={setTaskDone} />    
            ))}
            <div ref={tasksEndRef} />
        </div>
    )
}

export default Tasks
