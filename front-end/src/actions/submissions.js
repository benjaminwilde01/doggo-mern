import * as api from '../api'

// Action Creators
export const getSubmissions = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSubmissions()

        dispatch({ type: 'FETCH_ALL', payload: data })

    } catch (error) {
        console.log(error.message)
    }
}

export const createSubmission = (submission) => async (dispatch) => {
    try {
        const { data } = await api.createSubmission(submission)

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}