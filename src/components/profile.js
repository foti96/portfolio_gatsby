import React from "react"
import BioSection from "../components/bio"
import profileImage from "../images/josh.jpg"
import desginIcon from "../images/creativity.svg"
import programingIcon from "../images/web.svg"
import Capabilities from "./capabilities";

const Profile =() =>{
    const desingnList = ["Photoshop","XD", "InDesign", "SVG Animation", "After Effects","Illustrator"]
    const programList = ["React","TypeScript", "GoLang","PHP","JQuery", "JavaScript","Laravel","Bash"]
    return(
        <React.Fragment>
            <BioSection title={"Get to know me"} image={profileImage}>
                <p>
                    Edam taleggio squirty cheese. Feta bocconcini cheesecake dolcelatte mascarpone cheese on toast danish fontina queso. Who moved my cheese cheesy grin cauliflower cheese cheesy grin fromage frais emmental melted cheese cream cheese. Stinking bishop queso rubber cheese gouda babybel bocconcini halloumi fromage. Pecorino airedale cottage cheese stinking bishop.
                </p>
                <p>
                    Chalk and cheese boursin swiss. Pecorino airedale jarlsberg goat pepper jack emmental feta cream cheese. Cheeseburger ricotta babybel cheese and wine cheese and biscuits edam cheese strings everyone loves. Chalk and cheese.
                </p>
                <p>
                    Cut the cheese cheese slices goat. Queso goat edam cheese strings cheesy feet bocconcini cheese and wine cheese and wine. Cow camembert de normandie pepper jack cheese and wine rubber cheese cut the cheese cauliflower cheese lancashire. Stilton dolcelatte chalk and cheese pepper jack jarlsberg monterey jack.
                </p>
            </BioSection> 
            <Capabilities title="My Skills" designIcon={desginIcon} programIcon={programingIcon} designList={desingnList} programList={programList}/>
        </React.Fragment>
       
    )
}

export default Profile