import "./index.css";

export function ActivityCard({ activity, onDeleteActivity, id }) {
  return (
    <div className="activity__card">
      <p>{activity}</p>
      <button onClick={() => onDeleteActivity(id)}>Delete</button>
      <p>This is such a nice activity!</p>
    </div>
  );
}
