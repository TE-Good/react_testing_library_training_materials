import { useState } from "react";

import logo from "./logo.svg";
import "./normalize.css";
import "./skeleton.css";
import "./App.css";

const PRIORITIES = ["Low", "Medium", "High"];


const Form = ({ onClick }) => {
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

      <label className="example-send-yourself-copy">
        <input
          type="checkbox"
          onClick={() => setAlreadyComplete(!alreadyComplete)}
        />
        <span className="label-body">Already complete</span>
      </label>
      <input
        className="button-primary"
        type="submit"
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

const TableRow = ({ task, priority, description, alreadyComplete }) => (
  <tr>
    <td>{task}</td>
    <td>{priority}</td>
    <td>{description}</td>
    <td>
      <input type="checkbox" defaultChecked={alreadyComplete} />
    </td>
  </tr>
);

const Table = ({children}) => (
  <table className="u-full-width">
    <thead>
      <tr>
        <th>Task</th>
        <th>Priority</th>
        <th>Description</th>
        <th>Complete</th>
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </table>
);

function App() {
  const [taskList, setTaskList] = useState([]);

  const onSubmitForm = (newTask) => {
    const updatedTaskList = [...taskList, newTask];
    setTaskList(updatedTaskList);
  };

  return (
    <div className="container">
      <br />
      <h1>ToDo List</h1>
      <br />

      <Form onClick={onSubmitForm} />

      <Table>
        {taskList.map((props, i) => <TableRow key={i} {...props} />)}
      </Table>
    </div>
  );
}

export default App;
