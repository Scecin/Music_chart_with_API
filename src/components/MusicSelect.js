import React from "react";

const MusicSelect = ({onGenderSelected, genders}) => {

    const handleChange = ((event) => {
        const choseGender = genders[event.target.value]
        onGenderSelected(choseGender)
    });

    const genderOptions = genders.map((gender, index)=> {
        return <option value={index} key={index}>{gender.name}</option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Chose a Gender</option>
            {genderOptions}
        </select>
    )
}

export default MusicSelect;