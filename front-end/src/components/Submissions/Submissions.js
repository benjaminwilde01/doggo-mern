import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
import Submission from './Submission/Submission'
import useStyles from './submissionsStyles'

export default function Submissions() {
    const submissions = useSelector((state) => state.submissions)
    const classes = useStyles()

    console.log(submissions)

    return (
        !submissions.length ? <CircularProgress /> : (
            <Grid className={ classes.container } container alignItems='stretch' spacing={3}>
                { submissions.map((submission) => (
                    <Grid key={ submission._id } item xs={ 12 } sm={ 6 }>
                        <Submission submission={ submission } />
                    </Grid>
                )) }
            </Grid>
        )
    )
}
