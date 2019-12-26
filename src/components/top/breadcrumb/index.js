import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
    const url = window.location.href.split('/');
    const path = ["Main"];
    url.map((u, i) => {
        if(i > 2 && u !== "" && u !== null)
            path.push(u)
        return null
    });

    return (
        <div className="container-breadcrumb">
            <nav>
                <ul>
                    {path.map( (p, i) => (
                        <Link 
                            key={i} 
                            to={"#"}
                        >
                            {`${p} > `}
                        </Link>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Breadcrumb;