import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";

const App: React.FC = () => {
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        axios
            .get("/api/message")
            .then((response) => setMessage(response.data.message))
            .catch((error) => console.error("Error fetching message:", error));
    }, []);

    return (
        <div className="App">
            <h1>Backend Mastery</h1>
            <h2>React + Rust</h2>
            <p>{message || "Loading..."}</p>
        </div>
    );
};

export default App;
