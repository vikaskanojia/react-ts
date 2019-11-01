import { call, put, takeLatest, all } from 'redux-saga/effects'

function* fetchData(action) {
    try {
    	const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/todos/1');
        const responseBody = yield response.json();
        yield put({ type: "NEWDATA", data: responseBody });
    } catch (e) {
    	 console.log(e)
      return;
    }

 }

function* actionWatcher() {
    yield takeLatest("ADDNUM", fetchData);
}

function* actionWatcherred() {
    yield takeLatest("REDNUM", fetchData);
}


export default function* () {
	yield all([
   		actionWatcher(),
   		actionWatcherred()
   ]);	
}