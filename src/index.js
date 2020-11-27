import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addPlane } from "./actions/planes";

import App from "./App";
import { sortByPassengers, sortByRange } from "./actions/filters";

const store = configureStore();

store.dispatch(
  addPlane({
    model: "747-8",
    producer: "Boeing",
    passengers: 520,
    price: 100,
    speed: 988,
    range: 15000,
  })
);
store.dispatch(
  addPlane({
    model: "A380",
    producer: "Airbus",
    passengers: 853,
    price: 445.6,
    speed: 1185,
    range: 14000,
  })
);

store.subscribe(() => {
  console.log(store.getState());
  }
)


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
