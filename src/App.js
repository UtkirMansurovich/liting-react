import React, {useContext, useState} from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Page from "./Pages/Page";
import BlogPages from "./Pages/BlogPages";
import {AppContext} from "./context";
import SearchPage from './Pages/SearchPage';
import StartFooter from "./components/StartFooter";
import Navbar from "./components/Navbar/Navbar";
import PreComLoader from "./components/PreComLoader";
// import Preloader from "./components/Preloader";

function QuizRedirect() {
    const [loading,setLoading] =useState(true)
    console.log(loading)
    return (
        <div>
            <Navbar />
            {loading && <PreComLoader/>}
            <div style={{width: "100%", height: '100%', position:'relative'}}>
                <iframe
                    onLoad={() => setLoading(false)}
                    src="https://form.jotform.com/242628953144461"
                    style={{width: `100%`, height: `2500px`, border: `none`}}
                >
                </iframe>
                <div style={{position:"absolute", bottom:'0', width:'100%', height:'70px', backgroundColor:'#f3f3fe', zIndex:'1'}}></div>
            </div>
            <StartFooter />
        </div>
    );


}
function App() {
    const {selectContrast, searchItem} = useContext(AppContext);
    // if(slider && slider.length > 0) {
        return (
          <div className={!selectContrast ? "all-contrast all-fontSize" : "all-fontSize"}>
            <Router>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/page/:catId' element={<Page/>}/>
                <Route exact path='/blogs/:catId' element={<BlogPages/>}/>
                <Route exact path='/blogs/:catId/:blogId' element={<Page/>}/>
                <Route exact path='/search' element={<SearchPage/>}/>

                  <Route exact path='/quiz' element={<QuizRedirect/>}/>
              </Routes>
            </Router>
          </div>
        );
    // } else {
    //     return (
    //         <Preloader/>
    //     )
    // }
}

export default App;