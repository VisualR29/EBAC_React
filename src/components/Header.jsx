import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header className="app-header">
                <h1>{this.props.title}</h1>
                <p className="subtitle">Explora y guarda tus canciones</p>
            </header>
        );
    }
}

export default Header;
