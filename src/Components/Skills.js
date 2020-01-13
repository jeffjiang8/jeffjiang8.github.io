import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div className={this.props.view?`skills slider`:`skills slider closed`}>
                <h1 style={{'color': 'white'}}>skills</h1>
            </div>
        );
    }
}

export default Skills;