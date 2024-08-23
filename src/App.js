import React, { useState, useEffect } from "react";
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

    // Save notes to local storage whenever they change
    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    // Add note with title and content
    const addNote = (noteTitle, noteContent) => {
        const newNote = {
            id: Date.now(),
            title: noteTitle,
            content: noteContent,
        };

        setNotes([...notes, newNote]);
    };

    // Edit note with new title and new content
    const editNote = (note, newTitle, newContent) => {
        const editedNote = {
            id: note.id,
            title: newTitle,
            content: newContent,
        };

        // Update the notes by finding the note with a matching ID
        const updatedNotes = notes.map((n) =>
            n.id === note.id ? editedNote : n
        );

        setNotes(updatedNotes);
    };

    // Delete a note
    const deleteNote = (noteToDelete) => {
        const updatedNotes = notes.filter((note) => note.id !== noteToDelete.id);
        setNotes(updatedNotes);
    }

    /* ------ APP ENTRY POINT ----- */
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
