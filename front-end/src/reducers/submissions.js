// eslint-disable-next-line import/no-anonymous-default-export
export default (submissions = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return submissions
        case 'CREATE':
            return submissions
        default:
            return submissions
    }
}