import { FaCheck } from "react-icons/fa";
import { RiCalendarLine } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";

const Task = ({ task, onDelete, setTaskDone}) => {
  return (
    <div className="task">
      <div className="wrapper">
        <div className="inTask">
          <FaCheck
            className="icon-check"
            onClick={() => {
              setTaskDone(true);
              onDelete(task.id);
              setTimeout(() => {
                setTaskDone(false);
              }, 2000);
            }}
          />
          <h3>{task.text}</h3>
          <BsTrash className="icon-star" 
          onClick={() => {
          onDelete(task.id);
          }} />
        </div>
        <div className="dueDate">
          {task.date ? (
            <RiCalendarLine className="icon-calendar" />
          ) : (
            <p>as soon as I can!</p>
          )}
          <p>{task.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
