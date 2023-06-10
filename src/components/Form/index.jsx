export function Form({ onAddActivity }) {
  function collectData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddActivity(data);
    event.target.reset();
  }
  return (
    <>
      <h2>Das Wetter in Europe</h2>
      <form onSubmit={collectData}>
        <label htmlFor="activity" id="activityname" name="activityname">
          Your activity:
        </label>
        <input type="text" id="activity" name="activity" />
        <label htmlFor="goodWeather" name="goodWeather" id="goodWeather">
          Good-weather needed?
        </label>
        <input type="checkbox" name="goodWeather" id="goodWeather" />
        <button type="submit">Add activity</button>
      </form>
    </>
  );
}
