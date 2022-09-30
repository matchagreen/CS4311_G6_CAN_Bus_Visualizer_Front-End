import PacketList from "./PacketList"
import { Button} from "react-bootstrap"
import { ArrowRepeat, PauseFill, PlayFill } from "react-bootstrap-icons"
import { useState } from "react";
import './index.css'

function PacketContainer() {
    let [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className='packet-container rounded'>
            <div className='packet-container-inner'>
                <h6>Packets</h6>
                <div className='packet-buttons'>
                    <Button className='rounded-pill' size='sm'>
                        <ArrowRepeat/>
                        &nbsp;
                        Fetch
                    </Button>
                    &nbsp;
                    {isPlaying ?
                        (
                            <Button className='rounded-pill' variant='success' size='sm' onClick={() => setIsPlaying(false)}>
                                <PauseFill/>
                                &nbsp;
                                Stop
                            </Button>
                        ) : 
                        (
                            <Button className='rounded-pill' variant='light' size='sm' onClick={() => setIsPlaying(true)}>
                                <PlayFill/>
                                &nbsp;
                                Play
                            </Button>
                        )
                    }
                </div>
            </div>
            <PacketList></PacketList>
        </div>
    )
}

export default PacketContainer