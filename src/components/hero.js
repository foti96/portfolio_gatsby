import React from "react"
import PropTypes from "prop-types"
import Image from "./../images/deskAnimation.svg"

const Hero = ({heroText, subText}) => {
    return(
       <div className={"hero"}>
            <div className={"hero-text"}>
                <h1>
                    {heroText}
                </h1>
                <h3>
                    {subText}
                </h3>
            </div>
           <object aria-label={"Desk Animation"}  data={Image}/>
       </div> 
    )
    
}

Hero.propTypes = {
    heroText: PropTypes.string,
    subText: PropTypes.string,
}

Hero.defaultProps = {
    heroText: "",
    subText: "",
}


export default Hero