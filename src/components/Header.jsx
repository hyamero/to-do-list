import { AiOutlineHome } from "react-icons/ai";
import TaskUpdate from "./TaskUpdate";

const Header = ({ taskDone }) => {
    return (
        <div className='header'>
            <AiOutlineHome className='icon-home' />
            <h1>Tasks</h1>
            <TaskUpdate taskDone={taskDone} />
        </div>
    )
}

export default Header

