import axios from 'axios'

const url = 'http://localhost:5000/dogs'

export const fetchSubmissions = () => axios.get(url)
export const createSubmission = (newSubmission) => axios.post(url, newSubmission)
export const updateSubmission = (id, updatedSubmission) => axios.patch(`${url}/${id}`, updatedSubmission)