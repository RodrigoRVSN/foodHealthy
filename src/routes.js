import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarHealthy from './components/Navbar';

import Home from './pages/Home';
import CadastroPage from './pages/Cadastro';
import Footer from './components/Footer';
import LoginPage from './pages/Login';
import WelcomePage from './pages/Welcome';

/* Routes utilizado para caso fossem colocadas mais páginas, para salvar a componentização de forma simples da navbar e do Footer */

export default function Routes() {
    return (
        <Router>
            <NavbarHealthy />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/cadastro' component={CadastroPage} />
                <Route path='/login' component={LoginPage} />
                <Route path='/welcome' component={WelcomePage} />
            </Switch>
            <Footer />
        </Router>
    );
}