import React, { Component } from 'react';
import ProjectItemOne from './ProjectItemOne'
import ProjectItemTwo from './ProjectItemTwo'
import ProjectItemThree from './ProjectItemThree'


class Projects extends Component {

    render() {
        return (
            <div className={this.props.view?`projects slider`:`projects slider closed`}>
               <div className="projects-slider">
                    <div class="slides">
                    <div className="slide" id="slide-1">
                        <ProjectItemOne/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <p>&gt;</p>
                    </div>
                    <div className="slide" id="slide-2">
                        <p>&lt;</p>
                        <ProjectItemTwo/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <p>&gt;</p>
                    </div>
                    <div className="slide" id="slide-3">
                        <p>&lt;</p>
                        <ProjectItemThree/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;