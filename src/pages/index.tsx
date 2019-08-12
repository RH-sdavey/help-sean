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
        <a href="https://github.com/RH-sdavey/sean-will-help-you">find the contributing.md file</a>
        
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
