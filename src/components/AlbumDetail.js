import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UseAlbum from '../hooks/UseAlbum';
import AlbumForm from './AlbumForm';
import '../App.css';

const AlbumDetail = () => {
  const path = window.location.pathname;
  const albumId = path.substring(path.lastIndexOf('/') + 1);
  const album = UseAlbum(albumId);
  const navigate = useNavigate();

  const removeAlbum = async (albumId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE}/api/album/${albumId}`, {
        method: 'DELETE',
        body: JSON.stringify(albumId),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        console.error(response.statusText);
        return;
      }

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const editAlbum = async (data) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_BASE}/api/album/${albumId}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        console.error(response.statusText);
        return;
      }

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  if (!album) {
    return <div>Geen albums gevonden </div>;
  }

  return (
    <div>
      <Link to="/">Terug</Link>
      <div>Album bewerken:</div>
      <AlbumForm album={album} onSubmit={editAlbum} onRemove={() => removeAlbum(albumId)} />
    </div>
  );
};

export default AlbumDetail;
