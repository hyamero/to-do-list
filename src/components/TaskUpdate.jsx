const TaskUpdate = ({ taskDone, taskDel }) => {
    return (
        <div className='task-update'>
            {taskDone && <h3>a task has been completed.</h3>}
        </div>
    )
}

export default TaskUpdate
