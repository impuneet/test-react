import React from "react";
import { CardGrid, Card , Header } from './styles';

const DisplayCharacter = props => {
    const character = props.character;
    console.log(character);
    if (!character) {
        return (
          <div>
            <p>LOADING...</p>
          </div>
        );
      }
      return(
        <CardGrid>
           {character.map(char => (
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