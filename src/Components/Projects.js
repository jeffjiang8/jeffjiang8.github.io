import React, { Component } from 'react';

class Projects extends Component {

    handleHardwareClick = ()=>{
        console.log("hardware")
    }

    handleSoftwareClick = ()=>{
        console.log("software")
    }

    render() {
        console.log(this.props)
        return (
            <div className={this.props.view?`projects slider`:`projects slider closed`}>
                <div className="hardware" onClick={this.handleHardwareClick}>
                    <img src='http://localhost:3000/images/hardware.png' alt="meh" className="hardware-icon"/>
                    Hardware Projects
                </div>
                <div className="projects-split"></div>
                <div className="software" onClick={this.handleSoftwareClick}>
                    <img src='http://localhost:3000/images/software.png' alt="meh" className="software-icon"/>
                    Software Projects
                </div>
            </div>
        );
    }
}

export default Projects;