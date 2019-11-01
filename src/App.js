import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import appStore from './reducer'

const dashboard = lazy(()=> import('./dashboard/dashboard'));



const sayHello = (props)=>{
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let foo = params.get('lname');

  return ( <h3>hello {props.match.params.name} { foo } </h3>)

}



function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
      <Router>
        <Suspense fallback={<div>...Loading Please Wait!!!</div>}>
          <Switch>
            <Route exact  path="/name/:name" component={sayHello}/>
            <Route path="/dashboard" component={dashboard}/>
            <Route path="*" render={()=>{
              return (
                  <h1>404</h1>
                )
            }}/>
          </Switch>
        </Suspense>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
