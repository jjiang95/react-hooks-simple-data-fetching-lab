// create your App component here
import React, { useEffect, useState } from "react";

function App() {

    const [img, setImg] = useState("")
    const [imgPresent, setImgPresent] = useState(false)
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => {
            setImg(data.message)
            setImgPresent(true)
        })
    }, [])
    
    if (!imgPresent) {
        return <p>Loading...</p>
    }

    return (
        <>
            <h1>Random Dog Generator</h1>
            <img src={img} alt="A Random Dog"/>
        </>
    )
}

export default App;