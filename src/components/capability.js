import React from "react"
import PropTypes from "prop-types"

const Capability = ({list, icon}) =>{
    const xlist = list.map((a) => {
        return (
            <li>{a}</li>
        )
    })

    return(
    <div className={"capability column is-4-desktop is-5-tablet is-12-mobile"}>
                <img src={icon} alt="icon"/>
                <ul>
                    {xlist}
                </ul>
            </div>
    )
}
    

Capability.propTypes = {
    list: PropTypes.array,
    icon: PropTypes.string
}

export default Capability