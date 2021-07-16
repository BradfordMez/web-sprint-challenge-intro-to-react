import axios from 'axios';
import { response } from 'msw';
import React,{useState, useEffect} from 'react';
import './App.css';
import CharacterData from './CharacterDetails';
import Character from './components/Character';

const App = () => {
  const [data, setData] = useState([])
  const [character, setCharacter] = useState(null)

  const openDetails = id => {
    setCharacter(id)
  }
  const closeDetails =()=>{
    setCharacter(null)
  }


  useEffect(()=>{
    axios.get('https://swapi.dev/api/people')
    .then((response)=>{
      console.log(response.data)
      setData(response.data)
    })
    .catch(err=>console.log(err))
  }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        data.map((character)=>{
          return <Character key ={character.id} info={character} action={openDetails}/>
        })
      }
      {
        character && <CharacterData characterID={character} close={closeDetails}/>
      }
    </div>
  );
}

export default App;
