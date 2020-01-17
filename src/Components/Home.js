import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className={this.props.view?`home slider`:`home slider closed`}>
                <h1 className="header">I'm Jinfeng (Jeff) Jiang.</h1>
                <div className="home-desc">
                    <p>A recent graduate of Rutgers University and Flatiron School,</p> 
                    <p>experienced in Ruby on Rails, JavaScript and React.js,</p>
                    <p>who is both thrilled and eager to seek professional experience.</p>
                </div>
            </div>
        );
    }
}

export default Home;