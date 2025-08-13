import React, { Component } from "react";

class Song extends Component {
    
    handleButtonClick = () => {
        alert("Canción agregada en la biblioteca!")
    }

    render() {
        const { title, artist, duration, album } = this.props;
        return (
            <div className="song">
                <div className="song-meta">
                    <h3 className="song-title">{title}</h3>
                    <p className="song-artist">{artist}</p>
                    {album && <p className="song-album">{album}</p>}
                </div>
                <div className="song-extra">
                    <span className="song-duration">{duration}</span>
                    <button className="save-button" onClick={this.handleButtonClick}>Guardar en mi biblioteca</button>
                </div>
            </div>
        );
    }
}

export default Song;
