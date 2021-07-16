import React,{useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledCharacterDetails = styled.div`

`


export default function CharacterData(props){
    const {characterID, close} = props
    const [characterData, setCharacterData] = useState(null)

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${characterID}`)
        .then((response)=>{
          console.log(response.data)
          setCharacterData(response.data)
        })
        .catch(err=>{debugger})
      }, [characterID]) 


    return(
        <StyledCharacterDetails>
            <h2>Details:</h2>
            {
                characterData &&
                <>
                    <p>Name:{characterData.name}</p>
                    <p>Height:{characterData.height}</p>
                    <p>Gender:{characterData.gender}</p>
                    <p>Mass:{characterData.mass}</p>
                    <p>Hair:{characterData.hair_color}</p>
                    <p>Skin:{characterData.skin_color}</p>
                    <p>Eyes:{characterData.eye_color}</p>
                    <p>Birth-Year:{characterData.birth_year}</p>
            </>
            }
            <button onClick={close}>Close</button>
        </StyledCharacterDetails>
    )}
