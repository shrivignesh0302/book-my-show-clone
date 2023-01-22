import{Routes,Route} from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage.pages';
import MoviePage from './pages/MoviePage.pages';
import PlayPage from './pages/PlayPage.pages';

function App() {

  return (
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/movie/:id' element={<MoviePage/>}></Route>
    <Route path='/play' element={<PlayPage/>}></Route>
    </Routes>
  )
}

export default App;
