import './App.css';
import Login from './Login/login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InfoPanel from './InfoPanel/infoPanel';
import Header from './Header/header';
import Todos from './Todos/Todos';
import { Fragment } from 'react';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <Fragment>
              <Header />
              <Login />
            </Fragment>
          )
        }} 
        />
        <Route exact path="/dash" render={() => { 
          return (
            <Fragment>
              <Header />
              <InfoPanel />
              <Todos />
            </Fragment>
          )
        }}
        />
      </Switch>
    </Router>
    </>
  );
}

export default App;