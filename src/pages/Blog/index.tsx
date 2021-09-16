import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Context } from '../../utils/context';
import MainFeaturedPost from './FirstPost';
import Post from './Post';
import { Film } from '../../utils/mybase';

import Footer from '../../components/Footer';
import Post2 from './Post2';





const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};



export default function Blog() {
  
  var movies = useContext(Context).movies || [] as Film[]

  return (
    <React.Fragment>

      <br />

      <Container maxWidth="lg">
        {/* <Header title="Blog" sections={sections} /> */}
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {movies.map((v,i) => (
              <Post2 key={v.name} post={v} />
            ))}
          </Grid>
              
          {/* {film && film.map((v,i)=>(<p>{v}</p>))} */}
          
        </main>
      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}
