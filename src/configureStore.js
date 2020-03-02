import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

export default function configureStore(preLoadedState) {
  const composedEnhancers = composeWithDevTools()
  const store = createStore(rootReducer, preLoadedState, composedEnhancers);
  return store;
}