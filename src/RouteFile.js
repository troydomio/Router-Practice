import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Home  from './Home';
import About from './About';

const RouteFile= () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
            </Routes>
        </Router>
    )
}

export default RouteFile; 