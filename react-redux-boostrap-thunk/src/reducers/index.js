import { combineReducers } from 'redux';
import { firstTestAction } from './test';
import {loadEmpAction,employees} from './employee';
import {customers,loadCustAction} from './customer';
import {users,loadUSRAction} from './users';
export default combineReducers({
    firstTestAction,
    loadEmpAction,
    employees, 
    customers,
    loadCustAction,
    users,
    loadUSRAction
    
    
});