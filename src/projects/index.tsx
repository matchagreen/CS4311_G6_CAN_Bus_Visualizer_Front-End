import './index.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import {useNavigate} from "react-router-dom";

function Projects() {

  let navigate = useNavigate();

    const onNewProject = ()=> {
        const  path = './new'
        navigate(path)
    }

    const onArchives = ()=> {
      const  path = './archives'
      navigate(path)
  }
  
  return (
    <>
    <div className='body'>
    <div className='column side-bar' > 
      <Button className = "side-buttons" onClick={onNewProject}>New</Button>
      <br></br>
      <Button className = "side-buttons">Import</Button>
    </div>

    <div className='column project-space'>

    <Dropdown >
      <Dropdown.Toggle className='dropdown' variant="success" id="dropdown-basic">
        Projects
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={onArchives}>Archives</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Button className='mock-project'> Project 1</Button>
    <Button className='mock-project'> Project 2</Button>
    <Button className='mock-project'> Project 3</Button>
    <Button className='mock-project'> Project 4</Button>
    <Button className='mock-project'> Project 5</Button>



    </div>
    </div>
    </>
  );
}


export default Projects;
