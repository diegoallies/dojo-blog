import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';


function App() {
  // const title = "Welcome to Diego's react code";
  // const likes = "50";
  // const person = { name: 'Diego', age: '19'};

  return (
    <Router>
     <div className="App">
      <Navbar/>
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
        {/* <h1> {title} </h1>
        <p>liked {likes} times</p>
        <p> {person.name} {person.age} </p> */}
      </div>
    </div> 
    </Router>
    
  );
}

export default App;
