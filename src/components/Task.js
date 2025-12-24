import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTask, editTask } from "../features/tasks/tasksSlice";
export default function Task({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(task.description);
  const save = () => {
    if (!draft.trim()) return;
    dispatch(editTask({ id: task.id, description: draft }));
    setIsEditing(false);
  };
  const cancel = () => {
    setDraft(task.description);
    setIsEditing(false);
  };
  const onKeyDown = (e) => {
    if (e.key === "Enter") save();
    if (e.key === "Escape") cancel();
  };
  return (
    <div className="task">
      <input
        className="check"
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <div className="desc">
        <div
          className={
            "descText " + (task.isDone && !isEditing ? "doneText" : "")
          }
        >
          {isEditing ? (
            <input
              className="input"
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={onKeyDown}
              autoFocus
            />
          ) : (
            task.description
          )}
        </div>
        {!isEditing && (
          <span className={"chip " + (task.isDone ? "chipDone" : "chipTodo")}>
            {task.isDone ? "✅ Done" : "🟣 Todo"}
          </span>
        )}
      </div>
      <div className="actions">
        {isEditing ? (
          <>
            <button className="btn btnPrimary" onClick={save}>
              Save
            </button>
            <button className="btn" onClick={cancel}>
              Cancel
            </button>
          </>
        ) : (
          <button className="btn" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
      </div>
    </div>
  );
}
