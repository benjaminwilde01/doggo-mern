import axios from 'axios'

const url = 'http://localhost:5000/dogs'

export const fetchSubmissions = () => axios.get(url)
export const createSubmission = (newSubmission) => axios.post(url, newSubmission)