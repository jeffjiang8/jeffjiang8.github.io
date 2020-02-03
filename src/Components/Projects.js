import React, { Component } from 'react';

class Projects extends Component {
    render() {
        console.log(this.props)
        return (
            <div className={this.props.view?`projects slider`:`projects slider closed`}>
                <button className="hardware">
                    <img src='http://localhost:3000/images/hardware.png' alt="meh" className="hardware-icon"/>
                    Hardware Projects
                </button>
                <button className="software">
                    <img src='http://localhost:3000/images/software.png' alt="meh" className="software-icon"/>
                    Software Projects
                </button>
            </div>
        );
    }
}

export default Projects;