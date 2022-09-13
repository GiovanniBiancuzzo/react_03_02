export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const ADD_TO_CATALOGUE = 'ADD_TO_CATALOGUE';
export const ADD_QUERY = 'ADD_QUERY';
export const LOADED_CATALOGUE = 'LOADED_CATALOGUE';
export const GET_CATALOGUE_ERROR = 'GET_CATALOGUE_ERROR';
// export const baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search=';
//action creator
export const addToFavouriteAction = (company) => ({
    type: ADD_TO_FAVOURITE,
    payload: company
});

// export const addRemoveToFavouriteAction = (company) => {
//     return (dispatch, getState) => {
//         const actualStateFavourites = getState().favourite.list;
//         console.log(actualStateFavourites);
//         // if(actualStateFavourites.includes())
//         if (actualStateFavourites.filter(companyState => companyState._id !== company._id).length === 0) {
//             dispatch({
//                 type: REMOVE_FROM_FAVOURITE,
//                 payload: company
//             });
//         } else {
//             dispatch({
//                 type: ADD_TO_FAVOURITE,
//                 payload: company
//             });
//         }
//     };
// };

export const removeFromFavouriteAction = (company) => ({
    type: REMOVE_FROM_FAVOURITE,
    payload: company
});

export const addToCatalogueAction = (query) => {
    return (dispatch, getState) => {
        fetch(process.env.REACT_APP_URL_STRING + '=' + query + '&limit=20')
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: ADD_TO_CATALOGUE,
                    payload: data.data
                });
                setTimeout(() => {
                    dispatch({
                        type: LOADED_CATALOGUE,
                    });
                }, 500);
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: LOADED_CATALOGUE,
                });
                dispatch({
                    type: GET_CATALOGUE_ERROR,
                });
            });
    };
};

export const addQueryAction = (query) => ({
    type: ADD_QUERY,
    payload: query
});

// export const setLoadedAction = () => ({
//     type: LOADED,
// });

// export const getCatalogueErrorAction = () => ({
//     type: GET_CATALOGUE_ERROR,
// });
