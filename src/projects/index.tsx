import './index.css';
import APIUtil from '../utilities/APIutils';
import {useNavigate} from "react-router-dom";
import ProjectCardState from './ProjectCardState';
import { Button, ButtonGroup, Col, Nav, Dropdown, Row, Tab, TabContainer, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Projects() {

  let navigate = useNavigate();

    const onNewProject = ()=> {
        const  path = './new'
        navigate(path)
    }
    const api = new APIUtil()

    function getProjectCards(){
      let projects = api.getProjects()
        return projects.map((val: ProjectCardState) => {
          return  <Dropdown as={ButtonGroup} className='mock-project' >
          <Button  className='inside-mock' variant="primary">{val.name}</Button>
          <Dropdown.Toggle className='inside-mock'split variant="primary" id="dropdown-split-basic"/>

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
    <Tab.Container id='projectTabs' defaultActiveKey='activeProjects'>
      <Row>
        <Col sm={3} className='tabColumn'>
          <Nav variant='pills' className='flex-column'>
            <Nav.Item>
              <Nav.Link eventKey='importProject'>
                Import Project
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='newProject' onClick={onNewProject}>
                Create Project
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='activeProjects'>
                Active Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey='archivedProjects'>
                Archived Projects
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey='importProject'>
              <h3 className='projectHeader3'>Import Project</h3>
              Due to import project method not existing on backend this is empty
            </Tab.Pane>
            <Tab.Pane eventKey='activeProjects'>
              <h3 className='projectHeader3'>Active Projects</h3>
              {projectCards}
            </Tab.Pane>
            <Tab.Pane eventKey='archivedProjects'>
              <h3 className='projectHeader3'>Archived Projects</h3>
              {projectCards}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Projects;
