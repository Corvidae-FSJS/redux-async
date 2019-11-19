import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Characters from '../characters/Characters';
import { connect } from 'react-redux';
import { getCharacters, getCharactersLoading } from '../selectors/characterSelector';
import { fetchCharacters } from '../actions/charactersActions';

function DisplayCharacters({ characters, loading, fetchCharacters }) {
  useEffect(() => {
    fetchCharacters();
  }, []);

  if(loading) return <h1>The Truth Is Out There...</h1>;

  return (
    <>
      <h1>Character Gallery</h1>
      <Characters characters={characters} />
    </>
  );
}

DisplayCharacters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  fetchCharacters: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCharacters() {
    dispatch(fetchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayCharacters);


