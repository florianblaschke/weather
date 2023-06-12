export function Card({ activity, id, onDeleteActivtiy }) {
  return (
    <div>
      <p>{activity}</p>
      <button onClick={() => onDeleteActivtiy(id)}>Delete</button>
    </div>
  );
}
