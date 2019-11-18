export const getCharacters = state => state.characters.list;
export const getCharactersLoading = state => state.characters.loading;
export const getCharacter = (state, name) => state.characters.list.find(character => character.name === name);
