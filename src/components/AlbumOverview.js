import React from 'react';
import { Grid, Card, CardActionArea, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AlbumCard from './AlbumCard';
import useAlbums from '../hooks/UseAlbums';
import '../App.css';

const AlbumOverview = () => {
  const { albums } = useAlbums();

  return (
    <>
      {(!albums || albums.length === 0) && <div>Geen albums gevonden </div>}
      <Grid container spacing={2} className="Grid">
        {albums.map((album) => (
          <Grid item xs={12} sm={6} md={4} key={album.id}>
            <AlbumCard
              id={album.id}
              name={album.name}
              artist={album.artist}
              imageUrl={album.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
      <Card className="Card">
        <CardActionArea component={Link} to="/new">
          <Button variant="contained" className="Button">
            Voeg nieuw album toe!
          </Button>
        </CardActionArea>
      </Card>
    </>
  );
};

export default AlbumOverview;
