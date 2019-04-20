import React from "react"

const Footer = () => {
    const date = new Date().getFullYear() 
    return (
        <footer>
            <p>	&copy; Josh Foti {date}</p>
        </footer>
    )
}

export {Footer}