import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE, LOADED_FAVOURITES, GET_FAVOURITES_ERROR } from "../actions";

const initialState = {
    list: [],
    loading: true,
    error: false
};

const favouritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_FAVOURITE: return {
            ...state,
            list: [...state.list, action.payload]
        };
        case REMOVE_FROM_FAVOURITE: return {
            ...state,
            list: state.list.filter(company => company.company_name !== action.payload.company_name)
        };
        case LOADED_FAVOURITES:
            return {
                ...state,
                loading: !state.loading
            };
        case GET_FAVOURITES_ERROR:
            return {
                ...state,
                error: true
            };
        default: return state;
    }
};

export default favouritesReducer;