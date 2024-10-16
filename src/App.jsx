import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Recipe from './pages/Recipe/Recipe';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/recipes/:id' element={<Recipe />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
