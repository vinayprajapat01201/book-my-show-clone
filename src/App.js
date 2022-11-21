import './App.css';
//Routing
import { Routes, Route} from "react-router-dom";
//React Slick css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// Pages
import HomePage from './pages/Home_Page';
import MoviePage from './pages/Movie_Page';
import PlayPage from './pages/Play_Page';

function App() {
    return (
    <Routes>
      <Route path = "/" element={<HomePage/>} />
      <Route path = "/movies/:id" element={<MoviePage/>} />
      <Route path = "/plays" element = {<PlayPage/>}/>
    </Routes>);
}
export default App;