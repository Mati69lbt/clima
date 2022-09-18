import React from "react";
import { useSelector } from "react-redux";
import Card from "./card";
import "./styles/cards.css";

const Cards = () => {
  const cities = useSelector((state) => state.cities);
  console.log(cities);
  return (
    <div className="cards">
      {cities.map((city) => (
        <Card
          key={city.id}
          max={city.main.temp_max}
          min={city.main.temp_min}
          act={city.main.temp}
          st={city.main.feels_like}
          hum={city.main.humidity}
          pa={city.main.pressure}
          name={city.name}
          country={city.sys.country}
          win={city.wind.speed}
          icon={city.weather[0].icon}
          des={city.weather[0].description}
          id={city.id}
        />
      ))}
    </div>
  );
};

export default Cards;
