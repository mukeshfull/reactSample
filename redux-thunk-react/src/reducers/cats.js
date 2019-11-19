export function catsHasErrored(state = false, action) {
    switch (action.type) {
        case 'CATS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function catsAlreadyLoaded(state = false, action) {
    switch (action.type) {
        case 'CATS_ALREADY_LOADED':
            return action.hasLoaded;

        default:
            return state;
    }
}
export function catsIsLoading(state = false, action) {
    switch (action.type) {
        case 'CATS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}
const initialState = {
    cats: []
  };
export function cats(state = [], action) {
   // console.log(state);
   // console.log('action',action);
    switch (action.type) {
        case 'CATS_FETCH_DATA_SUCCESS':
            return action.cats;
        case 'ADD_CAT':
            return state.concat(action.payload)
        default:
            return state;
    }
}
// const initialState = {
//     cats: []
//   }; 
// export function addCat(state = initialState, action) {
//     if (action.type =='ADD_CAT') {
//       return Object.assign({}, state, {
//         cats: state.cats.concat(action.cats)
//       });
//     }
//     return state;
//   }
