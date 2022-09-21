import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import NewProjectForm from './NewProjectForm'
import ProjectState from './projectState'
import APIUtil from '../../utilities/APIutils'
import './index.css';

function NewProject() {
    const api = new APIUtil()
    const [state, setState] = useState<ProjectState>({
        name: '',
        baud_rate: 9600,
        initials: '',
        dbc_file: null,
        blacklist_file: null,
    })

    let navigate = useNavigate();

    const onCancel = ()=> {
        const  path = './..'
        navigate(path)
    }

    const onSubmit = () => {
        api.createProject(state)
    }

    return (
        <div className='new-project'>
            <h1 className='new-project-title'>New Project</h1>
            <NewProjectForm state={state} setState={setState}/>
            <div className='new-project-buttons'>
                <Button onClick={onCancel} className='new-project-button-cancel'>Back</Button>
                <div className='space'></div>
                <Button type='submit' className='new-project-button-submit' onClick={onSubmit}>Done</Button>
            </div>
        </div>
    )
}

export default NewProject