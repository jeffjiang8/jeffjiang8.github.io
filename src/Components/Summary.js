import React, { Component } from 'react';

class Summary extends Component {
    render() {
        return (
            <div className={this.props.view?`summary slider`:`summary slider closed`}>
                <h1 style={{'color': 'white'}}>summary</h1>
            </div>
        );
    }
}

export default Summary;