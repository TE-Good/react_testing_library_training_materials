export const Table = ({ children }) => (
  <table className="u-full-width">
    <thead>
      <tr>
        <th>Task</th>
        <th>Priority</th>
        <th>Description</th>
        <th>Complete</th>
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);
