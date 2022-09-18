import { APIkey, CLEAR, GET_CARD, REMOVE_CITY } from "../types";

export function getCity(cityname) {
  return async function (dispatch) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}&units=metric&lang=sp`
    );
    const city = await response.json();
    console.log(response);
    console.log(response.status);
    console.log(city);
    response.status === 200
      ? dispatch({ type: GET_CARD, payload: city })
      : alert("City Not Found");
  };
}

export const remove_City = (id) => ({
  type: REMOVE_CITY,
  payload: id,
});

export const clearAll = () => ({ type: CLEAR });
//  return dispatch({ type: GET_CARD, payload: city });
