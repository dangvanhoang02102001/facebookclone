import axios from 'axios'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { groupActions } from '~/store/group-slice';

import GroupCreationComponent from "~/components/Group/GroupCreation/GroupCreation"
import GroupCreationMain from "~/components/Group/GroupCreation/GroupCreationMain"
import GroupCreationSidebar from "~/components/Group/GroupCreation/GroupCreationSidebar"

const GroupCreation = (props) => {
    const dispatch = useDispatch()
    const [grName, setGrName] = useState('')
    const [groupMode, setGroupMode] = useState(0)
    const [isDrop, setIsDrop] = useState(false)
    // const [disable, setDisable] = useState(true)
    // if(grName === '' )
    
    const handleToggleDrop = () => {
        setIsDrop(!isDrop)
    } 

    const handleSetPublicMode = () => {
        setGroupMode(1)
        setIsDrop(false)
    }

    const handleSetPrivateMode = () => {
        setGroupMode(2)
        setIsDrop(false)
    }

    const handleTypingGroupName = (e) => {
        setGrName(e.target.value)
    }

    const handleCreateGroup = () => {
        axios.post('/groups', {
            group_name: grName,
            modifier: groupMode
        })
        .then(function (response) {
            console.log(response.data)
            console.log(response.data.group)
            dispatch(groupActions.setCurrentGroup(response.data.group))
            
        })
        .catch(function (err) {
            console.log(err)
        });
    }

    const currentGroup = useSelector(state => state.group.currentGroup)
    console.log(currentGroup)

    return (
        <GroupCreationComponent>
            <GroupCreationSidebar
                onTypingNameGroup={handleTypingGroupName}
                onSetPublicMode={handleSetPublicMode}
                onSetPrivateMode={handleSetPrivateMode}
                onToggleDrop={handleToggleDrop}
                groupMode={groupMode}
                grName={grName}
                isDrop={isDrop}
                onCreateGroup={handleCreateGroup}
            />
            <GroupCreationMain
                grName={grName}
                groupMode={groupMode}
            />
        </GroupCreationComponent>
    )
}

export default GroupCreation