import "./styles.css";

const Header = ({ title }) => {
    return (
        <header className="app-header">
            <h1>{title}</h1>
            <p className="subtitle">Explora y guarda tus canciones</p>
        </header>
    );
}

export default Header;