import './App.css';
import { Navbar } from './components/Navbar';
import { SortComponent } from './components/SortComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import SnippetState from './context/Snippet/SnippetState';

function App() {
  return (
    <SnippetState>
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
    </SnippetState>
  );
}

export default App;
