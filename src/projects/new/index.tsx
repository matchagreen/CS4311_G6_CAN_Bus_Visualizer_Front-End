import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import NewProjectForm from './NewProjectForm'
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
            <NewProjectForm state={state} setState={setState}/>
            <div className='new-project-buttons'>
                <Button onClick={onCancel}>Cancel</Button>
                <div className='space'></div>
                <Button type='submit' onClick={onSubmit}>Done</Button>
            </div>
        </div>
    )
}

export default NewProject