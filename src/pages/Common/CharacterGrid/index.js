/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { CardGrid, Card } from './styles';

const DisplayCharacter = props => {
  // eslint-disable-next-line prefer-destructuring
  // eslint-disable-next-line prefer-destructuring
  const character = props.character;
  if (character) {
    switch (props.sorting) {
      case 'ascendant':
        character.sort((a, b) => parseInt(a.id, 2) - b.id);
        break;
      case 'descendant':
        character.sort((a, b) => parseInt(b.id, 2) - a.id);
        break;
      default:
        character.sort((a, b) => parseInt(a.id, 2) > b.id);
    }
  }
  if (!character) {
    return (
      <div>
        <p>LOADING...</p>
      </div>
    );
  }
  return (
    <CardGrid>
      {character.map(char => (
        <Card key={char.id}>
          <img src={char.image} alt={char.name} />
          <section>
            <header>
              <h3>
                <span>{char.id}</span> {char.name} - {char.gender}
              </h3>
              <h5>
                {char.species} - {char.status}
              </h5>
              <p>Latest - {char.location.name}</p>
            </header>
          </section>
        </Card>
      ))}
    </CardGrid>
  );
};

export default DisplayCharacter;
