import logo from './logo.svg';
import './App.css';
// import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
// import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';


function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you!"  name="Mike"  age="32" /> */}
      <StatefulGreetingWithCallback/>
    </div>
  );
}

export default App;
