import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import NoteList from "./components/NoteList";
import Footer from "./components/Footer";
import AddNote from "./components/AddNote";
import "./App.css";

// Import Roboto fonts for Material Design components
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
    /* ------ USER GREETING FUNCTIONALITY ------ */
    const [name, setName] = useState(localStorage.getItem("userName") || "");
    const [greeting, setGreeting] = useState("");

    // If user's name isn't store, prompt the user for it
    useEffect(() => {
        if (!name) {
            const userName = prompt("Welcome! Please enter your name:");
            if (userName) {
                setName(userName);
                localStorage.setItem("userName", userName);
            }
        }
    }, [name]);

    // Determine the time of day and set greeting
    useEffect(() => {
        const hours = new Date().getHours();
        if (hours < 12) {
            setGreeting(`Good morning, ${name}!`);
        } else if (hours < 17) {
            setGreeting(`Good afternoon, ${name}!`);
        } else {
            setGreeting(`Good evening, ${name}!`);
        }
    }, [name]);

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
        const updatedNotes = notes.filter(
            (note) => note.id !== noteToDelete.id
        );
        setNotes(updatedNotes);
    };

    /* ------ ADDNOTE LOGIC ------ */
    // Create boolean in state to decide whether to render the AddNote component
    const [showAddNote, setShowAddNote] = useState(false);

    // Function to toggle the AddNote component
    const toggleAddNote = () => {
        setShowAddNote(!showAddNote);
    };

    /* ------ APP ENTRY POINT ----- */
    return (
        <div className='App'>
            <header>
                <h1>{greeting}</h1>
            </header>
            <NavBar onAddClick={toggleAddNote} />
            {showAddNote && (
                <AddNote onFinish={toggleAddNote} onSave={addNote} />
            )}
            <NoteList
                notes={notes}
                editFunction={editNote}
                deleteFunction={deleteNote}
            />
            <Footer />
        </div>
    );
}

export default App;
