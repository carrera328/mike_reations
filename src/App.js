import './App.css';
import {useState, useEffect} from 'react';
import Home from './layouts/Home';
import Menu from './layouts/Menu';
import SubMenu from './layouts/SubMenu';
import CustomerInfo from './layouts/CustomerInfo';
import Location from './layouts/Location';
import {data} from './components/db';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {useContinue} from './hooks/stateHooks';
import { ToastProvider } from 'react-toast-notifications';


function App() {

  // global cart state
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showContinue, setShowCont] = useContinue(false);

  useEffect(() => {
    if (cart.length > 0) setShowCont(true);
  }, [cart]);

  const handleAddCart = (item) => {
    setCart(prevState => [...prevState, item])
    console.log('--CART--');
    console.log(cart);
  }

  return (
    <ToastProvider>
      <Router>
        <Route exact path="/" component={Home}/> 
        <Route exact path="/menu" render={routeProps => 
          <Menu 
            heading="Menu" 
            continue={showContinue}
            setCont={setShowCont}
          />}
        />
        <Route 
        exact path="/sub-menu/:name" 
        render={routeProps => 
          <SubMenu 
            header={routeProps.match.params.name} 
            picklistVals = {data.filter((record) => record.name === routeProps.match.params.name)[0].picklistValues}
            addCart = {handleAddCart}
          />}
        />
        <Route 
          exact path="/customer-info"
          render={routeProps => 
            <CustomerInfo 
            />
          }
        />
        <Route
          exact path="/location" render={routeProps => <Location />}
        />
      </Router> 
    </ToastProvider>
  );
}

export default App;


