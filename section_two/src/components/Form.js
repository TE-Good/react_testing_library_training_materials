import { useState } from "react";

const PRIORITIES = ["Low", "Medium", "High"];

export const Form = ({ onClick }) => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState(PRIORITIES[0]);
  const [description, setDescription] = useState("");
  const [alreadyComplete, setAlreadyComplete] = useState(false);

  const clearForm = () => {
    setTask("");
    setPriority(PRIORITIES[0]);
    setDescription("");
  };

  return (
    <form>
      <div className="row">
        <div className="six columns">
          <label htmlFor="taskInput">Task</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Task name.."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>

        <div className="six columns">
          <label htmlFor="priorityInput">Priority</label>
          <select
            className="u-full-width"
            onChange={(e) => setPriority(e.target.value)}
            value={priority}
          >
            {PRIORITIES.map((priority) => (
              <option value={priority} key={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>
      </div>

      <label htmlFor="descriptionMessage">Description</label>
      <textarea
        className="u-full-width"
        placeholder="More information.."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <label>
        <input
          type="checkbox"
          onClick={() => setAlreadyComplete(!alreadyComplete)}
        />
        <span className="label-body">Already complete</span>
      </label>
      <input
        className="button-primary"
        type="submit"
        aria-label="submit"
        disabled={!task}
        onClick={(e) => {
          e.preventDefault();
          onClick({ task, priority, description, alreadyComplete });
          clearForm();
        }}
      />
    </form>
  );
};
