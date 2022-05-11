import React from "react";

const MusicItem = ({song}) => {
    return <li>{song.title.label}</li>
}

export default MusicItem;