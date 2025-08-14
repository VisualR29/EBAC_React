import Song from "../Song/Song";
import "./styles.css";

const Library = ({ songs }) => (
    <section className="song-list">
        {songs.length
            ? songs.map(song => (
                <Song
                    key={song.id}
                    title={song.title}
                    artist={song.artist}
                    album={song.album}
                    duration={song.duration}
                    hideButton={true}
                />
            ))
            : <p>No tienes canciones en tu biblioteca aún.</p>}
    </section>
);

export default Library;