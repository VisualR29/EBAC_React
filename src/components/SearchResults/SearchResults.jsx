import Song from "../Song/Song";
import "./styles.css";

const SearchResults = ({ songs, onAddToLibrary }) => {
    return (
        <section className="song-list">
            {songs.map(song => (
                <Song
                    key={song.id}
                    title={song.title}
                    artist={song.artist}
                    album={song.album}
                    duration={song.duration}
                    onAddToLibrary={() => onAddToLibrary(song)}
                />
            ))}
        </section>
    )
}

export default SearchResults;