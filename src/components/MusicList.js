import React from "react";
import MusicItem from "./MusicItem";

const MusicList = ({songs}) => {

    const songNodes = songs.map ((song, index) => {
        return <MusicItem key={index} song = {song}/>
    })

    return (
        <div className="list">
            <ol>
                {songNodes}
            </ol>

        </div>
    )
}

export default MusicList;