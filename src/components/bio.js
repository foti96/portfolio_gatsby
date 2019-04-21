import React from "react"
import PropTypes from "prop-types"

const BioSection = ({children,title, image}) =>(
    <div className={"profile-container"} id={"profile"}>
        <h2>{title}</h2>
        <div className={"profile-inner container"}>
            <div className={"columns is-mobile is-multiline is-centered"}>
                <div className={"profile-content content column is-9-desktop is-10-tablet is-12-mobile"}>
                    {children}
                </div>
            </div>
            
        </div>  
        
    </div>
)

BioSection.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    image: PropTypes.string
}



export default BioSection