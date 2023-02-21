import Router from './components/Routes/routes';
import {BodyStyle} from './style/StyleApp';
import UsuariAdminLS from './hooks/UsuariAdminLS';

const App = () => {
    UsuariAdminLS();
    return (
        <BodyStyle>
            <Router />
        </BodyStyle>
    )
} 

export default App;
