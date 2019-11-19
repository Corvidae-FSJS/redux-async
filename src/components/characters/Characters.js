import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
//import styles from './Characters.css';

const Characters = ({ characters }) => {  
  const characterElements = characters.map((character, i) => (
    <li key={`${character.name}-${i}`}>
      <Character {...character} />
    </li>
  ));

  return (
    <ul>
      {characterElements}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
