import React from 'react';
import './header.styles.scss'

const Header = (props) => (
  <header className="page-header">
    <h1>{props.course}</h1>
  </header>
)

export default Header;