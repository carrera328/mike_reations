import './App.css';
import {useState} from 'react';
import Home from './layouts/Home';
import Menu from './layouts/Menu';
import SubMenu from './layouts/SubMenu';
import {data} from './components/db';
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {

  // global cart state, push items 
  const [cart, setCart] = useState([]);
  const handleAddCart = (item) => {
    cart.push(item);
    console.log('--CART--');
    console.log(cart);
  }
  
  return (
    <Router>
      <Route exact path="/" component={Home}/> 
      <Route exact path="/menu" render={routeProps => <Menu heading="Menu"/>}/>
      <Route exact path="/sub-menu/:name" render={routeProps => <SubMenu 
      header={routeProps.match.params.name}
      picklistVals = {data.filter((record) => record.name === routeProps.match.params.name)[0].picklistValues}
      addCart = {handleAddCart}
      />}
      />
    </Router> 
  );
}

export default App;


