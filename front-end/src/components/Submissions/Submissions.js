import React from 'react'
import Submission from './Submission/Submission'
import useStyles from './submissionsStyles'

export default function Submissions() {
    const classes = useStyles()

    return (
        <>
            <h1>SUBMISSIONS</h1>
            <Submission />
            <Submission />

        </>
    )
}
