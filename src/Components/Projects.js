import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div className={this.props.view?`projects slider`:`projects slider closed`}>
                <h1 style={{'color': 'white'}}>Projects</h1>
            </div>
        );
    }
}

export default Projects;