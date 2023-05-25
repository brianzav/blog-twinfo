import React from 'react';
import { Container, Content } from './styles';
import { 
  FaTimes, 
  FaHome, 
  FaUserAlt,  
  FaRegFileAlt,
  FaRegCalendarAlt
} from 'react-icons/fa';
import SidebarItem from '../SidebarItem';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilize o componente Container com a fonte desejada
const StyledContainer = styled(Container)`
  font-family: Arial, sans-serif; /* Substitua por sua fonte desejada */
`;

// Estilize o componente Content com a fonte desejada
const StyledContent = styled(Content)`
  font-family: Arial, sans-serif; /* Substitua por sua fonte desejada */
`;

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false);
  }

  return (
    <StyledContainer sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <StyledContent>

        <Link to="/menu">
          <SidebarItem Icon={FaHome} Text="Menu" />
        </Link>

        <Link to="/streamer">
          <SidebarItem Icon={FaUserAlt} Text="Streamer" />
        </Link>

        <Link to="/calendario">
          <SidebarItem Icon={FaRegCalendarAlt} Text="Calendário" />
        </Link>

        <Link to="/noticias">
          <SidebarItem Icon={FaRegFileAlt} Text="Notícias" />
        </Link>

      </StyledContent>
    </StyledContainer>
  );
}

export default Sidebar;