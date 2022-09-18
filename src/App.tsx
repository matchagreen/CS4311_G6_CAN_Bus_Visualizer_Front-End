import './App.css';
import './entrypoint/index';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Intro from './entrypoint/index'
import Projects from './projects/index';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Intro/>}/>
          <Route path='projects' element={<Projects/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
