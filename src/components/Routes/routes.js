import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Wellcome from '../pages/Welcome';
import Home from '../pages/Home';
import Comikeate from '../pages/Comikeate.jsx';
import Textil from '../pages/Textil';
import Papeleria from '../pages/Papeleria';
import Ceramica from '../pages/Ceramica';
import Madera from '../pages/Madera';
import Lienzos from '../pages/Lienzos';
import Contactanos from '../pages/Contactanos';
// import Carrito from '../pages/Carrito';
// import Ficha from '../pages/Ficha';
import MenuUser from '../pages/MenuUser';
// import MenuAdmin from '../pages/MenuAdmin';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Wellcome />}/>
            <Route path="/Home/" element={<Home />}/>
            <Route path="/Comikeate/" element={<Comikeate />}/>
            <Route path="/Textil/" element={<Textil />}/>
            <Route path="/Papeleria/" element={<Papeleria />}/>
            <Route path="/Ceramica/" element={<Ceramica />}/>
            <Route path="/Madera/" element={<Madera />}/>
            <Route path="/Lienzos/" element={<Lienzos />}/>
            <Route path="/Contactanos/" element={<Contactanos />}/>
            {/* <Route path="/Ficha/" element={<Ficha />}/>
            <Route path="/Carrito/" element={<Carrito />}/> */}
            <Route path="/MenuUser/" element={<MenuUser />}/>
            {/* <Route path="/MenuAdmin/" element={<MenuAdmin />}/> */}
            <Route path="/LogIn/" element={<LogIn />}/>
            <Route path="/SignUp/" element={<SignUp />}/>
        </Routes>
    </BrowserRouter>
);
export default Router;