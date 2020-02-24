import React, { Component } from 'react';

class ProjectItemThree extends Component {

    render() {
        return (
            <div className="project-three">
                <img src='./images/wewatch.gif' alt='meh' className="wewatch-img"/>
                <p className='wewatch-desc'>
                        An interactive TV-Show discussion app
                </p>
                <p className='wewatch-desc'>
                        #RubyonRails #API
                </p>
                <div className="wewatch-links">
                    <a href="https://github.com/VPoshelyuk/WeWatch" 
                        target="_blank"
                        className='wewatch-code'>
                        [Code]
                    </a>
                    &nbsp;
                    <a href="https://www.youtube.com/watch?v=lWUBnDXkoCg" 
                        target="_blank"
                        className='wewatch-code'>
                        [Demo]
                    </a>
                </div>
            </div>
        );
    }
}

export default ProjectItemThree;