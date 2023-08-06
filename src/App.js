
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Home from "./components/Home"
// import RestaurantSearch from "./components/RestaurantSearch"
import RestaurantList from "./components/RestaurantList"
import RestaurantCreate from "./components/RestaurantCreate"
import { Navbar, Nav, Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faList, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
import Login from './components/Login'
import Page404 from './components/Page404'
import Update1 from './components/Update1'
import Search from './components/Search';
import Signup from './components/Signup';
import { createContext, useState } from 'react';

const Appstate = createContext();


function App() {

  const [login, setLogin] = useState(false);

  return (
    <Appstate.Provider value={{ login, setLogin }}>
      <div className="App">
        <Router>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/" Link to="/home">Resto</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome} />Home</Link></Nav.Link>
                <Nav.Link href="#list"><Link to="/list"><FontAwesomeIcon icon={faList} />List</Link></Nav.Link>
                <Nav.Link href="#create"><Link to="/Create"><FontAwesomeIcon icon={faPlus} />Create</Link></Nav.Link>
                <Nav.Link href="#Search"><Link to="/search"><FontAwesomeIcon icon={faSearch} />Search</Link></Nav.Link>
                <Nav.Link href="#Login"><Link to="/Login"><FontAwesomeIcon icon={faUser} />{login ? "Logout" : "Login" }</Link></Nav.Link>
                {/* <Nav.Link href="#Search"><Link to="/Search1"><FontAwesomeIcon icon={faSearch}/>Search</Link></Nav.Link> */}
              </Nav>

            </Container>
          </Navbar>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/list" element={<RestaurantList />}></Route>
            <Route exact path="/create" element={<RestaurantCreate />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/update/:id" element={<Update1 />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Signup" element={<Signup />}></Route>
            <Route path="/*" element={<Page404 />}></Route>
            {/* <Route exact path ="/Search1" element={<RestaurantSearch />}></Route> */}
          </Routes>
        </Router>
      </div>
    </Appstate.Provider>
  );
}

export default App;
export { Appstate };
