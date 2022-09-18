import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from "react-router-dom";
import {useState} from 'react';
import './index.css';

function NewProject() {
    const [state, setState] = useState({
        projectName: '',
        baudRate: 9600,
        analystInitials: '',
    })

    let navigate = useNavigate();

    const onCancel = ()=> {
        const  path = './..'
        navigate(path)
    }

    const onSubmit = () => {
        // TODO: Add call to api and redirect
        console.log(state)
    }

    return (
        <div className='new-project'>
            <h1 className='new-project-title'>New Project</h1>
            <NewProjectForm state={state} setState={setState} onCancel={onCancel}/>
            <div className='new-project-buttons'>
                <Button onClick={onCancel}>Cancel</Button>
                <div className='space'></div>
                <Button type='submit' onClick={onSubmit}>Done</Button>
            </div>
        </div>
    )
}

function NewProjectForm(state: any, setState: any) {
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
    );
}

export default NewProject