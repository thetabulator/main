import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import Post from './pages/Post'
import {Button} from 'reactstrap'
function App() {
  return (
    
      <Router>
    <div className="App">
     
      <Switch>
      <Route exact path='/' component={Home}></Route>
     <Route exact path="/post/:id" component={Post}></Route>
      </Switch>
    
    </div>
    <footer class="bg-light text-center text-lg-start mt-3">
 
 <div class="text-center p-3">
 
   <a class="text-dark" href="/apiinfo"> APIs</a> | <a class="text-dark" href="/about"> About</a> | <a class="text-dark" href="/authors"> Authors</a>
 </div>

</footer>
    </Router>
     
  );
}

export default App;
