import React from 'react'
import { useSelector } from 'react-redux'
import Submission from './Submission/Submission'
import useStyles from './submissionsStyles'

export default function Submissions() {
    const submissions = useSelector((state) => state.submissions)
    const classes = useStyles()

    console.log(submissions)

    return (
        <>
            <h1>SUBMISSIONS</h1>
            <Submission />
            <Submission />

        </>
    )
}
