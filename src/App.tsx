import './App.css';
import './entrypoint/index';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Intro from './entrypoint/index'
import Projects from './projects/index';
import NewProject from './projects/new';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Intro/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='projects/new' element={<NewProject/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
