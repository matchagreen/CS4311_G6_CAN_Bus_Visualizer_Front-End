import PacketList from "./PacketList"
import { Button} from "react-bootstrap"
import { ArrowRepeat } from "react-bootstrap-icons"

import './index.css'

function PacketContainer() {
    return (
        <div className='packet-container rounded'>
            <div className='packet-container-inner'>
                <h3>Packets</h3>
                <Button className='rounded-pill'>
                    Fetch &nbsp;
                    <ArrowRepeat/>
                </Button>
            </div>
            <br />
            <PacketList></PacketList>
        </div>
    )
}

export default PacketContainer