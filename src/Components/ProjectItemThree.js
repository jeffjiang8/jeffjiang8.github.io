import React, { Component } from 'react';

class ProjectItemThree extends Component {

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
            <div className="project-three" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                <div className={this.state.closed?`overlay`:`overlay-open`}>
                <p className={this.state.closed?`frogger-desc-closed`:`frogger-desc`}>
                        An interactive TV-Show discussion app<br></br>
                        #RubyonRails #API<br></br>
                    </p>
                    <div className="frogger-links">
                        <a href="https://github.com/VPoshelyuk/WeWatch" 
                            target="_blank"
                            className={this.state.closed?"frogger-code-closed":"frogger-code"}>
                            [Code]
                        </a>
                        &nbsp;
                        <a href="https://www.youtube.com/watch?v=lWUBnDXkoCg" 
                            target="_blank"
                            className={this.state.closed?"frogger-code-closed":"frogger-code"}>
                            [Demo]
                        </a>
                    </div>
                </div>
                <img src='./images/wewatch.gif' alt='meh' className="frogger-img"/>
            </div>
        );
    }
}

export default ProjectItemThree;