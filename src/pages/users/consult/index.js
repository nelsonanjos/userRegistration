import React from 'react';
import './style.css';
import UsersTable from './usersTable';
import Buttons from './buttons';
import Menu from '../../../components/menu';
import Top from '../../../components/top';


const ConsultUser = () => {
    return (
        <div className="consult-user">
            <Top />
            <Menu />
            <Buttons />
            <UsersTable />
        </div>
    );
}

export default ConsultUser;