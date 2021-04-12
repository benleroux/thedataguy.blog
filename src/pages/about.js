import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ExtLink } from "../components/atoms"
import Contact from "../components/contact"

const About = _ => {
  return (
    <Layout activePage="about">
      <SEO title="About" />
      <div className="container">
        <article className="prose">
          <h2>
            Hey, I'm Benjamin
          </h2>
          <p>
            I'm a <strong>Data & AI</strong> Cloud Solutions Architect at{" "}
            <ExtLink link="https://www.microsoft.com/en-ca">
              <strong>Microsoft</strong>
            </ExtLink>{" "}
            - currently based out of Montreal, Canada.
          </p>
          <p>
            {" "}
            Specializing in the Azure cloud’s big data an analytics workloads with <b>25</b> years of 
            experience in the technology sector and 5 years working at Microsoft. Working as as a Cloud 
            Solution Architect, I’ve driven large customer initiatives like enterprise data lakes, 
            big data analytics and large-scale data migrations on the Microsoft Data Platform, 
            I’ve also helped clients guide overall technical and architectural design including 
            specific implementation projects and/or pilots.
          </p>
          <h2>Why Data?</h2>
          <p>Like I mentioned on my main page, I live an breath data.</p>
          <p>
            I hated my first Oracle course in school. So much so that I vowed at the time I would
            never become a DBA or have anything to do with databases; I was going to be a "developer" 
            <span role="img" aria-label="sheep">🤦‍♂️</span>. 
            Fast forward a few years and SQL Server 6.5... I wrote my first stored procedure. Let's 
            say, I was hooked. Branching to BI then architecture, I've never looked back.
          </p>
          <p>
            Data fuels organizations. So why not be at the center of it all???
          </p>
          <h2>Why make this blog?</h2>
          <p>
            On a day to day basis, I use Azure services, experience how our client use as well
            and figure out why not share with others what I know and have learned.
          </p>
          <p>
            Simple way to pay it forward. Plus, in some way, I also enjoy it
          </p>
          <h2>Huge shout out to Raki!!!</h2>
          <p>
            I'd like to give a huge shout out to Raki Rahman for introducing me to Gatsby. Gave 
            me a reason to  get off Wordpress and get some coding in.
          </p>
          <p>
            Also, kudos for making his site available in GitHub as it allowed me to use it and get
            started faster.
          </p>
          <p>
            Check out his site : {" "}
            <ExtLink link="http://www.rakirahman.me">
              <strong>rakirahman.me</strong>
            </ExtLink>
          </p>
        </article>
      </div>
      <Contact />
    </Layout>
  )
}

export default About
