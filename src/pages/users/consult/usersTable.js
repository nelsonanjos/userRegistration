import React from 'react';
import './style.css';

const UsersTable = () => {
    var accounts = [];
    accounts = JSON.parse(localStorage.getItem('tableUser'));
    if(accounts != null) {    
        return (
            < div className="table" >
                <h2>Users List</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>CPF</th>
                            <th>User</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            accounts.map((account, index) => (
                                <tr key={index}>
                                    <td>{account.name}</td>
                                    <td>{account.cpf}</td>
                                    <td>{account.user}</td>
                                    <td>{account.pass}</td>
                                    <td>
                                        <a 
                                        href={"/users/edit/"+index} 
                                        className="button-edit">
                                            <img src='/img/edit.png' alt="td-edit-button"/>
                                        </a>
                                        <a 
                                        href={"/users/remove/"+index} 
                                        className="button-remove">
                                            <img src='/img/remove.png' alt="td-remove-button"/>
                                        </a>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div >
        )
    } else {
        return(
            <div>
                <br />
                <h1>Não existe usuários cadastrados! :(</h1>
            </div>
        )
    }
};
export default UsersTable;