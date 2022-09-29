import PacketList from "./PacketList"
import { Button} from "react-bootstrap"
import { ArrowRepeat } from "react-bootstrap-icons"

import './index.css'

function PacketContainer() {
    return (
        <div className='packet-container rounded'>
            <div className='packet-container-inner'>
                <h6>Packets</h6>
                <Button className='rounded-pill' size='sm'>
                    Fetch &nbsp;
                    <ArrowRepeat/>
                </Button>
            </div>
            <PacketList></PacketList>
        </div>
    )
}

export default PacketContainer