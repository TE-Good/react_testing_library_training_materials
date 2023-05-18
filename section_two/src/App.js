import { useState } from "react";

import { Form } from "./components/Form";
import { Table } from "./components/Table";
import { TableRow } from "./components/TableRow";

import "./normalize.css";
import "./skeleton.css";
import "./App.css";

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
        {taskList.map((props, i) => (
          <TableRow key={i} {...props} />
        ))}
      </Table>
    </div>
  );
}

export default App;
