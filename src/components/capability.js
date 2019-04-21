import React from "react"
import PropTypes from "prop-types"

const Capability = ({list, icon, title, desc}) =>{
    const xlist = list.map((a) => {
        return (
            <li>{a}</li>
        )
    })

    return(
    <div className={"capability column is-4-desktop is-5-tablet is-12-mobile"}>
                <img src={icon} alt="icon"/>
                <h4>{title}</h4>
                <p>{desc}</p>
                <h5>Languges I use:</h5>
                <ul>
                    {xlist}
                </ul>
            </div>
    )
}
    

Capability.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    list: PropTypes.array,
    icon: PropTypes.string
}

export default Capability