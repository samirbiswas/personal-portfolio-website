import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import About from './components/Pages/About/About';
import ContactUs from './components/Pages/ContactUs/ContactUs';
import Portfolio from './components/Pages/Portfolio/Portfolio';
import Blog from './components/Pages/Blog/Blog';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>

        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/contact'>
          <ContactUs></ContactUs>
        </Route>
        <Route path='/portfolio'>
          <Portfolio></Portfolio>
        </Route>
        <Route path='/blog'>
        <Blog></Blog>
        </Route>
        
      </Switch>
      
    </Router>
  );
}

export default App;
