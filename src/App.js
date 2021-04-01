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
      <footer className="text-center text-lg-start">
 
      <div className="btn-group mt-3 justify-content-center">
      <Button outline color="secondary">Home</Button>
        <Button  outline color="secondary">APIs</Button>
        <Button  outline color="secondary">Data</Button>
        </div>

</footer>
    </div>
    </Router>
     
  );
}

export default App;
