import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  items: [
    { id: nanoid(), description: "Learn Redux", isDone: false },
    { id: nanoid(), description: "Build ToDo App", isDone: true },
  ],
  filter: "all", 
};
const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.unshift(action.payload);
      },
      prepare(description) {
        return {
          payload: {
            id: nanoid(),
            description: description.trim(),
            isDone: false,
          },
        };
      },
    },
    toggleTask(state, action) {
      const id = action.payload;
      const task = state.items.find((t) => t.id === id);
      if (task) task.isDone = !task.isDone;
    },
    editTask(state, action) {
      const { id, description } = action.payload;
      const task = state.items.find((t) => t.id === id);
      if (task && description.trim()) task.description = description.trim();
    },
    setFilter(state, action) {
      state.filter = action.payload; 
    },
  },
});
export const { addTask, toggleTask, editTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;