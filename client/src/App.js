import './App.css';
import { Navbar } from './components/Navbar';
import { SortComponent } from './components/SortComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Alerts from './components/layout/Alerts';
import SnippetState from './context/Snippet/SnippetState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/Snippet/alert/AlertState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => {
  return (
    <AuthState>
      <SnippetState>
        <AlertState>
          <Router>
            <div className='App'>
              <Navbar />
              <SortComponent />
              <Alerts />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
              </Switch>
            </div>
          </Router>
        </AlertState>
      </SnippetState>
    </AuthState>
  );
};

export default App;
