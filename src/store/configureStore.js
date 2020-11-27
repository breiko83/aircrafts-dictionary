import { createStore, combineReducers } from "redux";
import planesReducer from "../reducers/planes";
import filtersReducer from "../reducers/filters"

export default () => {
  const store = createStore(
    combineReducers({
      planes: planesReducer,
      filters: filtersReducer
    })
  )

  return store
}