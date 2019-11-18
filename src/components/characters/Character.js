import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Character = ({ name, image }) => (
  <Link to={`/${name}`}>
    <figure>
      <img src={image} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  </Link>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
