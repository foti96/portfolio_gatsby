import React from "react"
import WorkContainer from "../components/workContainer";
import WorkSingle from "../components/workSingle"
import airscope from "../images/airscope.png"
import blended from "../images/blended.png"
import frogponds from "../images/frogponds.png"
import gameChangers from "../images/gamechangers.png"
import stylishKombiTours from "../images/stylishkombitours.png"
import takoPrint from "../images/takoprint.png"

const Work = ()=>{
    return (
        <WorkContainer title={"Work"}>
            <WorkSingle name={"Frogponds"} image={frogponds} url={"https://edu.frogponds.com.au"}/>
            <WorkSingle name={"Game Changer Awards"} image={gameChangers} url={"https://www.gamechangerawards.com.au/"}/>
            <WorkSingle name={"Tako Print"} image={takoPrint} url={"https://www.takoprint.com.au/"}/>
            <WorkSingle name={"Airscope"} image={airscope} url={"https://www.airscope.com/"}/>
            <WorkSingle name={"Stylish Kombi Tours"} image={stylishKombiTours} url={"https://www.stylishkombitours.com.au/"}/>
            <WorkSingle name={"Blended - Curtin Grad Show"} image={blended}/>
        </WorkContainer>
    )
}

export default Work