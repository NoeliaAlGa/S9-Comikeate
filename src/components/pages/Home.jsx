import { Link } from "react-router-dom";
import Head from "..//navigation/Head";
import Nav from "../navigation/Nav";

const Home = () => {

return (<div>
            <Head />
            <Nav />
            <div>
                <Link to="/Comikeate">
                    <h1>Comikeate</h1>
                </Link>
            </div>
        </div>)
}
export default Home;