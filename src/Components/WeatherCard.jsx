/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useDate } from "../Utils/useDate";
import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import wind from "../assets/icons/windy.png";
import "../index.css";

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("clear")) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(wind);
      }
    }
  }, [iconString]);

  return (
    <div className="w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4 flex flex-col justify-between overflow-hidden">
      <div className="flex flex-col items-center mb-4">
        <img src={icon} alt="weather_icon" className="w-[5rem] h-[5rem]" />
        <p className="font-bold text-4xl mt-2">{temperature} &deg;C</p>
      </div>
      <div className="text-center font-bold text-xl">{place}</div>
      <div className="flex justify-between text-sm mt-4">
        <p>{new Date().toDateString()}</p>
        <p>{time}</p>
      </div>
      <div className="mt-4 flex flex-col gap-3">
        <div className="flex justify-between gap-3">
          <div className="flex-1 text-center p-2 font-bold bg-blue-600 rounded-lg text-white shadow">
            Wind Speed
            <p className="font-normal">{windspeed} km/h</p>
          </div>
          <div className="flex-1 text-center p-2 font-bold bg-green-600 rounded-lg text-white shadow">
            Humidity
            <p className="font-normal">{humidity} gm/m&#179;</p>
          </div>
        </div>
        <div className="flex justify-between items-center p-2">
          <p className="font-semibold">Heat Index</p>
          <p>{heatIndex ? heatIndex : "N/A"}</p>
        </div>
      </div>
      <hr className="my-4 border-slate-500" />
      <div className="text-center text-xl font-semibold mt-2">{conditions}</div>
    </div>
  );
};

export default WeatherCard;
