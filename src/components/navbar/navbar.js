import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAll, getCity } from "../action/action";
import "../styles/navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const repeatedCity = useSelector((state) => state.repeatedCity);
  console.log(state);

  console.log(state.city);

  const cityRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const { value } = cityRef.current;
    dispatch(getCity(value));
    cityRef.current.value = "";
  }

  return (
    <div className="inicio">
      <div class="uno">
        <h2>Buscador: </h2>
        <form onSubmit={handleSubmit}>
          <input
            ref={cityRef}
            type="text"
            placeholder="Buscar ciudad por nombre..."
            required
          />
          <div className="tres">
            <input type="submit" value="Buscar" />
            <button
              type="submit"
              onClick={() => dispatch(clearAll(state.city))}
            >
              Limpiar Ciudades
            </button>
          </div>
        </form>

        {repeatedCity && alert("Ciudad ya buscada")}
      </div>
      <div class="dos">
        <h1 class="gradient-text">Weather App </h1>
      </div>
    </div>
  );
};

export default Navbar;

// const handleChange = (e) => {
//   setCity(e.target.value);
// };
// const handleSubmit = (e) => {
//   e.preventDefault();
//   getCity(state.city);
//   setCity("");

// {/* <div className="inicio">
//   <h2>Buscador: </h2>
//   <form onSubmit={(e) => handleSubmit(e)}>
//     <input
//       id="title"
//       autoComplete="off"
//       value={city}
//       onChange={(e) => handleChange(e)}
//       type="search"
//       placeholder=" Search"
//       aria-label="Search"
//     />
//     <button type="submit" onClick={() => dispatch(getCity(city))}>
//       Buscar
//     </button>
//     <button type="submit" onClick={() => dispatch(clearAll(city))}>
//       Limpiar Ciudades
//     </button>
//   </form>
//   {repeatedCity && alert("Ciudad ya buscada")}
// </div>; */}
