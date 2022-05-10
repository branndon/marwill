import React from 'react'
import { Link } from 'react-router-dom';

// images
import logo from '../../assets/images/logo.svg';

// styled
import { HeaderContainer } from './styles';
import { ContentCenter } from '../../styles/global';

function Header() {
  return (
    <HeaderContainer>
      <ContentCenter className="header">
        <div>
          <Link to="/">
            <img src={logo} width="152" height="39" alt="Marwill" />
          </Link>
        </div>

        <div>
          <select name="select" id="select">
            <option value="">Personagens</option>
            <option value="a">Homem Aranha</option>
            <option value="b">Homem de Ferro</option>
          </select>
        </div>
      </ContentCenter>
    </HeaderContainer>
  )
}

export default Header