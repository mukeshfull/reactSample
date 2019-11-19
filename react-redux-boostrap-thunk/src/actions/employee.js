export function loadEmpAction(data) {
    return {
        type: 'LOAD_EMP',
        data
    };
}
export function employeesFetchDataSuccess(employees) {
    return {
        type: 'EMPLOYEE_FETCH_DATA_SUCCESS',
        employees
    };
} 

export function employeesFetchData(url) {
    return (dispatch) => {
        //dispatch(employeesIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

               // dispatch(employeesIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((employees) => {
                dispatch(employeesFetchDataSuccess(employees));
              //  dispatch(employeesAlreadyLoaded(true));
            })
            .catch(() => dispatch(employeesHasErrored(true)));
    };
}