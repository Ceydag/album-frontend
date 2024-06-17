import React from 'react';
import { Card, CardHeader, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import '../App.css';

const AlbumCard = ({ id, name, artist, imageUrl }) => {
  return (
    <Card className="Card">
      <Link to={`/album/${id}`} style={{ textDecoration: 'none' }}>
        <CardHeader title={name} subheader={artist} className="CardHeader" />
        <CardMedia component="img" alt={name} height="200" image={imageUrl} />
      </Link>
    </Card>
  );
};

export default AlbumCard;
