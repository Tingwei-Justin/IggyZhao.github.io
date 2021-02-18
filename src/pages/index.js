import React from "react"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/Footer"
import Header from "../components/header/header"
import HeroSection from "../components/heroSection/HeroSection"
// import { Link } from "gatsby"

import Layout from "../components/layout/layout"
// import Image from "../components/image"
import SEO from "../components/layout/seo"
import Project from "../components/project/Project"
import Research from "../components/research/Research"
import Timeline from "../components/timeline/Timeline"
import Work from "../components/work/Work"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <HeroSection />
    <Timeline />
    <Research />
    <Work />
    <Project />
    <Contact />
    <Footer />
    {/* <HeroSection /> */}
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
)

export default IndexPage
