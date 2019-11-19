export function loadCustAction(data) {
    return {
        type: 'LOAD_CUST',
        data
    };
}
export function customersFetchDataSuccess(customers) {
    return {
        type: 'CUSTOMERS_FETCH_DATA_SUCCESS',
        customers
    };
} 

export function customersFetchData(url) {
    return (dispatch) => {
        //dispatch(customersIsLoading(true)); 

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

               // dispatch(customersIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((customers) => {
                dispatch(customersFetchDataSuccess(customers));
              //  dispatch(customersAlreadyLoaded(true));
            })
            .catch(() => dispatch(customersHasErrored(true)));
    };
}