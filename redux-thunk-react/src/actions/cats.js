export function catsHasErrored(bool) {
    return {
        type: 'CATS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function catsIsLoading(bool) {
    return {
        type: 'CATS_IS_LOADING',
        isLoading: bool
    };
}
export function catsAlreadyLoaded(bool) {
    return {
        type: 'CATS_ALREADY_LOADED',
        hasLoaded: bool
    };
}

export function catsFetchDataSuccess(cats) {
    return {
        type: 'CATS_FETCH_DATA_SUCCESS',
        cats
    };
} 

export function catsFetchData(url) {
    return (dispatch) => {
        dispatch(catsIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(catsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((cats) => {
                dispatch(catsFetchDataSuccess(cats));
                dispatch(catsAlreadyLoaded(true));
            })
            .catch(() => dispatch(catsHasErrored(true)));
    };
}
export function addCat(payload) {
    return { type: 'ADD_CAT', payload };
}
