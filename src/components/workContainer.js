import React from "react"
import PropTypes from "prop-types"



const WorkContainer = ({children,title}) =>(
    <div className={"work-container"} id={"work"}>
        <h2>{title}</h2>
        <div className="container">
            {children}
        </div>
    </div>
)

WorkContainer.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
}



export default WorkContainer
