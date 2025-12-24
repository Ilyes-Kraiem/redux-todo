import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
export default function AddTask() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTask(text));
    setText("");
  };
  return (
    <form onSubmit={onSubmit} className="row">
      <input
        className="input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task…"
      />
      <button type="submit" className="btn btnPrimary">
        Add
      </button>
    </form>
  );
}