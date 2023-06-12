import { Entry } from "../Entry/index";
import "./index.css";

export function Card({ activity, onDeleteActivtiy, weatherActivity, weather }) {
  console.log(weatherActivity);
  return (
    <div className="entries">
      <h2>
        {`${
          weather ? "Go play outside!" : "It's a good day for a gaming session!"
        }`}
      </h2>
      {weather
        ? activity.map((action) => (
            <Entry
              key={action.id}
              onDeleteActivtiy={onDeleteActivtiy}
              activity={action.activity}
              id={action.id}
            />
          ))
        : weatherActivity.map((action) => (
            <Entry
              key={action.id}
              onDeleteActivtiy={onDeleteActivtiy}
              activity={action.activity}
              id={action.id}
            />
          ))}
    </div>
  );
}
