// reducer to add catagory to trip data or user data

function reducer(state, action) {
    switch (action.type) {
        case 'addCata':
            return {  };
        case 'deleteCata':
            return {  };
        case 'addItem':
            return {  };
        case 'deleteItem':
            return { };
        case 'addUser':
            return { };
        case 'deleteUser':
            return { };
        default:
            return state;
    }
  }

  export default reducer