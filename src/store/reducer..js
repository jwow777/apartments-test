export const initialState = {
  apartments: [],
};

export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_APARTMENTS_LIST':
      return {
        ...state,
        apartments: action.payload,
      };
    default:
      return state;
  }
}