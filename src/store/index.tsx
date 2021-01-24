import { createStore } from "redux";
import rootReducer from './reducers/combine-reducers'; 
const store = createStore(rootReducer);
export default store;