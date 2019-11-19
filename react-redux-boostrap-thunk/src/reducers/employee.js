export function loadEmpAction(state = ['emp1','emp2','emp3'], action) {
    switch (action.type) {
        case 'LOAD_EMP':
            return 'blah blah';

        default:
            return state;
    }
}
export function employees(state = [], action) {
    // console.log(state);
    // console.log('action',action);
     switch (action.type) {
         case 'EMPLOYEE_FETCH_DATA_SUCCESS':
             return action.employees;
         case 'ADD_EMPLOYEE':
             return state.concat(action.payload)
         default:
             return state;
     }
 }