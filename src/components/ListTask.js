import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../features/tasks/tasksSlice";
import Task from "./Task";
export default function ListTask() {
  const dispatch = useDispatch();
  const { items, filter } = useSelector((state) => state.tasks);
  const filtered = items.filter((t) => {
    if (filter === "done") return t.isDone === true;
    if (filter === "not") return t.isDone === false;
    return true; 
  });
  const pillClass = (name) => (name === filter ? "pill pillActive" : "pill");
  return (
    <div>
      <div className="filters">
        <button className={pillClass("all")} onClick={() => dispatch(setFilter("all"))}>
          All
        </button>
        <button className={pillClass("done")} onClick={() => dispatch(setFilter("done"))}>
          Done
        </button>
        <button className={pillClass("not")} onClick={() => dispatch(setFilter("not"))}>
          Not done
        </button>
      </div>
      <div className="list">
        {filtered.length === 0 ? (
          <div className="empty">No tasks match this filter.</div>
        ) : (
          filtered.map((task) => <Task key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
}
