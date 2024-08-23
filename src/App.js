import React, { useState } from "react";
import NavBar from "./components/NavBar";
import NoteList from "./components/NoteList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    /* ------ NOTE FUNCTIONALITY ------ */
    // Define notes in state, and get them from localStorage if possible
    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    return (
        <div className='App'>
            <h1>Josh's Notes App</h1>
            <NavBar />
            <NoteList
                notes={[
                    { title: "1st note", content: "Body for 1st note" },
                    { title: "2nd note", content: "Body for 2nd note" },
                ]}
            />
            <Footer />
        </div>
    );
}

export default App;
