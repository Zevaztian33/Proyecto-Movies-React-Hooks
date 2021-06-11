import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core';
import style from './style';

const MovieResult = ({ Title, Year, Type, imdbID, Poster }) => {
    const classes = style();
    return(
        <Card className={classes.cardContainer} >
            <Grid container className={classes.gridContainer}>
                <Grid item>
                    <img src={Poster} alt={Title} className={classes.poster} />
                </Grid>
                <Grid item className={classes.textContainer}>
                    <Typography variant="h6">{Title}</Typography>
                    <Typography color="primary" variant="h6">{Year}</Typography>
                    <Typography className={classes.textType}>{Type}</Typography>
                </Grid>
            </Grid>
        </Card>
    )
}

export default MovieResult;