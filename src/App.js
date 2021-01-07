import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Home from './components/pages/Home';
import OrderPage from './components/pages/OrderPage';
import Miraa from './components/pages/Miraa';
import Food from './components/pages/Food';
import Beverage from './components/pages/Beverage';
import Grocery from './components/pages/Grocery';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import FoodShop from './components/pages/FoodShop';
import Support from './components/pages/Support';
import Order from './components/Order';
function App() {
  return (
    
      <>
      <Router>
        <Navbar />
        <Order />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ordepage"  component={OrderPage} />
          <Route path="/miraaShop"  component={Miraa} />
          <Route path="/foodShop"  component={Food} />
          <Route path="/beverageShop"  component={Beverage} />
          <Route path="/groceryShop"  component={Grocery} />
          <Route path="/sign-up"  component={SignUp} />
          <Route path="/login"  component={Login} />
          <Route path="/shopname"  component={FoodShop} />
          <Route path="/support"  component={Support} />
          <Route path="/news"  component={News} />

        </Switch>
        </Router>
      </>
    
  );
}

export default App;