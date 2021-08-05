import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import { getSubmissions } from './actions/submissions'
import Submissions from './components/Submissions/Submissions'
import Form from './components/Form/Form'
import dog from './images/dog.svg'
import useStyles from './styles'

export default function App() {
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSubmissions())
    }, [dispatch])

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Dogs</Typography>
                <img className={classes.image} src={ dog } alt="dog" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing="3">
                        <Grid item xs={12} sm={7}>
                            <Submissions />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>

                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}
