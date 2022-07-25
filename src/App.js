import Navbar from './Navbar';
import Home from './Home';


function App() {
  // const title = "Welcome to Diego's react code";
  // const likes = "50";
  // const person = { name: 'Diego', age: '19'};

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        {/* <h1> {title} </h1>
        <p>liked {likes} times</p>
        <p> {person.name} {person.age} </p> */}
      </div>
    </div>
  );
}

export default App;
