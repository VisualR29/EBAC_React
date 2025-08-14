import "./styles.css";

const Song = ({ title, artist, duration, album, onAddToLibrary, hideButton }) => {
    const handleButtonClick = () => {
        if (onAddToLibrary) {
            onAddToLibrary();
            alert("Canción agregada a la biblioteca!");
        }
    }

    return (
        <div className="song">
            <div className="song-meta">
                <h3 className="song-title">{title}</h3>
                <p className="song-artist">{artist}</p>
                {album && <p className="song-album">{album}</p>}
            </div>
            <div className="song-extra">
                {!hideButton && (
                    <button className="save-button" onClick={handleButtonClick}>Guardar en mi biblioteca</button>
                )}
                <span className="song-duration">{duration}</span>
            </div>
        </div>
    );

}

export default Song;