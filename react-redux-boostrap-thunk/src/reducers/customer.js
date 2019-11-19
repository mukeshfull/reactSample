export function loadCustAction(state = ['emp1','emp2','emp3'], action) {
    switch (action.type) {
        case 'LOAD_CUST':
            return 'blah blah';
        default:
            return state;
    }
}
export function customers(state = [], action) {
    // console.log(state); 
    // console.log('action',action);
    switch (action.type) {
        case 'CUSTOMERS_FETCH_DATA_SUCCESS':
            return action.customers;
        case 'ADD_CUST':
            return state.concat(action.payload)
        default:
            return state;
    }
 }