import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import ProjectState from './projectState'
import APIUtil from '../../utilities/APIutils'

interface stateProps {
    state: ProjectState
    setState: React.Dispatch<React.SetStateAction<ProjectState>>
}

function NewProjectForm({state, setState}: stateProps) {
    let navigate = useNavigate();
    const api = new APIUtil()

    const onCancel = ()=> {
        const  path = '/projects'
        navigate(path)
    }

    const onSubmit = () => {
        api.createProject(state)
    }

    return (
        <div className='new-project-form'>
            <Form>
                <div className='new-project-fields'>
                    <Form.Group className='mb-3' controlId='formGroupText'>
                        <Form.Label>Project name</Form.Label>
                        <Form.Control
                            type='text'
                            name='projectName'
                            value={state.name}
                            onChange={(e)=>setState({...state, name: e.target.value})}
                            placeholder='Project name'
                            required
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formGroupText'>
                        <Form.Label>Analyst initials</Form.Label>
                        <Form.Control
                            type='text'
                            name='analystInitials'
                            value={state.initials}
                            onChange={e=>setState({...state, initials: e.target.value})}
                            placeholder='PBJ'
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>DBC file</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={(e) => {
                                let target = (e.target as HTMLInputElement)
                                setState({...state, dbc_file: target.files![0].name})
                            }}
                        />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Blacklist</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={(e) => {
                                let target = (e.target as HTMLInputElement)
                                setState({...state, blacklist_file: target.files![0].name})
                            }}
                        />
                    </Form.Group>
                </div>
                <div className='new-project-buttons'>
                    <Button onClick={onCancel} className='new-project-button-cancel'>Back</Button>
                        <div className='space'></div>
                    <Button type='submit' className='new-project-button-submit' onClick={onSubmit}>Done</Button>
                </div>
            </Form>
        </div>
    )
}

export default NewProjectForm