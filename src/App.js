import React, {useState, useEffect} from 'react';
import './App.css';
import Character from "./components/Character"
import axios from "axios"
import styled from "styled-components"

const App = () => {

const [characters, setcharacterInfo] = useState([]);

useEffect(() => {
  axios.get('https://swapi.dev/api/people/')

  .then((res) => {
    console.log(res.data)
    setcharacterInfo(res.data);
  })

  .catch((err) => {
    console.log(err);
  })
},[])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
     {characters.map((character) => (
       <Character
       key={character.name}
       character={character}
       
       />

     ))}
    </div>
  );
}

const AppStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default App;
