export function Display({ condition, temperature, location }) {
  return (
    <div>
      <p>Condition: {condition}</p>
      <p>Temperature: {temperature}</p>
      <p>Location: {location}</p>
      {/* <h2>{headline}</h2> */}
    </div>
  );
}
