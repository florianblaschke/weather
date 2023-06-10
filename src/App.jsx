import { uid } from "uid";
import { ActivityCard } from "./components/ActivityCard";
import { Form } from "./components/Form/index";
import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import { Display } from "./components/Display/index";

const initialActivities = [
  { activity: "Cycling", id: "3abh", key: "3abh" },
  { activity: "Hiking", id: "7jnk", key: "7jnk" },
];

function App() {
  const [activities, setActivities] = useState(initialActivities);
  const [weather, setWeather] = useState(true);
  const [location, setLocation] = useState("Middle Earth");
  const [temperature, setTemperature] = useState("-270C°");
  const [condition, setCondition] = useState("Could be better");

  const url = "https://example-apis.vercel.app/api/weather";
  async function getWeather() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data.isGoodWeather);
      setLocation(data.location);
      setTemperature(data.temperature);
      setCondition(data.condition);
    } catch {
      console.log("Shit's coming down");
    }
  }

  useEffect(() => {
    const firstWeather = setInterval(getWeather, 5000);
    return () => {
      clearInterval(firstWeather);
    };
  }, []);

  const badWeatherActivities = activities.filter((action) =>
    action.goodWeather ? false : true
  );

  function addActivity(newActivity) {
    setActivities([
      {
        activity: newActivity.activity,
        goodWeather: newActivity.goodWeather === "on" ? true : false,
        id: uid(4),
      },
      ...activities,
    ]);
  }

  function deleteActivity(id) {
    setActivities(
      activities.filter((action) => (action.id === id ? false : true))
    );
  }

  return (
    <>
      <Display
        location={location}
        temperature={temperature}
        condition={condition}
      />
      <Form onAddActivity={addActivity} />
      {weather
        ? activities.map((action) => (
            <ActivityCard
              onDeleteActivity={deleteActivity}
              key={action.id}
              activity={action.activity}
              id={action.id}
            />
          ))
        : badWeatherActivities.map((action) => (
            <ActivityCard
              onDeleteActivity={deleteActivity}
              key={action.id}
              activity={action.activity}
              id={action.id}
            />
          ))}
    </>
  );
}

export default App;
