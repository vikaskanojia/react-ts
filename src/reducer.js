import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import helloSaga from './sagas'

const todoApp = (state={ 
	currentCount:0
}, action) => {
		console.log(action)
	switch (action.type) {
		case 'REDNUM' : 
			return {  ...state, currentCount : state.currentCount -1 }
		case 'NEWDATA' :
			return {  ...state, apiData: action.data}
		default :
			return state

	}

}

const sagaMiddleware = createSagaMiddleware()

const store =  createStore(
  todoApp,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(helloSaga);

export default store ;