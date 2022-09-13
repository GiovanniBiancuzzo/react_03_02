import { ADD_QUERY } from "../actions";

const initialState = {
    query: '',
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_QUERY:
            return {
                ...state,
                query: action.payload
            };

        default:
            return state;
    }
};

export default searchReducer;
