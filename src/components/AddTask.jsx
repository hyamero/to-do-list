import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import "react-datepicker/dist/react-datepicker.css";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [showCircle, setShowCircle] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a task')
      return
  }

    onAdd({ text, date });

    setShowCircle(false);
    setShowCalendar(false);
    setDate('');
    setText("");
  };

  return (
    <div
      className="addTask container"
    >
      <AiOutlinePlus
        className={`icon-plus ${showCircle && "icon-plus-circle"}`}
        onClick={onSubmit}
      />
      <form
        onSubmit={onSubmit}
      >
        <input
          className={`input-task ${!showCircle && "addTaskHo"}`}
          type="text"
          value={text}
          placeholder={!showCircle && "Add a task"}
          onFocus={() => {
            setShowCircle(true);
          }}
          onChange={(e) => {
            setText(e.target.value);
            setShowCalendar(true);
          }}
        />
        {showCalendar && <input className='datePick' type="date" onChange={(date) => setDate(date.target.value)} />}
      </form>
    </div>
  );
};

export default AddTask;
