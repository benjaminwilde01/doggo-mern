import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'

import useStyles from './submissionStyles'
import submissionsStyles from '../submissionsStyles'


export default function Submission({ submission, setCurrentId }) {
    const classes = useStyles()

    return (
        <Card className={ classes.card }>
            <CardMedia className={ classes.media } image={ submission.imgFile } name={ submission.dogName }></CardMedia>
            <div className={ classes.overlay }>
                <Typography variant='h6'>{ submission.dogName }</Typography>
                <Typography variant='body2'>{ moment(submission.createdAt).fromNow() }</Typography>
            </div>
            <div className={ classes.overlay2 }>
                <Button style={{ color: 'white' }} size='small' onClick={() => setCurrentId(submission._id)}>
                    <MoreHorizIcon fontSize='medium' />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>Submitted By: { submission.author }</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant='h5' gutterBottom>{ submission.hobbies }</Typography>
            </CardContent>
            <CardActions className={ classes.cardActions }>
                <Button size='small' color='primary' onClick={() => {}}>
                    <ThumbUpAltIcon fontSize='small' />
                    Like
                    { submission.totalLikes }
                </Button>
                <Button size='small' color='primary' onClick={() => {}}>
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>
            </CardActions>

        </Card>
    )
}