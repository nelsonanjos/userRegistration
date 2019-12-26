import React from 'react';

const RemoveUser = () => {
    var op = window.confirm("Are you sure you want to remove?");
    if (op === true)
        try {
            let id = parseInt(window.location.href.split("/")[5]);

            var accounts = JSON.parse(localStorage.getItem('tableUser'));
            var accountsStart = accounts.slice(0, id);
            var accountsEnd = accounts.slice(id + 1, 7);
            var newAccounts = [];

            for (let acc in accountsStart)
                newAccounts.push(accountsStart[acc]);
            for (let acc in accountsEnd)
                newAccounts.push(accountsEnd[acc]);

            localStorage.setItem('tableUser', JSON.stringify(newAccounts));

            alert('Removed with sucess!');
            window.location.href = "/users";
        } catch (e) {
            alert('Ocorreu um erro!');
            alert(e);
        }
    else
        alert('The action has been undone!');
        
    window.location.href = "/users";

    return (
        <></>
    );
}

export default RemoveUser;