import React, { useState } from "react"

function ColorForm(props) {
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addColor(input)
        console.log(input)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setInput(e.target.value)} placeholder={'Color Name'} />
                <button type="submit">Submit!</button>
            </form>
        </>
    )
}


export default ColorForm