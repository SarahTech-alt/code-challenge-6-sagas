import AnimalList from '../AnimalList/AnimalList'
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import AddAnimal from '../AddAnimal/AddAnimal.jsx';

function App() {
  // Renders the entire app on the DOM
      return (
      <div className="App">
        <header>
          <h1>Zoo Animals</h1>
          <h3>List of Species and Class</h3>
        </header>
        <br />
        <br />
        <Router>
          <Route path='/' exact>
        <AnimalList />
        </Route>
        <Route path='/add' exact>
          <AddAnimal />
        </Route>
        </Router>
      </div>
    );
}

export default App;
