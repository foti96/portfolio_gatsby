import React from "react"
import PropTypes from "prop-types"


const WorkSingle = ({image,url, name}) => (
    <div className={"work-single image is-8by5"}>
        <a target={"_blank"} href={url}>
            <img alt={name} src={image}/>
        </a>  
    </div>
    
)


WorkSingle.propTypes ={
    image: PropTypes.string,
    url: PropTypes.string,
    name: PropTypes.string,
}

WorkSingle.defaultProps = {
    image: "",
    url: "",
    name: "",
}

export default WorkSingle