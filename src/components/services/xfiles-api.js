const URL = 'https://xfiles-api.herokuapp.com/api/v1/characters';

export const getCharacters = () => {
  return fetch(URL)
    .then(res => res.json())
    .then(({ results }) => {   
      return results.map(character => ({
        ...character,
        image: character.image || '../../assets/believe.jpg'
      }));
    });
};

export const getCharacter = name => {
  return fetch(`${URL}/${name}`)
    .then(res => res.json())
    .then(({ results }) => ({
      ...results,
      image: results.image || '../../assets/believe.jpg'
    }));
};
