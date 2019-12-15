import React from "react";
import { CardGrid, Card , Header } from './styles';

const DisplayCharacter = props => {
    const character = props.character;
    if(character) {
      switch(props.sorting) {
        case "ascendant" : 
        console.log(props.sorting);
        character.sort((a, b) => (parseInt(a.id) - b.id));
        break;
        case "descendant" :
            console.log(props.sorting);
            character.sort((a, b) => (parseInt(b.id) - a.id));
        break;
        default:
            character.sort((a, b) => (parseInt(a.id) > b.id));
      }
    }

    if (!character) {
        return (
          <div>
            <p>LOADING...</p>
          </div>
        );
      }
      return(
        <CardGrid>
           {
           character.map(char => (
                  <Card
                  key={char.id}
                >
                <p>{char.id}</p>
                <img src={char.image} alt={char.name} />
                <section>
                <header>
                  <h1>
                    <span>{char.id}</span> {char.name}
                  </h1>
                  <h3>
                    {char.species} - {char.status}
                  </h3>
                </header>
                </section>
                </Card>
           ))}
        </CardGrid>
      )
}

export default DisplayCharacter;