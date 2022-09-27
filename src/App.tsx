import './App.css';
import './entrypoint/index';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Intro from './entrypoint/index';
import Projects from './projects/index';
import NewProject from './projects/new';
import Archives from './projects/archive';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNotFound from './pageNotFound/index';





function App() {
  return (
    
    <Router>
      
      <div className='App'>
        <Routes>
          <Route path='/' element={<Intro/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='projects/new' element={<NewProject/>}/>
          <Route path="*" element={<PageNotFound/>} />
          <Route path='projects/archives' element={<Archives/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;