import React from 'react';
import PropTypes from 'prop-types';

const CharacterDetail = ({ name, image, occupation, description, portrayedby }) => (
  <section>
    <h2>{name}</h2>
    <img src={image} />
    <p>Occupation: {occupation}</p>
    <p>Description: {description}</p>
    <p>Portrayed by: {portrayedby}</p>
  </section>
);

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  occupation: PropTypes.string,
  description: PropTypes.string.isRequired,
  portrayedby: PropTypes.string,
};

export default CharacterDetail;
