export const TableRow = ({ task, priority, description, alreadyComplete }) => (
  <tr>
    <td>{task}</td>
    <td>{priority}</td>
    <td>{description}</td>
    <td>
      <input type="checkbox" defaultChecked={alreadyComplete} />
    </td>
  </tr>
);
