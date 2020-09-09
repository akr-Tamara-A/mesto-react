import React from 'react';
import logoPath from '../../images/logo.svg';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header page__header page__section">
        <a href="#" className="header__logo-link">
          <img src={logoPath} alt="logo" className="logo header__logo" />
        </a>
        <h1 className="header__title">Сервис Mesto Russia</h1>
      </header>
    )
  }
}

