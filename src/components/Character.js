// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const StyledCharacter = styled.div`

`
export default function Character({info, action}){
    return(
        <StyledCharacter>
            {info.name}
            <button onClick={()=> action(info.id)}>
                See Details
            </button>
        </StyledCharacter>
    )
}