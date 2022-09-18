import { Provider } from "react-redux";
import "./App.css";
import Card from "./components/card";
import Cards from "./components/cards";
import Navbar from "./components/navbar/navbar";
import store from "./components/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Cards />
      </div>
    </Provider>
  );
}

export default App;
