import React from 'react';

const Logout = () => {
    sessionStorage.removeItem('logSession');
    return (
    <>{window.location.href = "/"}</>
    );
}

export default Logout;