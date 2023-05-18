import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaUserAlt,  
  FaRegFileAlt,
  FaRegCalendarAlt
} from 'react-icons/fa'
import SidebarItem from '../SidebarItem'
import { Link } from 'react-router-dom';

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>

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

      </Content>
    </Container>
  )
}
export default Sidebar