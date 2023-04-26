import { useState } from "react";

import logo from "./logo.svg";
import "./normalize.css";
import "./skeleton.css";
import "./App.css";

const PRIORITIES = ["Low", "Medium", "High"];

const Form = ({ onClick }) => {
  const [task, setTask] = useState();
  const [priority, setPriority] = useState(PRIORITIES[0]);
  const [description, setDescription] = useState();

  return (
    <form>
      <div className="row">
        <div className="six columns">
          <label htmlFor="exampleEmailInput">Task</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Task name.."
            id="exampleEmailInput"
            onChange={(e) => setTask(e.target.value)}
          />
        </div>

        <div className="six columns">
          <label htmlFor="exampleRecipientInput">Priority</label>
          <select
            className="u-full-width"
            id="exampleRecipientInput"
            onChange={(e) => setPriority(e.target.value)}
          >
            {PRIORITIES.map((priority) => (
              <option value={priority} key={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>
      </div>

      <label htmlFor="exampleMessage">Description</label>
      <textarea
        className="u-full-width"
        placeholder="More information.."
        id="exampleMessage"
        value={description}
        onChange={e => setDescription(e.target.value)}
      ></textarea>

      <label className="example-send-yourself-copy">
        <input type="checkbox" />
        <span className="label-body">Already complete</span>
      </label>
      <input
        className="button-primary"
        type="submit"
        onClick={(e) => {
          e.preventDefault()
          onClick({task, priority, description})
        }}
      />
    </form>
  );
};

const Table = () => (
  <table className="u-full-width">
    <thead>
      <tr>
        <th>Task</th>
        <th>Priority</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dave Gamache</td>
        <td>26</td>
        <td>Male</td>
      </tr>
      <tr>
        <td>Dwayne Johnson</td>
        <td>42</td>
        <td>Male</td>
      </tr>
    </tbody>
  </table>
);

function App() {
  const onSubmitForm = (values) => {
    console.log(values);
  };

  return (
    <div className="container">
      <h1>ToDo List</h1>
      <Form onClick={onSubmitForm} />

      <Table />
    </div>
  );
}

export default App;

const oldApp = (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);
