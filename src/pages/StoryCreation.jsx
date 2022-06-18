import { useState, useRef, useEffect } from "react"

import textBG1 from '~/assets/img/textBG1.jpg'
import StoryCreationComponent from "~/components/Story/StoryCreation/StoryCreation"
import StoryCreationContent from "~/components/Story/StoryCreation/StoryCreationContent/StoryCreationContent"
import StoryCreationSidebar from "~/components/Story/StoryCreation/StoryCreationSidebar/StoryCreationSidebar"

const StoryCreation = () => {
    const [mode, setMode] = useState('unset')
    const [background, setBackground] = useState(textBG1)
    const [text, setText] = useState('')
    const inputElement = useRef();
    
    
    const handleSetTextMode = () => {
        setMode('text')
    }

    const handleSetImageMode = () => {
        setMode('image')
    }

    const handleSetDefaultMode = () => {
        setMode('unset')
    }

    const handleSetPreview = (data) => {
        setBackground(data)
    }

    const handleSetTextPreview = (data) => {
        setText(data)
    }

    return (
        <StoryCreationComponent>
            <StoryCreationSidebar 
                text={text}
                mode={mode}
                onSetDefaultMode={handleSetDefaultMode}
                onSetBackground={handleSetPreview}
                onSetText={handleSetTextPreview}
                inputElement={inputElement}
            />
            <StoryCreationContent 
                mode={mode}
                background={background}
                onSetTextMode={handleSetTextMode}
                onSetImageMode={handleSetImageMode}
                text={text}
            />
        </StoryCreationComponent>
    )
}

export default StoryCreation