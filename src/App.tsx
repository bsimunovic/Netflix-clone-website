import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { MoviesPage } from './pages/MoviesPage';
import { MyListPage } from './pages/MyListPage';
import { OriginalsPage } from './pages/OriginalsPage';
import { RecentlyAddedPage } from './pages/RecentlyAddedPage';
import { TVShowsPage } from './pages/TVShowsPage';

function App() {
  return (
    <>
    <div className='bg-black'>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/TVShows' element={<TVShowsPage />} />
      <Route path='/Originals' element={<OriginalsPage />} />
      <Route path='/Movies' element={<MoviesPage />} />
      <Route path='/RecentlyAdded' element={<RecentlyAddedPage />} />
      <Route path='/MyList' element={<MyListPage />} />
    </Routes>
    </div>
    </>
  );
}

export default App;
