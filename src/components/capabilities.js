import React from "react"
import PropTypes from "prop-types"
import Capability from "./capability";

const Capabilities = ({title,designList,designIcon,programList,programIcon}) =>(
    <div className={"capabilities"}>
        <div className="container">
            <h2>{title}</h2>
            <div className={"columns is-mobile is-multiline capability-columns"}>
               <Capability list={designList} icon={designIcon}/>
               <Capability list={programList} icon={programIcon}/> 
            </div>
        </div>
    </div>
)

Capabilities.propTypes = {
    title: PropTypes.string,
    designList : PropTypes.array,
    programList: PropTypes.array,
    designIcon: PropTypes.string,
    programIcon: PropTypes.string
}
export default Capabilities