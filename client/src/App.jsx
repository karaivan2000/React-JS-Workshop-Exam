import { Routes, Route } from 'react-router-dom';

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import RecipeSubmit from './components/recipe-submit/RecipeSubmit';
import RecipeList from './components/recipeList/RecipeList';



function App() {


    return (
        <>
            <Header />
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/recipes" element={<RecipeList />} />
                <Route path="/recipes/submit" element={<RecipeSubmit />} />
                
               
            </Routes>

            <Footer />
        </>
    )
}

export default App
