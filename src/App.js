import React from "react";
import NavBar from "./components/NavBar";
import NoteList from "./components/NoteList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <div className='App'>
            <h1>Josh's Notes App</h1>
            <NavBar />
            <NoteList />
            <Footer />
        </div>
    );
}

export default App;
