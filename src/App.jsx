import { Form } from "./components/Form/index";
import { Card } from "./components/ActivityCard/index";
import { Display } from "./components/Display";
import { useEffect, useState } from "react";
import { uid } from "uid";
import "./App.css";

const initialActivities = [
  { activity: "Cycling", id: "3abh", weather: true },
  { activity: "Hiking", id: "7jnk", weather: false },
];

function App() {
  const [activity, setActivity] = useState(initialActivities);
  const weatherActivity = activity.filter((action) =>
    action.weather ? true : false
  );

  console.log(weatherActivity);

  const [location, setLocation] = useState("Middle Earth");
  const [temperature, setTemperature] = useState("Hooooooot");
  const [condition, setCondition] = useState("Cloudy");

  function deleteActivity(id) {
    setActivity(activity.filter((action) => (action.id === id ? false : true)));
  }

  function createActivity(newEntry) {
    setActivity([{ ...newEntry, id: uid(4) }, ...activity]);
    console.log(activity);
  }
  const [weather, setWeather] = useState(false);
  const url = "https://example-apis.vercel.app/api/weather";

  async function weatherData() {
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data.isGoodWeather);
    setLocation(data.location);
    setTemperature(data.temperature);
    setCondition(data.condition);
  }

  // useEffect(() => {
  //   const firstWeather = setInterval(weatherData, 10000);
  //   return () => clearInterval(firstWeather);
  // }, []);

  return (
    <>
      <Display
        location={location}
        temperature={temperature}
        condition={condition}
        headline={
          weather ? "Go play outside" : "It's a good day for a gaming session!"
        }
      />
      <Form onCreateActivity={createActivity} />
      {weather
        ? activity.map((action) => (
            <Card
              onDeleteActivtiy={deleteActivity}
              key={action.id}
              activity={action.activity}
              id={action.id}
            />
          ))
        : weatherActivity.map((action) => (
            <Card
              onDeleteActivtiy={deleteActivity}
              key={action.id}
              activity={action.activity}
              id={action.id}
            />
          ))}
    </>
  );
}

export default App;
