import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Components/Home'
import Summary from './Components/Summary'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Education from './Components/Educations'
import LeadershipVolunteer from './Components/LeadershipVolunteer'
import Contact from './Components/Contact'
 
class App extends Component {

  state = {
    homeDiv: true,
    summaryDiv: false,
    skillsDiv: false,
    educationDiv: false,
    projectsDiv: false,
    leaderDiv: false,
    contactDiv: false
  }

  handleHomeClick = ()=>{
    this.setState({
      homeDiv: true,
      summaryDiv: false,
      skillsDiv: false,
      educationDiv: false,
      projectsDiv: false,
      leaderDiv: false,
      contactDiv: false
    })
  }

  handleSummaryClick = ()=>{
    this.setState({
      homeDiv: false,
      summaryDiv: true,
      skillsDiv: false,
      educationDiv: false,
      projectsDiv: false,
      leaderDiv: false,
      contactDiv: false
    })
  }

  handleSkillsClick = ()=>{
    this.setState({
      homeDiv: false,
      summaryDiv: false,
      skillsDiv: true,
      educationDiv: false,
      projectsDiv: false,
      leaderDiv: false,
      contactDiv: false
    })
  }

  handleEducationClick = ()=>{
    this.setState({
      homeDiv: false,
      summaryDiv: false,
      skillsDiv: false,
      educationDiv: true,
      projectsDiv: false,
      leaderDiv: false,
      contactDiv: false
    })
  }

  handleProjectsClick = ()=>{
    this.setState({
      homeDiv: false,
      summaryDiv: false,
      skillsDiv: false,
      educationDiv: false,
      projectsDiv: true,
      leaderDiv: false,
      contactDiv: false
    })
  }

  handleLeaderClick = ()=>{
    this.setState({
      homeDiv: false,
      summaryDiv: false,
      skillsDiv: false,
      educationDiv: false,
      projectsDiv: false,
      leaderDiv: true,
      contactDiv: false
    })
  }

  handleContactClick = ()=>{
    this.setState({
      homeDiv: false,
      summaryDiv: false,
      skillsDiv: false,
      educationDiv: false,
      projectsDiv: false,
      leaderDiv: false,
      contactDiv: true
    })
  }

  render() {
    return (
      <>
      <BrowserRouter>
        <div className="app">
            <Home view={this.state.homeDiv}/>
            <Summary view={this.state.summaryDiv}/>
            <Skills view={this.state.skillsDiv}/>
            <Education view={this.state.educationDiv}/>
            <Projects view={this.state.projectsDiv}/>
            <LeadershipVolunteer view={this.state.leaderDiv}/>
            <Contact view={this.state.contactDiv}/>
        </div>
          <Nav  handleHomeClick={this.handleHomeClick}
                handleEducationClick={this.handleEducationClick}
                handleContactClick={this.handleContactClick}
                handleSummaryClick={this.handleSummaryClick}
                handleSkillsClick={this.handleSkillsClick}
                handleProjectsClick={this.handleProjectsClick}
                handleLeaderClick={this.handleLeaderClick}
                handleContactClick={this.handleContactClick}
                />
        </BrowserRouter>
        </>
    )
  }
}
  
  export default App;
