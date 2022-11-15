import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { MoviesDataContext, MoviesDataContextProvider } from './context/MoviesDataContext';
import { HomePage } from './pages/HomePage';
import { MoviesPage } from './pages/MoviesPage';
import { MyListPage } from './pages/MyListPage';
import { OriginalsPage } from './pages/OriginalsPage';
import { RecentlyAddedPage } from './pages/RecentlyAddedPage';
import { TVShowsPage } from './pages/TVShowsPage';

function App() {
  return (
    <> 
      <div className=''>
        <Navbar />
        <MoviesDataContextProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/TVShows' element={<TVShowsPage />} />
            <Route path='/Originals' element={<OriginalsPage />} />
            <Route path='/Movies' element={<MoviesPage />} />
            <Route path='/RecentlyAdded' element={<RecentlyAddedPage />} />
            <Route path='/MyList' element={<MyListPage />} />
          </Routes>
        </MoviesDataContextProvider>
        <Footer />
      </div>  
    </>
  );
}

export default App;
