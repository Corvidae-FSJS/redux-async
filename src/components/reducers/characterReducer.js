const initialState = {
  list: [],
  loading: true
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    // case FETCH_CHARACTER_LOADING:
    // case FETCH_CHARACTERS_LOADING:
    //   return { ...state, loading: true };
    // case FETCH_CHARACTER_DONE:
    // case FETCH_CHARACTERS_DONE:
    //   return { ...state, loading: false };
    // case FETCH_CHARACTERS:
    //   return { ...state, list: [...state.list, ...action.payload] };
    // case FETCH_CHARACTER:
    //   return { ...state, list: [...state.list, action.payload] };
    default:
      return state;
  }
}
