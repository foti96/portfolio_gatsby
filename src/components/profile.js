import React from "react"
import BioSection from "../components/bio"
import profileImage from "../images/josh.jpg"
import Capabilities from "./capabilities";

const Profile =() =>{
    return(
        <React.Fragment>
            <BioSection title={"Get to know me"} image={profileImage}>
            <p>
                I’m an Australian full stack developer living in my home town of Perth, Western Australia. I have experience in a number of different web frameworks and content management system like Wordpress, Laravel and React.My main passion is Frontend development, I love being able to make someone’s dreams and ideas come to life in a web browser but recently i have started learning GoLang and I am thoroughly enjoying the new challenge. In my off time you will find me
            </p>
            </BioSection> 
            <Capabilities title="My Skills"/>
        </React.Fragment>
       
    )
}

export default Profile