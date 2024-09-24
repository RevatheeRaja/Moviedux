import React from "react";
import '../styles.css';

export default function Header () {
    return (
    <div>
        <img className="logo" src="logo.png" alt="Moviedux"/>
        <h2 className="app-subtitle">It's time for a popcorn! Find your next movie here</h2>
    </div>
    )
}