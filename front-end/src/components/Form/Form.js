import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from 'react-file-base64'
import { useDispatch } from 'react-redux'

import useStyles from './formStyles'
import { createSubmission } from '../../actions/submissions'

export default function Form() {
    const [submissionData, setSubmissionData] = useState({
        dogName: '', author: '', hobbies: '', imgFile: ''
    })
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createSubmission(submissionData))
    }

    const clear = () => {

    }

    return (
        <Paper className={ classes.paper }>
            <form autoComplete="off" noValidate className={ `${ classes.form } ${ classes.root }`} onSubmit={ handleSubmit }>
                <Typography variant="h6">
                    Submit Your Dog
                </Typography>
                <TextField 
                    name="author" variant="outlined" label="Submitted By" fullWidth value={ submissionData.author } onChange={(e) => setSubmissionData({ ...submissionData, author: e.target.value })}
                />
                <TextField 
                    name="dogName" variant="outlined" label="Dog's Name" fullWidth value={ submissionData.dogName } onChange={(e) => setSubmissionData({ ...submissionData, dogName: e.target.value })}
                />
                <TextField 
                    name="hobbies" variant="outlined" label="Dog's Hobbies" fullWidth value={ submissionData.hobbies } onChange={(e) => setSubmissionData({ ...submissionData, hobbies: e.target.value })}
                />
                <div className={ classes.fileInput }>
                    <FileBase 
                        type="imgFile" multiple={ false } onDone={ ({ base64 }) => setSubmissionData({ ...submissionData, imgFile: base64 })}
                    />
                </div>
                <Button className={ classes.buttonSubmit } variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={ clear } fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}
