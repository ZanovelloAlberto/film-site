import { Button, Grid, TextField } from '@mui/material'
import PageLayout from 'components/PageLayout'
import { useContext } from 'react'
import { addMovieContext } from './AddMovieContext'

const AddMovie = () => {
  const { movie, loading, AddMovie, setMovie } = useContext(addMovieContext)
  return (
    <PageLayout
      title="Add Movie"
      isLoading={loading}
      useHeader
    >
      <form
        onSubmit={(e) => {
          console.log(e);
          AddMovie(movie)
          e.preventDefault()

        }}
      >
        <Grid container spacing={1}>

          <Grid item xs={12}>
            <TextField
              label="Title"
              fullWidth
              onChange={(v) => {
                setMovie({
                  ...movie,
                  title: v.target.value
                })
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Description"
              fullWidth
              onChange={(v) => {
                setMovie({
                  ...movie,
                  description: v.target.value
                })
              }}
            />
          </Grid>


          <Grid item xs />
          <Grid item>
            <Button
              type='submit'
              variant='contained'
            >
              Add
            </Button>
          </Grid>

        </Grid>
      </form>
    </PageLayout>
  )
}

export default AddMovie
