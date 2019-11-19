export function firstTestAction(state = 'some blah', action) {
    switch (action.type) {
        case 'TEST_ERRORED':
            return 'blah blah';

        default:
            return state;
    }
}
 