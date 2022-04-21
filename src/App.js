import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./Pages/Page";
import BlogPages from "./Pages/BlogPages";

function App() {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/page/:blogId' element={<Page/>}/>
            <Route exact path='/blogs/:catId' element={<BlogPages/>}/>
        </Routes>
    </Router>
  );
}

export default App;
