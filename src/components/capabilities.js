import React from "react"
import PropTypes from "prop-types"
import Capability from "./capability";
import BackEndCode from "../images/BackendCode.svg"
import FrontEndIcon from "../images/web.svg"


const Capabilities = ({title}) =>{
    const backEndList = ["Larvel", "GoLang","PHP"]
    const frontEndList = ["HTML","CSS","SCSS","React","TypeScript","JQuery", "JavaScript"]

    return(
        <div className={"capabilities"}>
            <div className="container">
                {/* <h2>{title}</h2> */}
                <div className={"columns is-mobile is-multiline capability-columns"}>
                   <Capability title={"Front-End Developer"} desc={"I Like to bring peoples dreams and ideas to life in the browser"} list={frontEndList} icon={FrontEndIcon}/>
                   <Capability title={"Back-End Developer"} desc={"The under apreciated but nessary code that brings the frontend to life"} list={backEndList} icon={BackEndCode}/> 
                </div>
            </div>
        </div>
    )
}


Capabilities.propTypes = {
    title: PropTypes.string,
}
export default Capabilities