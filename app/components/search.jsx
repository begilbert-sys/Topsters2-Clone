'use client';
import { useState } from 'react';
import styles from '@/app/page.module.css';

import Album from '@/app/components/album';


export default function Search() {
    const [albumResults, setAlbumResults] = useState([]);
    async function handleSubmit(e) {
        e.preventDefault();
        const albumName = e.target.albumName.value;
        const response = await fetch(`/api?albumName=${albumName}`, {
            method: "GET"
        });
        const urls = await response.json();
        setAlbumResults(urls);
    }
    let images = [];
    for (let i = 0; i < albumResults.length; i++) {
        images.push(
            <Album
                key={i}
                url={albumResults[i]}/>
        );
    }

    return (
    <div>
        <form method="GET" onSubmit={handleSubmit}>
            <input 
                className = {styles.searchBar} 
                placeholder="Album, artist, or URL"
                name="albumName"
            />
            <button type="submit">Go</button>
        </form>
        <div className={styles.imageTable}>
            {images}
        </div>
    </div>
    )
}