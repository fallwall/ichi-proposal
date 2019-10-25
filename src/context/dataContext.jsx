import allContext from './allContext';

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'select_player_role':
      return { ...state, playerRole: action.payload };
    default:
      return state;
  }
};

const selectPlayerRole = (dispatch) => ({ playerRole }) => {
  dispatch({
    type: 'select_player_role',
    payload: playerRole
  });
};


export const { Provider, Context } = allContext(
  dataReducer,
  {
    selectPlayerRole
  },
  {
    // playerRole: null,
    // date: null,
    weather: null
  }
);
