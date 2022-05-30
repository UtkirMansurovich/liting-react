import React, {useContext} from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Page from "./Pages/Page";
import BlogPages from "./Pages/BlogPages";
import {AppContext} from "./context";
import Preloader from "./components/Preloader";

function App() {
    const {slider} = useContext(AppContext);
    if(slider && slider.length > 0) {
        return (
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/page/:catId' element={<Page/>}/>
                    <Route exact path='/blogs/:catId' element={<BlogPages/>}/>
                    <Route exact path='/blogs/:catId/:blogId' element={<Page/>}/>
                </Routes>
            </Router>
        );
    } else {
        return (
            <Preloader/>
        )
    }
}

export default App;
