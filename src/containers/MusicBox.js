import React, {useState, useEffect} from "react";
import MusicList from "../components/MusicList";
import MusicSelect from "../components/MusicSelect";

const MusicBox = () => {

    const [genres, setGenres] = useState([
        {
            name: "All", 
            url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"
        },
        {
            name: "Rock", 
            url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"
        },
        {
            name: "Dance", 
            url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"
        },
        {
            name: "Country", 
            url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"
        }
    ])

    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = function (url) {
        fetch(url)
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))
    }

    const onGenreSelected = function(genre) {
        getSongs(genre.url)
    }

    return (
        <div className="main-container">
            <MusicSelect onGenreSelected= {onGenreSelected} genres={genres}/>
            <MusicList songs={songs}/>

        </div>
    )
}

export default MusicBox;