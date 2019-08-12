import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hello!</h1>
        <h2>Sean...what do you want?</h2>
        <h2> I made this website... to ask you for help... with helping me to build another website :D </h2>
        <p>I would like to ask for your help to provide me with content for this website...</p>
        <a href="https://swhy.netlify.com/">Sean Will Help You</a>
        <p></p>
        <p>All details on how to contribute are here...</p>
        <a href="https://github.com/RH-sdavey/sean-will-help-you/wiki/How-to-contribute-to-the-site....">Contribute here</a>
        <p></p>
        <h2>What the fuck, why should I help you?</h2>
        <p>I'm just asking for help, you don't need to help me, I really dont mind if you have no time or just dont want to.. thats fine</p>
        <p>But first just let me explain what Im doing on the website...</p>
        <p> Sean Will Help You ( swhy.netlify.com ) is a free Linux tutorial website, that will be updated regularly with new tutorials that will teach visitors to the site how to do tasks in Linux</p>
        <p> Everything from Sysadmin to devops and developer stuff... </p>
        <p>Whatever we decide to put there...these tutorials can be easy/medium/hard/expert tasks, and while I am aiming 99% towards Linux, I already have one guy providing Windows tutorials..</p>
        <p></p>
        <h2>So...get to the point...</h2>
        <p>I need content, the website structure is mostly done, I have a few things I need to do, but I need conteeentttt....</p>
        <p>I need tutorials, written in Markdown language explaining how to do stuff in Linux, simple tasks like how to restart a service, show which port is being used by a process...</p>
        <p> through to complicated stuff... how to port forward an ssh connection through a docker container in an ansible playbook... and everything in between </p>
        <p> If you have lietrally any skill in IT and want to share that with the world, then please help me... </p>
        
        
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
