// Write your Character component here
import React,{useState} from 'react'
import styled from 'styled-components'


const StyledCharacter = styled.div`
background-color: ${props => props.theme.primaryColor};
margin-left:20rem;
margin-right:20rem;
margin-top:1rem;
margin-bottom:1rem;
padding:1rem;
border: 1em double ${props => props.theme.secondaryColor}
`
const StyledCharacterDetails = styled.div`
background-color: ${props => props.theme.tertiaryColor};
border: 1em ridge ${props=>props.theme.tertiaryColor}
`

export default function Character({info, action}){
    const [characterData, setCharacterData] = useState(null)
    const [openDetails, setOpenDetails] = useState(false)

    return(
        <StyledCharacter>
            {info.name}
            <button onClick={()=>setOpenDetails(!openDetails)}>Details</button>
            {openDetails &&(
            <StyledCharacterDetails info={info}>
                    <p>Height:{info.height}</p>
                    <p>Gender:{info.gender}</p>
                    <p>Mass:{info.mass}</p>
                    <p>Hair:{info.hair_color}</p>
                    <p>Skin:{info.skin_color}</p>
                    <p>Eyes:{info.eye_color}</p>
                    <p>Birth-Year:{info.birth_year}</p>
        </StyledCharacterDetails>)}
        </StyledCharacter>
    )
}