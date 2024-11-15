import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function useAlbum(albumId) {
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE}/api/album/${albumId}`)
      .then(response => response.json())
      .then(data => setAlbum(data))
      .catch(error => {
        console.error('Error fetching album:', error);
        setAlbum(null);
      });
  }, [albumId]);

  return album;
}

function AlbumDetail() {
  const { id } = useParams();
  const album = useAlbum(id);

  if (!album) {
    return <div>Geen albums gevonden</div>;
  }

  return (
    <div>
      <h2>Album details</h2>
      <Link to="/">Terug</Link>
      {/* Display album details */}
      <h3>{album.name}</h3>
      <p>Artiest: {album.artist}</p>
      <img src={album.imageUrl} alt={album.name} />
    </div>
  );
}

export default AlbumDetail;