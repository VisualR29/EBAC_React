import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SearchResults from "./components/SearchResults/SearchResults";
import Library from "./components/Library/Library";

const App = () => {
  const [songs, setSongs] = useState([
    { id: 1, title: "Believer", artist: "Imagine Dragons", album: "Evolve", duration: "3:24" },
    { id: 2, title: "Yellow", artist: "Coldplay", album: "Parachutes", duration: "4:29" },
    { id: 3, title: "Fiesta Pagana", artist: "Mägo de Oz", album: "Finisterra", duration: "5:48" },
    { id: 4, title: "El Poeta", artist: "Humbe", album: "Entropía", duration: "3:28" },
    { id: 5, title: "Horizonte", artist: "Anthres", album: "Ecos", duration: "3:15" }
  ]);

  const [library, setLibrary] = useState([]);

  const addToLibrary = (song) => {
    if (!library.some(s => s.id === song.id)) {
      setLibrary(prev => [...prev, song]);
    }
  };

  useEffect(() => {
    if (library.length > 0) {
      console.log("Libreria actualizada: ", library);
    }
  }, [library]);

  return (
    <div className="app">
      <Header title="Fav Song" />
      <main className="content">
        <h2>Canciones en tendencia</h2>
        <SearchResults songs={songs} onAddToLibrary={addToLibrary} />
        <hr/>
        <h2>Mis canciones</h2>
        <Library songs={library} />
      </main>
    </div>
  );
};

export default App;
