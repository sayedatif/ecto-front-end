import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers'

export default function configureStore(preLoadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewareEnhancer = applyMiddleware(sagaMiddleware);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);
  return {
    ...createStore(rootReducer, preLoadedState, composedEnhancers),
    runSaga: sagaMiddleware.run,
  }
}