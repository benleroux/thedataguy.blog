import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postList"
//import { Heading } from "../components/atoms"
import Contact from "../components/contact"
import Image from "../components/image"

const IndexPage = () => {
  return (
    <Layout activePage="/">
      <SEO />
      <div className="border-0 px-8 flex flex-col-reverse sg:flex-row mg:flex-row lg:flex-row xl:flex-row items-center justify-around lg:space-x-6">
        <h1 className="border-0 mt-12 lg:mt-0 max-w-3xl text-3xl sm:text-3xl text-primary font-bold text-center">
          Benjamin Leroux
          <br></br>
          <span className="text-accent" STYLE="font-size:12.0pt">
            Cloud Solution Architect | Big Data | Data Engineering
          </span>
        </h1>
        <div className="border-2 h-48 w-48 rounded-full overflow-hidden">
          <Image />
        </div>        
      </div>
      <div className="border-0 mt-12 flex flex-col-reverse lg:flex-row items-center lg:justify-between lg:space-x-6">
        <h1 className="border-0 lg:mt-0 max-w-2xl text-1xl sm:text-2xl text-primary sm:text-left md:text-left lg:text-left">
          Working in the data space for over 25 years now, I live and breath data. Specializing in Azure data services with a hyper specialization in big data and analytics, I hope to bring my knowledge and expertise to accelerate your journey into the Azure data world.​
        </h1>
      </div>    
      <div className="border-0 flex flex-row items-center lg:justify-between lg:space-x-6">
        <h1 className="border-0 ml-12 lg:ml-40 max-w-2xl text-1xl sm:text-2xl text-primary text-left">
          <span border-0 className="text-accent font-body">
            Thanks, The Data Guy
          </span>
        </h1>
      </div>  
      <PostList showHeading />
      <Contact />
    </Layout>
  )
}

export default IndexPage
