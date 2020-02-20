import React, { Component } from 'react';

class ProjectItemTwo extends Component {

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
            <div className="project-two" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                <div className={this.state.closed?`overlay`:`overlay-open`}>
                    <p className={this.state.closed?`frogger-desc-closed`:`frogger-desc`}>
                        This is a clone of the classic game named Frogger.<br></br>
                        #JavaScript<br></br>
                    </p>
                    <div className="frogger-links">
                        <a href="https://github.com/maryfarner18/critter-crossing-frontend" 
                            target="_blank"
                            className={this.state.closed?"frogger-code-closed":"frogger-code"}>
                            [Code]
                        </a>
                        &nbsp;
                        <a href="https://www.youtube.com/watch?v=Zkm7kYnViZc&feature=youtu.be" 
                            target="_blank"
                            className={this.state.closed?"frogger-code-closed":"frogger-code"}>
                            [Demo]
                        </a>
                    </div>
                </div>
                <img src='./images/frogger.gif' alt='meh' className="frogger-img"/>
            </div>
        );
    }
}

export default ProjectItemTwo;