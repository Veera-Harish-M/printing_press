import React from 'react';
import Login from './pages/login';
import Register from './pages/register';
import Contact from './pages/contact';
import Home from './pages/home';
import { Route, Switch } from 'react-router-dom';
import Error from './pages/error';
import Navigbar from './components/Navigbar';
import ProductDisplay from './ProductDisplay'
import Singleproduct from './singleproduct'
import Cart from './pages/cartdisp' 
import Footer from './components/Footer'
import Payment from './pages/payment'
import Thanks from './pages/Thanks'
import Aboutus from './pages/about'
function App() {
 

  return (
    <div>
      <Navigbar/>  
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/contact" component={Contact}/>
        <Route path="/category/:group" component={ProductDisplay}/>
        <Route path="/product/:slug" component={Singleproduct}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/payment" component={Payment}/>
        <Route exact path="/thanks" component={Thanks}/>
        <Route exact path="/about" component={Aboutus}/>
       
        <Route  component={Error}/>
      </Switch> 

      <Footer/>
    </div>
 );   
}

export default App;