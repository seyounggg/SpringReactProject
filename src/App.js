import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Header from './main/Header';
import Footer from './main/Footer';
import Home from './main/Home';
import GaguList from './gagu/GaguList';
import GaguDetail from "./gagu/GaguDetail";
function App() {
  return (
    <Router>
      <Header/>
      <div className={"container"}>
        <Routes>
            <Route exact path={"/"} element={<Home/>}/>
            <Route path={"/gagu/gagu_list"} element={<GaguList/>}/>
            <Route path={"/gagu/gagu_detail_react/:no"} element={<GaguDetail/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
