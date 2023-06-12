export function Form({ onCreateActivity }) {
  function extractData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onCreateActivity(data);
    event.target.reset();
    event.target.elements.activity.focus();
  }
  return (
    <>
      <h1>Weather</h1>
      <form onSubmit={extractData}>
        <label htmlFor="activity" name="activity">
          Add activity:
        </label>
        <input type="text" name="activity" id="activity" />
        <label htmlFor="weather">Good weather needed?</label>
        <input type="checkbox" name="weather" id="weather" />
        <button>Add activity</button>
      </form>
    </>
  );
}
