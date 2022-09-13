import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
    list: []
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
        default: return state;
    }
};

export default favouritesReducer;