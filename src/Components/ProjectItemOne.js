import React, { Component } from 'react';

class ProjectItemOne extends Component {
    render() {
        return (
            <div className="project-one">
                <img src='./images/tripgif.gif' alt='meh' className="utrippin-img"/>
                <p className='utrippin-desc'>
                    A useful and interactive web app for spontaneous-trips takers.
                </p>
                <p className='utrippin-desc'>
                    #javascript #react.js #rubyonrails #api
                </p>
                
                <div className="utrippin-links">
                    <a href="https://github.com/jeffjiang8/u-trippin-frontend" 
                        target="_blank"
                        className="utrippin-code">
                        
                        [Front-end]
                    </a>
                    &nbsp;
                    <a href="https://github.com/jeffjiang8/u-trippin-backend" 
                        target="_blank"
                        className="utrippin-code">
                        
                        [Back-end]
                    </a>
                    &nbsp;
                    <a href="https://www.youtube.com/watch?v=CB4F-m4zn_I&t=39s" 
                        target="_blank"
                        className="utrippin-code">
                        [Demo]
                    </a>
                </div>
            </div>
        );
    }
}

export default ProjectItemOne;