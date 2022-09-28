import './index.css';
import APIUtil from '../utilities/APIutils';
import {useNavigate} from "react-router-dom";
import ProjectCardState from './ProjectCardState';
import { Button, ButtonGroup, Col, Container, Dropdown, Row } from 'react-bootstrap';

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

    const api = new APIUtil()

    function getProjectCards(){
      let projects = api.getProjects()
        return projects.map((val: ProjectCardState) => {
          return  <Dropdown as={ButtonGroup} className='mock-project' >
          <Button  className='inside-mock' variant="success">{val.name}</Button>
          <Dropdown.Toggle className='inside-mock'split variant="success" id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Archive</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Duplicate</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        })
      }

    let projectCards = getProjectCards()
  
  return (
    <Container className='container'>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <header className='header'>
        <Dropdown >
          <Dropdown.Toggle className='dropdown' variant="success" id="dropdown-basic">
            Projects
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={onArchives}>Archives</Dropdown.Item>
          </Dropdown.Menu>

        </Dropdown>
      </header>
      <Row>

          <Col className='col' xs={4} md={2}>
            <div className='side-bar' > 
              <Button className = "side-buttons" onClick={onNewProject}>New</Button>
              <br></br>
              <Button className = "side-buttons">
  
              </Button>
            </div>
          </Col>
          <Col className='col' xs={14} md={10}>
      
            {projectCards}
          </Col>
        </Row>
    </Container>
  );
}


export default Projects;
