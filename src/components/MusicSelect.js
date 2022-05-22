import React from "react";

const MusicSelect = ({onGenreSelected, genres}) => {

    const handleChange = ((event) => {
        const choseGenre = genres[event.target.value]
        onGenreSelected(choseGenre)
    });

    const genreOptions = genres.map((genre, index)=> {
        return <option value={index} key={index}>{genre.name}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Chose a Genre</option>
            {genreOptions}
        </select>
    )
}

export default MusicSelect;