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
        <a href="https://github.com/RH-sdavey/sean-will-help-you/blob/master/CONTRIBUTING.md">Contribute here</a>
        <p></p>
        <h2>What the fuck, why should I help you?</h2>
        <p>I'm just asking for help, you don't need to help me, I really dont mind if you have no time or just dont want to.. thats fine</p>
        <p>But first just let me explain what Im doing on the website...</p>
        <p> Sean Will Help You ( swhy.netlify.com ) is a free Linux tutorial website, that will be updated regularly with new tutorials that will teach visitors to the site how to do tasks in Linux</p>
        <p> Everything from Sysadmin to devops and developer stuff... </p>
        <p>Whatever we decide to put there...these tutorials can be easy/medium/hard/expert tasks, and while I am aiming 99% towards Linux, I already have one guy providing Windows tutorials..</p>
        <p></p>
        <h2>So...get to the point...</h2>
        <p>I need content, the website structure is mostly done, I have a few things I need to do, but I need conteeentttt....I've created about 10 tutorials myself so far and need more, much more creating, so Im 'open-sourcing' it to you guys</p>
        <p>I need tutorials, written in Markdown language explaining how to do stuff in Linux, simple tasks like how to restart a service, show which port is being used by a process...</p>
        <p> through to complicated stuff... how to port forward an ssh connection through a docker container in an ansible playbook... and everything in between </p>
        <p> If you have literally any skill in IT and want to share that with the world, then please help me... </p>
        <p></p>
        <h2>I dont know Markdown language what the hell is that?</h2>
        <p>Markdown is incredible easy, it makes making content for website basically a joke... the truth is, the swhy website is on its 3rd iteration, the previous two were written in pure jsx/javascript, and it took me hours to write a simple tutorial</p>
        <p>The same tutorials in Markdown took me ~45mins.</p>
        <p>Here is everything you need to learn Markdown, its basically symbols mixed with English</p>
        <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">Markdown Cheat Sheet</a>
        <p></p>
        <h2>I dont know what to create for content, I have no ideas!</h2>
        <p>Anything you know how to do, that others could benefit from, just write it down 😝</p><br/>
        <h2>Ok, whats in it for me?</h2>
        <p>Well, I cant offer you cash, MAYBE I would be up for discussion about some agreement for cash (~300-400czk) in return for every 10 pages of published tutorial content, but please... dont consider cash as an incentive here</p>
        <p> I can offer you a beer or two if you are willing to help a friend, thats about it</p>
        <p>The truth is, I wont take a profit from this page, I started it with the aim of learning react.js and along the way of learning that, I had this idea to create a tutorial website to help others as I was helped in the beginning of my career. If you were ever helped in the beginning your IT career, why not pay-it-forward a little bit by writing a tutorial to help hundreds or thousands of others in future? think about that sweet sweet karma!</p>
        <p>I would just like to help others to help themselves, to change their careers, thats all</p>
        <p></p>
        <h2>So theres nothing in this for me?</h2>
        <p>Well, Ill add you to some contributors page I will create on the site... so you will have solid gold proof that you have contributed to an open source Linux tutorial website in your out-of-work time. You'll have some green squares on your github heat-map to show to future employers and you'll have a sense of pride that you helped someone who needed help to get where you are. Plus it will look pretty good on your CV that you are a "regular contributor" to a Linux tutorial website, it will look very good compared to the next dude who doesnt do that.</p>
        <br/>
        <h2>Ok, how can I start?</h2>
        <p> Ok, first of all, thanks for ANY help... theres somethings I want to do with the site but I just need time, so your help will hopefully give me enough spare time to do that. 
          So... all I need is tutorials content for now... if you can help me with that, I would be very happy...</p>
        <p> Please see <a href="https://github.com/RH-sdavey/sean-will-help-you/blob/master/CONTRIBUTING.md">here</a> for details how to help contribute...and THANK YOU!</p>
        <h2>But my English is so bad....Ill be embaressed!</h2>
        <p>No problem, All pull requests to the repo are automatically assigned to me, and I will check all the content and spelling/grammar etc before I approve anything, I will offer alternatives and explanations to sentences or words that could be better, thats the smallest problem we have, no worries!</p>
        <p></p>
        <h2> I have no time / I dont want to / Im too lazy / Not for me thanks...</h2>
        <p>No problem... I asked only because your a friend or ex colleagues of mine, who has IT skills. Of course I knew not everybody would want to help, but why not ask right?? so I wont hold it against you. Enjoy your day, and keep checking the site!, maybe you might learn something :D </p>
        <h2>Whats your plans for the site?</h2>
        <p>At the moment, tutorials tutorials tutorials... I need that content baby!</p>
        <p>In the future, I'd like to have some learning paths, that users will follow specific paths and lessons in order to become a syadmin/developer/devops engineer, within 5-6 months....</p>
        <p>These learning paths will be in a seperate part of the site than the tutorials, and maybe I will consider user profiles for saving learning path progress</p>
        <p>If you want to help with the learning paths, then ping me directly, as they take a bit more explanation... but for now, Im really only needing...tutorial conteeeeeennnttt!</p>
        
        <h1> Check <a href="https://github.com/RH-sdavey/sean-will-help-you/blob/master/CONTRIBUTING.md">here</a> for details how to contribute </h1>
        
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
