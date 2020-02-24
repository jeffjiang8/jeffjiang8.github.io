import React, { Component } from 'react';

class ProjectItemTwo extends Component {
    render() {
        return (
            <div className="project-two">
                <img src='./images/frogger.gif' alt='meh' className="frogger-img"/>
                <p className='frogger-desc'>
                    This is a clone of the classic game named Frogger.
                </p>
                <p className='frogger-desc'>
                    #JavaScript
                </p>
                <div className="frogger-links">
                    <a href="https://github.com/maryfarner18/critter-crossing-frontend" 
                        target="_blank"
                        className='frogger-code'>
                        [Code]
                    </a>
                    &nbsp;
                    <a href="https://www.youtube.com/watch?v=Zkm7kYnViZc&feature=youtu.be" 
                        target="_blank"
                        className='frogger-code'>
                        [Demo]
                    </a>
                </div>
            
                
            </div>
        );
    }
}

export default ProjectItemTwo;