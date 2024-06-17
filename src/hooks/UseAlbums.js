import { useEffect, useState } from 'react';

const endpoint = `${process.env.REACT_APP_API_BASE}/api/album`;

const useAlbums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                console.log(`Fetching albums from ${endpoint}`);
                const response = await fetch(endpoint);

                if (!response.ok) {
                    console.error(`HTTP error! status: ${response.status}`);
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Fetched albums:', data);
                setAlbums(data);
            } catch (error) {
                console.error('Fetch error:', error.message);
                setAlbums([]);
            }
        };

        fetchAlbums();
    }, []);

    return { albums };
};

export default useAlbums;
