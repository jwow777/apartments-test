import './Header.css';

import logo from './../../images/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="header__logo-block">
        <img src={logo} alt="Apartments" className="header__logo-image"/>
        <h1 className="header__logo-title">Apartments</h1>
      </div>
    </header>
  );
}

export default Header;
