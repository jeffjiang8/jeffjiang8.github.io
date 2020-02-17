import React, { Component } from 'react';

class ProjectItemOne extends Component {

    state = {
        closed: true
    }

    handleHover = ()=>{
        this.setState({
            closed: !this.state.closed
        })
    }

    render() {
        return (
            <div className="project-one" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                <div className={this.state.closed?`overlay`:`overlay-open`}>
                <p className={this.state.closed?`frogger-desc-closed`:`frogger-desc`}>
                        A personal app for spontaneous-trip takers.<br></br>
                        JavaScript, React.js, and Ruby on Rails.<br></br>
                    </p>
                    <div className="frogger-links">
                        <a href="https://github.com/jeffjiang8/u-trippin-frontend" 
                            target="_blank"
                            className={this.state.closed?"frogger-code-closed":"frogger-code"}>
                            [Front-end]
                        </a>
                        &nbsp;
                        <a href="https://github.com/jeffjiang8/u-trippin-backend" 
                            target="_blank"
                            className={this.state.closed?"frogger-code-closed":"frogger-code"}>
                            [Back-end]
                        </a>
                        &nbsp;
                        <a href="https://www.youtube.com/watch?v=CB4F-m4zn_I&t=39s" 
                            target="_blank"
                            className={this.state.closed?"frogger-code-closed":"frogger-code"}>
                            [Demo]
                        </a>
                    </div>
                </div>
                <img src='http://localhost:3000/images/tripgif.gif' alt='meh' className="frogger-img"/>
            </div>
        );
    }
}

export default ProjectItemOne;