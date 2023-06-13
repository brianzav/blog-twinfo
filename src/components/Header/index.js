import React, { useState } from 'react';
import { Container } from './styles';
import { FaBars } from 'react-icons/fa';
import Sidebar from '../Sidebar';
import './estilos.css'; // Importe o arquivo CSS

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  return (
    <Container>
      <h1 className="h1">
        <span>Tw</span>Info
      </h1>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  );
};

export default Header;