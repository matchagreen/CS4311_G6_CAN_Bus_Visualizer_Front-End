import { InputGroup, Row, Col, Modal, Form, Button} from 'react-bootstrap'

function PacketViewSettingsModal({onHide, onSubmit, show}: any) {
    return (
        <Modal show={show} onHide={onHide} className='test'>
            <Modal.Header closeButton>
                <Modal.Title>Packet View Settings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <h5>Order</h5>
                    <InputGroup className="mb-3" size='sm'>
                        <InputGroup.Text id="basic-addon1">Sort by:</InputGroup.Text>
                        <Form.Select size='sm'>
                            <option value='timeDesc'>Time (Newest)</option>
                            <option value='timeAsc'>Time (Oldest)</option>
                            <option value='idAsc'>Node ID (Increasing)</option>
                            <option value='idDesc'>Node ID (Decreasing)</option>
                        </Form.Select>
                    </InputGroup>
                    <br />
                    <h5>Filters</h5>
                    <Row>
                        <Col>
                            <InputGroup className='mb-3' size='sm'>
                                <InputGroup.Text id='basic-addon2'>After:</InputGroup.Text>
                                <Form.Control size='sm' placeholder={'11T082554602'}/>
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className='mb-3' size='sm'>
                                <InputGroup.Text id='basic-addon3'>Before:</InputGroup.Text>
                                <Form.Control size='sm' placeholder={'11T082620711'}/>
                            </InputGroup>
                        </Col>
                    </Row>
                    <InputGroup className='mb-3' size='sm'>
                        <InputGroup.Text id='basic-addon4'>Node:</InputGroup.Text>
                        <Form.Control size='sm' placeholder={'18F0010B'}/>
                    </InputGroup>
                    <br />
                    <Button variant="primary" size='sm' className='rounded-pill'>
                        Reset
                    </Button>
                    &nbsp;
                    &nbsp;
                    <Button variant="primary" type="submit" size='sm' className='rounded-pill'>
                        Apply
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default PacketViewSettingsModal