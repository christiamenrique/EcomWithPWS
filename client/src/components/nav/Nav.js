import React from 'react';
import "./nav.scss";
import { withRouter, Link } from 'react-router-dom';

function Navegation(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="header__wrapper navbar-brand">
                <Link to="/" className="fullLogo">
                    <i className="fas fa-store-alt"></i>
                    <p className="logo">The Best Electronic</p>
                </Link>
            </div>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav header__nav-list">
                {props.currentUser
				? (
					<ul className="navbar-nav header__nav-list">
                        <li className="nav-item" data-target="#navbarSupportedContent">
						<Link to="/" className="header__nav-button btn">Home</Link>
                        </li>
                        <li className="nav-item" data-target="#navbarSupportedContent">
                        <Link to="/products" className="header__nav-button btn">Products</Link>
                        </li>
                        <li className="nav-item" data-target="#navbarSupportedContent">
                        <Link to="/contact" className="header__nav-button btn">Contact</Link>
                        </li>
                        <li className="nav-item" data-target="#navbarSupportedContent">
						<Link to="/logout" className="header__nav-button btn">Log Out</Link>
                        </li>
					</ul>
				)
				: (
					<ul className="navbar-nav header__nav-list">
                        <li className="nav-item" data-target="#navbarSupportedContent">
						<Link to="/login" className="header__nav-button btn">Log In</Link>
                        </li>
                        <li className="nav-item" data-target="#navbarSupportedContent">
						<Link to="/signup" className="header__nav-button btn">Sign Up</Link>
                        </li>
					</ul>
				)
			}
                </ul>
            </div>
        </nav>

    );
}
// }

export default withRouter(Navegation);