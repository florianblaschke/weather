export function Entry({ activity, id, onDeleteActivtiy }) {
  <p>{activity}</p>;
  <button onClick={() => onDeleteActivtiy(id)}>Delete</button>;
}
