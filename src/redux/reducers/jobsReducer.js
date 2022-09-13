import { ADD_TO_CATALOGUE, LOADED_CATALOGUE, GET_CATALOGUE_ERROR } from "../actions";

const initialState = {
    catalogue: [],
    loading: true,
    error: false
};

const jobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CATALOGUE:
            return {
                ...state,
                catalogue: action.payload
            };
        case LOADED_CATALOGUE:
            return {
                ...state,
                loading: !state.loading
            };
        case GET_CATALOGUE_ERROR:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
};

export default jobsReducer;
