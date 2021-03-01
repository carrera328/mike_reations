import './App.css';
import { Fragment } from 'react';
import Home from './layouts/Home';
import Menu from './layouts/Menu';
import SubMenu from './layouts/SubMenu';
import {data} from './components/db';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/> 
      <Route exact path="/menu" render={routeProps => <Menu heading="Inventory"/>}/>
      <Route exact path="/sub-menu/:name" render={routeProps => <SubMenu 
      header={routeProps.match.params.name}
      picklistVals = {data.filter((record) => {
        return record.name === routeProps.match.params.name;
      })[0].picklistValues}
      />}/>
    </Router> 
  );
}

export default App;
