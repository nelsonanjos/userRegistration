import React, { useState } from 'react';
import './style.css';
import Menu from '../../../components/menu';
import Top from '../../../components/top';
import { Link } from 'react-router-dom';

const AddUser = () => {

    const [nameInput, setName] = useState('');
    const [cpfInput, setCpf] = useState('');
    const [userInput, setUser] = useState('');
    const [passInput, setPass] = useState('');

    let accounts = [];

    var accountsJson = JSON.parse(localStorage.getItem('tableUser'));

    const test = (a,b) => a + b ;

    const fieldCheck = field => {
        if (field.value === null || field.value.trim() === ""){
            field.style = "border: 1px solid #ff0000";
            return false;
        }
        else{
            field.style = "border: 1px solid #339680";
            return true;
        }
    }

    const account = {
        name: '',
        cpf: '',
        user: '',
        pass: '',
    };

    const finalWarning = (operation, error) => {
        switch (operation) {
            case 'save':
                return 'Save with sucess!';
            case 'error':
                return 'An error has occurred: '
                    .concat(error)
                    .concat("!");
            case 'cancel':
                return 'The action has been undone!';
            case 'empty':
                return 'Fields on red not can are empty!'

            default:
                return 'Do not possible return in [finalWarning] >52';
        }
    }

    const confirmSave = () => {
        var op = window.confirm("Are you sure you want to save?");
        return op;
    }

    const cleanFields = () => {
        setName('');
        setCpf('');
        setUser('');
        setPass('');
    }

    const emptyFields = inputsElements => {
        var haveEmpty = false;
        inputsElements.map(input => {
            if (document.getElementsByName(input)[0].value === "") {
                document.getElementsByName(input)[0].style = "border: 1px solid #ff0000";
                haveEmpty = true;
            }
            else {
                haveEmpty = false;
            }
        });
        if (haveEmpty) {
            alert(finalWarning('empty'));
            return true;
        }
        else {
            return false;
        }
    }

    const addAccount = account => {
        accounts.push(account);
        localStorage.setItem('tableUser', JSON.stringify(accounts));
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        account.name = nameInput;
        account.cpf = cpfInput;
        account.user = userInput;
        account.pass = passInput;

        if (!emptyFields(['nameInput', 'cpfInput', 'userInput', 'passInput'])) {
            if (confirmSave())
                try {
                    accounts = [];
                    for (var i in accountsJson)
                        accounts.push(accountsJson[i]);

                    addAccount(account);

                    cleanFields();

                    alert(finalWarning('save'));
                    window.location.href = "/users";
                }
                catch (e) {
                    alert(finalWarning('error', e));
                    alert(e);
                    window.location.href = "/users";
                }
            else
                alert(finalWarning('cancel'));
        }
    }

    return (
        <>
            <Top />
            <Menu />
            <div className="user-add-form">
                <div className="line-top"></div>
                <form method="post" id="user-add-form" onSubmit={handleFormSubmit}>
                    <div className="user-add-fields">
                        Name
                    <input
                            onChange={e => setName(e.target.value)}
                            name="nameInput"
                            value={nameInput}
                            type="text"
                            placeholder="Insert name."
                            onBlur={e => fieldCheck(e.target)}
                        />
                        CPF
                    <input
                            onChange={e => setCpf(e.target.value)}
                            name="cpfInput"
                            value={cpfInput}
                            type="text"
                            placeholder="Insert cpf."
                            onBlur={e => fieldCheck(e.target)}
                        />
                        User
                    <input
                            onChange={e => setUser(e.target.value)}
                            name="userInput"
                            value={userInput}
                            type="text"
                            placeholder="Insert user."
                            onBlur={e => fieldCheck(e.target)}

                        />
                        Password
                    <input
                            onChange={e => setPass(e.target.value)}
                            name="passInput"
                            value={passInput}
                            type="password"
                            placeholder="Insert password."
                            onBlur={e => fieldCheck(e.target)}
                        />
                    </div>
                    <button
                        data-testid="form-field"
                        type="submit"
                        className=" button user-add-save-button"
                    >
                        Save
                    </button>
                </form>
                <Link to="/Users" className="button user-add-cancel-button" >
                    Cancel
                </Link>
            </div >
        </>
    );
}

export default AddUser;
