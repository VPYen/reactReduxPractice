import { createStore, applyMiddleware, compose} from 'redux'; // import compose to use redux devtools in browser
import thunk from 'redux-thunk';
import rootReducer from './reducers'

let initialState = {};

let middleware = [thunk];

let store  = createStore(
  rootReducer,
  initialState,
  compose (
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    // Needed to view store in devtools
  )
);

export default store;
