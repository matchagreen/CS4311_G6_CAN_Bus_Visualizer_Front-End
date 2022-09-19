import './index.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {useNavigate} from "react-router-dom";


function Archive() {
  let navigate = useNavigate();

    const onProjects = ()=> {
        const  path = './'
        navigate(path)
    }
  return (
    <div className='body'>
    <Dropdown>
      <Dropdown.Toggle className='dropdown' variant="success" id="dropdown-basic">
        Archives
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className='dropdown2' onClick={onProjects}>Projects</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  );
}

export default Archive;