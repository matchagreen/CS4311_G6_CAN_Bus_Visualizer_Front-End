import { InputGroup, Row, Col, Modal, Form, Button} from 'react-bootstrap'
import {PacketSortOptions as Sort} from '../common/Constants'

function PacketViewSettingsModal({onHide, onSubmit, show}: any) {
    return (
        <Modal show={show} onHide={onHide} className='packet-view-modal'>
            <Modal.Header closeButton>
                <Modal.Title>Packet View Settings</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <div className='packet-sort'>
                        <h5>Order</h5>
                        <InputGroup className="mb-3" size='sm'>
                            <InputGroup.Text id="basic-addon1">Sort by:</InputGroup.Text>
                            <Form.Select size='sm'>
                                <option value={Sort.timeDesc}>Time (Newest)</option>
                                <option value={Sort.timeAsc}>Time (Oldest)</option>
                                <option value={Sort.idAsc}>Node ID (Increasing)</option>
                                <option value={Sort.idDesc}>Node ID (Decreasing)</option>
                            </Form.Select>
                        </InputGroup>
                    </div>
                    <br />
                    <div className='packet-filter'>
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
                    </div>
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