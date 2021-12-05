import { Grid } from '@mui/material'
import MovieCard from 'components/MovieCard'
import React, { useContext } from 'react'
import { exploreContext } from './ExploreContext'

const Explore = () => {
    const {movies} = useContext(exploreContext)
    return (
        <>
            <Grid container spacing={4}>
            {movies.map((movie) => (
              <MovieCard key={movie.title} post={movie} />
            ))}
          </Grid>
        </>
    )
}

export default Explore
