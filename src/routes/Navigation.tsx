import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import logo from '../logo.svg';
import ShoppingPage from '../02-component-patterns/pages/ShoppingPage';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <Link to="/" className="nav-active"  >Shopping</Link>
            </li>
            <li>
              <Link to="/about" className="nav-active" >About</Link>
            </li>
            <li>
              <Link to="/users" className="nav-active" >Users</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<h1>HOLA MUNDO</h1>} />
          <Route path="/users" />
          <Route path="/" element={
            <ShoppingPage />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}