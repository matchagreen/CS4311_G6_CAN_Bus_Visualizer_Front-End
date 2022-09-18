import Form from 'react-bootstrap/Form'
import projectState from './projectState'

interface stateProps {
    state: projectState
    setState: React.Dispatch<React.SetStateAction<projectState>>
}

function NewProjectForm({state, setState}: stateProps) {
    return (
        <div className='new-project-form'>
            <Form>
                <div className='new-project-fields'>
                    <Form.Group className='mb-3' controlId='formGroupText'>
                        <Form.Label>Project name</Form.Label>
                        <Form.Control
                            type='text'
                            name='projectName'
                            value={state.projectName}
                            onChange={(e)=>setState({...state, projectName: e.target.value})}
                            placeholder='Project name'
                        />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formGroupText'>
                        <Form.Label>Analyst initials</Form.Label>
                        <Form.Control
                            type='text'
                            name='analystInitials'
                            value={state.analystInitials}
                            onChange={e=>setState({...state, analystInitials: e.target.value})}
                            placeholder='PBJ'
                        />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>DBC file</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Blacklist</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </div>
            </Form>
        </div>
    )
}

export default NewProjectForm