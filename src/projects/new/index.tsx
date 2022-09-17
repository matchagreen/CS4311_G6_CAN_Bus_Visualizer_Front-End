import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class NewProject extends React.Component {
    state = {
        projectName: '',
        baudRate: 9600,
        userInitials: '',
    }

    render() {
        return (
            <div className='new-project'>
                <h1 className='new-project-title'>New Project</h1>
                <div className='new-project-form'>
                    <Form>
                        <div className='new-project-fields'>
                            <Form.Group className='mb-3' controlId='formGroupText'>
                                <Form.Label>Project name</Form.Label>
                                <Form.Control
                                    type='text'
                                    name='projectName'
                                    value={this.state.projectName}
                                    onChange={e => this.setState({projectName: e.target.value})}
                                    placeholder='PBJ'
                                />
                            </Form.Group>
                            <Form.Group className='mb-3' controlId='formGroupNumber'>
                                <Form.Label>Baud-rate</Form.Label>
                                <Form.Control
                                    type='number'
                                    name='baudRate'
                                    value={this.state.baudRate}
                                    onChange={e => this.setState({baudRate: e.target.value})}
                                    placeholder='9600'
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
                        <div className='new-project-buttons'>
                            <Button>Cancel</Button>
                            <div className='space'></div>
                            <Button type='submit'>Done</Button>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default NewProject