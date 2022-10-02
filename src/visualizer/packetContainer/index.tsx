import PacketList from "./PacketList"
import { Button} from "react-bootstrap"
import { ArrowRepeat, PlayFill, PauseFill } from "react-bootstrap-icons"
import './index.css'
import { useState } from "react"

function PacketContainer({fetchData, hasMore, packetList, refresh}: any) {
    let [isPlaying, setIsPlaying] = useState(true)

    return (
        <div className='packet-container rounded'>
            <div className='packet-container-inner'>
                <h3>Packets</h3>
                <div className='packet-action-buttons'>
                    <Button className='rounded-pill' size='sm' onClick={refresh}>
                        <ArrowRepeat/>
                        &nbsp;
                        Fetch
                    </Button>
                    &nbsp;
                    {isPlaying ? (
                            <Button className='rounded-pill' variant='success' size='sm' onClick={() => setIsPlaying(false)}>
                                <PauseFill/>
                                &nbsp;
                                Stop
                            </Button>
                        ) : (
                            <Button className='rounded-pill' variant='light' size='sm' onClick={() => setIsPlaying(true)}>
                                <PlayFill/>
                                &nbsp;
                                Play
                            </Button>
                        )
                    }
                </div>
            </div>
            <PacketList
                fetchData={fetchData}
                hasMore={hasMore}
                packetList={packetList}
            />
        </div>
    )
}

export default PacketContainer