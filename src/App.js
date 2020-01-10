import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
// import { play, exit } from './Timelines/Controls'
import Nav from './Nav'
import Home from './Components/Home'
import Summary from './Components/Summary'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Education from './Components/Educations'
import LeadershipVolunteer from './Components/LeadershipVolunteer'
import Contact from './Components/Contact'
 
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Nav/>
          <Route render={({ location }) => {
            const { pathname, key } = location;

            return (
              <TransitionGroup component={null}>
                {/* <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{enter: 750, exit: 150}}
                > */}
                  <Switch location={location}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/summary" component={Summary} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/education" component={Education} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/leadershipandvolunteer" component={LeadershipVolunteer} />
                    <Route path="/contact" component={Contact} />

                  </Switch>
                {/* </Transition> */}
              </TransitionGroup>
            )
          }}/>
        </div>
      </BrowserRouter>
    )
  }
}
  
  export default App;
