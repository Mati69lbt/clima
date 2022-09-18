import { CLEAR, GET_CARD, REMOVE_CITY } from "../types";

export const initialState = {
  cities: [],
  repeatedCity: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARD: {
      console.log(state.cities);
      console.log(action.payload.id);
      let newCity = state.cities.filter(
        (city) => city.name === action.payload.name
      );
      console.log(newCity);
      if (newCity.length === 0) {
        return {
          ...state,
          cities: [action.payload, ...state.cities],
          repeatedCity: false,
        };
      } else {
        return { ...state, repeatedCity: true };
      }
      // !newCity
      //   ? { ...state, cities: [...state.cities, action.payload] }
      //   : alert("Wanted City ") && { ...state, cities: [...state.cities] };
    }
    case REMOVE_CITY: {
      return {
        ...state,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };
    }
    case CLEAR:
      return initialState;

    default:
      return state;
  }
}

// return !newCity
//   ? { ...state } && alert("Wanted City ")
//   : {
//       ...state,
//       cities: [...state.cities, action.payload],
//     };
