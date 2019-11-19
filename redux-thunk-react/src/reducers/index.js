import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items';
import { catsAlreadyLoaded,cats, catsHasErrored, catsIsLoading } from './cats';
export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    cats,
    catsHasErrored,
    catsIsLoading,
    catsAlreadyLoaded
    
});
