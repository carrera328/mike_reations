import './App.css';
import { Fragment } from 'react';
import Home from './layouts/Home';
import Menu from './layouts/Menu';
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
      <Route exact path="/menu" component={Menu}/>
    </Router> 
  );
}

export default App;
