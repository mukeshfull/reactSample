import axios from 'axios';
export function loadUSRAction(data) {
    return {
        type: 'LOAD_USER',
        data
    };
}
export function addUser(payload) {
    return { type: 'ADD_USER', payload };
}
export function usersFetchDataSuccess(users) {
    return {
        type: 'USER_FETCH_DATA_SUCCESS',
        users
    };
} 

export function usersFetchData(url) {
    return (dispatch) => {
        //dispatch(usersIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

               // dispatch(usersIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((users) => {
                dispatch(usersFetchDataSuccess(users.data.users));
              //  dispatch(usersAlreadyLoaded(true));
            })
            .catch(() => dispatch(usersHasErrored(true)));
    };
}
const apiUrl = 'http://localhost:4000/posts';
export function postUserData(url,payLoad) {
    return (dispatch) => {
        return axios.post(url, payLoad, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
          .then(response => {
            //dispatch(createPostSuccess(response.data))
            console.log(response.data);
          })
          .catch(error => {
            throw(error);
          });
      };
}