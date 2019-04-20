import React from "react"
import PropTypes from "prop-types"

const BioSection = ({children,title, image}) =>(
    <div className={"profile-container"}>
        <h2>{title}</h2>
        <div className={"profile-inner container"}>
            <div className={"columns is-mobile is-multiline"}>
                <div className={"profile-image column is-3-desktop is-4-tablet is-6-mobile"}>
                    <img src={image} alt={"Profile"}/>
                </div>
                <div className={"profile-content content column is-9-desktop is-8-tablet is-12-mobile"}>
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