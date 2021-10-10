import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/services'>
          <Services />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/sign-up'>
          <SignUp />
        </Route>
      </Switch>
    </>
  );
}

export default App;