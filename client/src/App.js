import './App.css';
import { Content } from './components/Content';
import { Navbar } from './components/Navbar';
import { SortComponent } from './components/SortComponent';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <SortComponent />
      <Content />
    </div>
  );
}

export default App;
