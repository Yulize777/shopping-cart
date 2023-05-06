import {Route, Routes} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Home from "./pages/home/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import {ShoppingCartProvider} from "./context/ShoppingCartContext";
const App = () => {
    return (
        <ShoppingCartProvider>
            <NavBar/>
            <Container className={'mb-4'}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/store'} element={<Store/>}/>
                    <Route path={'/about'} element={<About/>}/>
                </Routes>
            </Container>
        </ShoppingCartProvider>
    );
};

export default App;