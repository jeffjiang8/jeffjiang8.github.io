import React, { Component } from 'react';


class Projects extends Component {

    render() {
        console.log(this.props)
        return (
            <div className={this.props.view?`projects slider`:`projects slider closed`}>
               
            </div>
        );
    }
}

export default Projects;