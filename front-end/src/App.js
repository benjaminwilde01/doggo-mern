import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import Submissions from './components/Submissions/Submissions'
import Form from './components/Form/Form'

import dog from './images/dog.svg'

export default function App() {
    return (
        <Container maxWidth="lg">
            <AppBar position="static" color="inherit">
                <Typography variant="h2" align="center">Dogs</Typography>
                <img src={ dog } alt="dog" height="60" />
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
