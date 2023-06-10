import "./index.css";

export function Display({ location, temperature, condition }) {
  return (
    <div className="weather__status">
      <p className="location">Loaction: {location}</p>
      <p className="temperature">Temperature: {temperature}</p>
      <p className="condition">Condition: {condition}</p>
    </div>
  );
}
