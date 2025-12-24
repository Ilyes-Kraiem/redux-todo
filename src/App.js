import React from "react";
import { useSelector } from "react-redux";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import "./App.css";
export default function App() {
  const { items } = useSelector((state) => state.tasks);
  const doneCount = items.filter((t) => t.isDone).length;
  const todoCount = items.length - doneCount;
  return (
    <div className="container">
      <div className="header">
        <div>
          <h1 className="title">Redux ToDo</h1>
          <p className="subtitle">
            Add, filter, and edit tasks — global state managed with Redux Toolkit.
          </p>
        </div>
        <div className="badgeRow">
          <div className="badge">Total: {items.length}</div>
          <div className="badge">Done: {doneCount}</div>
          <div className="badge">Remaining: {todoCount}</div>
        </div>
      </div>
      <div className="panel">
        <AddTask />
        <ListTask />
        <div className="footer">
          <span>Built with React + Redux Toolkit</span>
          <span>Portfolio-ready UI (no libraries)</span>
        </div>
      </div>
    </div>
  );
}