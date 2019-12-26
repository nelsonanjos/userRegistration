import React, { useState } from 'react';
import Menu from '../../../components/menu';
import Top from '../../../components/top';
import { Link } from 'react-router-dom';

import './style.css';

const EditUser = () => {
    var accounts = JSON.parse(localStorage.getItem('tableUser'));

    const id = window.location.href.split("/")[5];

    const [nameInput, setName] = useState(accounts[id].name);
    const [cpfInput, setCpf] = useState(accounts[id].cpf);
    const [userInput, setUser] = useState(accounts[id].user);
    const [passInput, setPass] = useState(accounts[id].pass);
    const account = {
        name: '',
        cpf: '',
        user: '',
        pass: '',
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        var op = window.confirm("Are you sure you want to save?");

        if (op === true)
            try {
                account.name = nameInput;
                account.cpf = cpfInput;
                account.user = userInput;
                account.pass = passInput;

                accounts[id] = account;
                localStorage.setItem('tableUser', JSON.stringify(accounts));

                alert('Saved with sucess!');
            }
            catch (e) {
                alert('Ocorreu um erro ');
                alert(e);
            }
        else
            alert("The action has been undone!");
            
        window.location.href = "/users";
    };

    const textButton = 'Salvar';
    return (
        <>
            <Top />
            <Menu />
            <div className="user-edit-form">
                <div className="line-top"></div>
                <form method="post" onSubmit={handleFormSubmit}>
                    <div className="user-edit-fields">
                        Name
                    <input
                            onChange={e => setName(e.target.value)}
                            name="name"
                            value={nameInput}
                            type="text"
                        />
                        CPF
                    <input
                            onChange={e => setCpf(e.target.value)}
                            name="cpf"
                            value={cpfInput}
                            type="text"
                        />
                        User
                    <input
                            onChange={e => setUser(e.target.value)}
                            name="user"
                            value={userInput}
                            type="text"
                        />
                        Password
                    <input
                            onChange={e => setPass(e.target.value)}
                            name="pass"
                            value={passInput}
                            type="password"
                        />
                    </div>
                    <button type="submit" className="user-edit-save-button" >
                        {textButton}
                    </button>
                </form>
                <Link to="/Users" className="button user-add-cancel-button" >
                    Cancel
                </Link>
            </div >
        </>
    );
}

export default EditUser;
