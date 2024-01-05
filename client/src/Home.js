import React from 'react';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    const history = useHistory();

    const redirect_to_roles = () => {
        history.push('/roles');
    };

    const redirect_to_addmed = () => {
        history.push('/AddProduct');
    };

    const redirect_to_supply = () => {
        history.push('/supply');
    };

    const redirect_to_track = () => {
        history.push('/track');
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Product Supply Chain</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button onClick={redirect_to_roles} className="btn btn-link">Register</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={redirect_to_addmed} className="btn btn-link">Order Products</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={redirect_to_supply} className="btn btn-link">Control Supply Chain</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={redirect_to_track} className="btn btn-link">Track Products</button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Reste de votre contenu */}
            {/* ... */}
        </div>
    );
}

export default Home;
