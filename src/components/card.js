import React from "react";
import { useDispatch } from "react-redux";
import { remove_City } from "./action/action";
import "./styles/card.css";

const Card = ({
  name,
  country,
  min,
  max,
  act,
  st,
  hum,
  win,
  icon,
  pa,
  des,
  id,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="cab">
        <h3 className="itemcab">{name}</h3>
        <h4 className="itemcab">{country}</h4>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="logo"
        />
        <h5 className="itemcab">{des}</h5>
        <button
          onClick={() => {
            dispatch(remove_City(id));
          }}
        >
          X
        </button>
      </div>
      <div className="abj">
        <div className="item">
          <p>Temp actual</p>
          <p> {act}°</p>
        </div>
        <div className="item">
          <p>Temp Max:</p>
          <p> {max}°</p>
        </div>
        <div className="item">
          <p className="v">Temp Min:</p>
          <p> {min}°</p>
        </div>
        <div className="item">
          <p className="v">ST:</p>
          <p> {st}°</p>
        </div>
        <div className="item">
          <p>Presion Atm: </p>
          <p> {pa} PA</p>
        </div>
        <div className="item">
          <p className="v">Humedad:</p>
          <p> {hum}%</p>
        </div>
        <div className="item">
          <p>El viento sopla a:</p>
          <p> {Math.round(win * 3.6)} km/h</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
