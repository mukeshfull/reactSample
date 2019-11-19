export function loadUSRAction(state = ['emp1','emp2','emp3'], action) {
    switch (action.type) {
        case 'LOAD_USR':
            return 'blah blah';

        default:
            return state;
    }
}
export function users(state = [], action) {
    // console.log(state);
    // console.log('action',action);
     switch (action.type) {
         case 'USER_FETCH_DATA_SUCCESS':
             return action.users;
         case 'ADD_USER':
             return state.concat(action.payload)
         default:
             return state;
     }
 }