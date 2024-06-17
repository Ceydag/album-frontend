import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Container, Typography } from '@mui/material';
import AlbumOverview from './components/AlbumOverview';
import AlbumDetail from './components/AlbumDetail';
import CreateAlbum from './components/CreateAlbum';

// import logo from './logo.svg';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static" className={AppBar}>
          <Toolbar>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Typography variant="h6">
                Mijn Applicatie
              </Typography>
            </Link>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            {/* Hier komen de routes */}
            <Route path="/" element={<AlbumOverview/>} />
            <Route path="/album/:id" element={<AlbumDetail />} />
            <Route path="/new" element={<CreateAlbum />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;