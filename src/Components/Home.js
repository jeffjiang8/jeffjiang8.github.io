import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className={this.props.view?`home slider`:`home slider closed`}>
                <h1 style={{'color': 'white'}}>home</h1>
            </div>
        );
    }
}

export default Home;