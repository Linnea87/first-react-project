import logo from './logo.svg';
import './App.css';
// import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import EventsClass from './components/EventsClass';
// import EventsFunctional from './components/EventsFunctional';
import EventBinding from './components/EventBinding';


function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you!"  name="Mike"  age="32" /> */}
      {/* <StatefulGreetingWithPrevState/> */}
      {/* <EventsFunctional />
      <EventsClass /> */}
      <EventBinding />
    </div>
  );
}

export default App;
