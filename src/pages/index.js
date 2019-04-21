import React from "react"

import Header from "../components/header"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Work from "../components/work"
import Profile from "../components/profile"
import { Form } from "../components/form";
import { Footer } from "../components/footer";


const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header/>
    <Hero heroText="Josh Foti" subText="Full-Stack Developer" />
    <Work/>
    <Profile/>
    <Form/>
    <Footer/>
  </React.Fragment>
   
)

export default IndexPage
