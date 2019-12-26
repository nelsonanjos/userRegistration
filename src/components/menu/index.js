import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="container-menu">
      <nav>
        <ul>
          {/* <li><a href="/">Dashboard</a></li> */}
          <li><Link to="/Users">Users</Link></li>
          <li><Link to="/Logout">Exit</Link></li>
          {/* <li><a href="/tickets">Tickets</a></li>
            <li><a href="/statistic">Estatísticas</a></li>
            <li><a>Configurações<span> &gt;</span></a>
              <ul>
                <li><a href="settings/start">Iniciais</a></li>
                <li><a href="settings/advanced">Avançadas</a></li>
              </ul>
            </li> */}
          {/* <li><a href="/Help">Ajuda</a></li> */}
        </ul>
      </nav>
    </div>
  );
}


export default Menu;
