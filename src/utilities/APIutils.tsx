import ProjectState from "../projects/new/ProjectState"
import ProjectCardState from "../projects/ProjectCardState"
import PacketState from "../visualizer/packetContainer/PacketState"
import axios from 'axios'


class APIUtil {
    url = 'http://localhost:8000'

    createProject(project: ProjectState) {
        return axios.post(this.url + '/projects', project)
            .then(function(response) {
                console.log(response)
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    getProjects(): Array<ProjectCardState> {
        return [
            {id: 1, name: 'Project PBJ'},
            {id: 5, name: 'Project grilled cheese'},
            {id: 6, name: 'Project ham'},
            {id: 9, name: 'Project nutella'},
            {id: 11, name: 'Project ham'},
            {id: 13, name: 'Project chicken'},
        ]
    }

    getPackets(page: number): Array<PacketState> {
        var sampleData = `11T082554602;1;cf00203;cd402800043828ff
11T082554603;1;c00000b;fcffff7dffffffff
11T082554604;1;cf00400;f4dede3028fff0ff
11T082554604;1;18fee527;be7a0400d8b60e00
11T082554606;1;cef27fd;20fffae1ff00ffff
11T082554611;1;c000003;ecffffffffffffff
11T082554612;1;cf00203;cdf0270004d827ff
11T082554612;1;c00000b;fcffff7dffffffff
11T082554613;1;c010305;ccfffaffff20440a
11T082554614;1;18f0093e;697d7f637d577f7d
11T082554614;1;cf00400;f4dede1028fff0ff
11T082554615;1;18febf0b;13577d7d8481ffff
11T082554615;1;18feee00;7cffcb2effffffff
11T082554616;1;cef27fd;20fffae1ff00ffff
11T082554621;1;c000003;ecffffffffffffff
11T082554622;1;cf00203;cd40280004e027ff
11T082554622;1;c00000b;fcffff7dffffffff
11T082554623;1;cf00400;f4dede1028fff0ff
11T082554624;1;18ebff27;01ffffffffffffff
11T082554624;1;18fe7027;ffff6f0effffff0d
11T082554625;1;18fec027;ffe471ffffffffff
11T082554625;1;18fef227;70058202ffffffff
11T082554626;1;cef27fd;20fffae1ff00ffff
11T082554631;1;cfe5a2f;1f33330ffff7fcf0
11T082554631;1;c000003;ecffffffffffffff
11T082554632;1;18fe592f;ffffffffdd7ce37c
11T082554632;1;cf00203;cd182800045828ff
11T082554633;1;c00000b;fcffff7dffffffff
11T082554634;1;c001027;fcffff7dffffffff
11T082554634;1;18e4c820;ffffffffffffffff
11T082554635;1;cf00400;f4dede1028fff0ff
11T082554635;1;18f00010;f07d7dfc10ffff1d
11T082554636;1;18f0093e;6b7d7f6b7d2f7f7e
11T082554636;1;cef27fd;20fffae1ff00ffff
11T082554637;1;18fe4a03;fffdffffffffffff
11T082554638;1;18febf0b;15577d7d8382ffff
11T082554638;1;18daee17;0322f92300000000
11T082554639;1;cfe6cee;4b10c0c04f289957
11T082554639;1;1cfec703;fffffffffffc0000
11T082554641;1;c000003;ecffffffffffffff
11T082554642;1;cf00203;cd182800045028ff
11T082554642;1;18f00503;89e80389878988f5
11T082554643;1;c00000b;fcffff7dffffffff
11T082554643;1;cf00300;f0de63fffffff4ff
11T082554644;1;c00270b;fcffff7dffffffff
11T082554645;1;18ebff29;010301001966004b
11T082554645;1;cf00400;f4dede1028fff0ff
11T082554646;1;cef27fd;20fffae1ff00ffff
11T082554647;1;cffcafd;c0fffffffffff800
11T082554649;1;c0320c8;ceffd357ffffffff
11T082554651;1;c000003;ecffffffffffffff
11T082554652;1;c002903;10ffffffffffffff
11T082554652;1;cf00203;cd402800041028ff
11T082554653;1;c00000b;fcffff7dffffffff
11T082554653;1;cf00400;f4dede1028fff0ff
11T082554654;1;18f0093e;6d7d7f737d077f7e
11T082554654;1;18fef100;43b357c40059e03f
11T082554655;1;18febf0b;15577d7d8281ffff
11T082554656;1;cef27fd;20fffae1ff00ffff
11T082554659;1;18fec4c8;ced1cf4ff622ffff
11T082554661;1;c000003;ecffffffffffffff
11T082554662;1;cf00203;cd202800040028ff
11T082554663;1;c010305;ccfffaffff20440a
11T082554663;1;c00000b;fcffff7dffffffff
11T082554664;1;cf00400;f4dede3028fff0ff
11T082554664;1;18f0010b;0000c0ffff01fff3`.toUpperCase()

        let packetData = sampleData.split('\n')
        let parsedPackets = packetData.map((packet) => {
            const fields = packet.split(';')
            return {
                timestamp: fields[0],
                type: parseInt(fields[1]),
                id: fields[2],
                data: fields[3],
            }
        })

        if (page === 0) {
            return parsedPackets.slice(0, 14)
        } else if (page === 1) {
            return parsedPackets.slice(15, 29)
        } else if (page === 2) {
            return parsedPackets.slice(30, 44)
        } else if (page === 3) {
            return parsedPackets.slice(45, 59)
        } else if (page === 4) {
            return parsedPackets.slice(60, 66)
        } else {
            return []
        }
    }
}

export default APIUtil