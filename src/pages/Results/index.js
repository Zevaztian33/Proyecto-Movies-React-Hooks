import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, CircularProgress, Button } from '@material-ui/core';
import queryString from 'query-string';
import { searchMovie } from '../../redux/actions/search';
import { movieResults, isSearchLoading } from './../../redux/selectors'; 
import  MovieResult from '../../components/MovieResults';
import style from './../../components/MovieResults/style';

export default ({ location }) => {
    const classes = style();
    const dispatch = useDispatch();
    const movies = useSelector(state => movieResults(state));

    useEffect(() => {
        const { movieName } = queryString.parse(location.search);
        if (movieName && !movies) {
            dispatch(searchMovie({ movieName }));
        }
    });
    
    const renderMovies = () => {
        if (movies) {
            return movies.map((value, index) => <MovieResult key={index} { ...value} /> )
        } else {
            return <CircularProgress size={100} color="primary"/> 
        }
    }

    return(
        <Container>
            <Button variant="contained" className={classes.buttonBack}><a href="/">Volver</a></Button>
            { renderMovies() }
        </Container>
    )
}