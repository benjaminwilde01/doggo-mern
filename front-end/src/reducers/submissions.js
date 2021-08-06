// eslint-disable-next-line import/no-anonymous-default-export
export default (submissions = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [ ...submissions, action.payload]
        default:
            return submissions
    }
}