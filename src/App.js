import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Song from "./components/Song";

class App extends Component {
  state = {
    songs: [
      { id: 1, title: "Believer", artist: "Imagine Dragons", album: "Evolve", duration: "3:24" },
      { id: 2, title: "Yellow", artist: "Coldplay", album: "Parachutes", duration: "4:29" },
      { id: 3, title: "Fiesta Pagana", artist: "Mägo de Oz", album: "Finisterra", duration: "5:48" },
      { id: 4, title: "El Poeta", artist: "Humbe", album: "Entropía", duration: "3:28" },
      { id: 5, title: "Horizonte", artist: "Anthres", album: "Ecos", duration: "3:15" }
    ]
  };

  componentDidMount() {
    console.log("Fav Song se ha cargado correctamente!");
  }

  render() {
    return (
      <div className="app">
        <Header title="Fav Song" />
        <main className="content">
          <section className="song-list">
            {this.state.songs.map(s => (
              <Song
                key={s.id}
                title={s.title}
                artist={s.artist}
                album={s.album}
                duration={s.duration}
              />
            ))}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
