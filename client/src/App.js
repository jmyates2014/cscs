import './App.css';
import { Content } from './components/Content';
import { Navbar } from './components/Navbar';
import { SortComponent } from './components/SortComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <SortComponent />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
