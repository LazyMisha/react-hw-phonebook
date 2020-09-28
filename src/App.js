import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Phonebook from "./components/Phonebook";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Phonebook />
      </div>
    </Provider>
  );
}

export default App;
