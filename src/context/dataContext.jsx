import allContext from './allContext';

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'select_player_role':
      return { ...state, playerRole: action.payload };
    default:
      return state;
  }
};

const selectPlayerRole = (dispatch) => (role_id) => {
  dispatch({
    type: 'select_player_role',
    payload: role_id
  });
};


export const { Provider, Context } = allContext(
  dataReducer,
  {
    selectPlayerRole
  },
  {
    playerRole: null,
    date: null,
    weather: null
  }
);
