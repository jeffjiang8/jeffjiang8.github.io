import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className={this.props.view?`home slider`:`home slider closed`}>
                <h1 className="header">I'm Jinfeng Jiang.</h1>
                <div className="home-desc">
                    <p style={{ 'font-weight': '500', 'color':'rgb(166, 166, 166)'}}><span style={{'text-decoration':'underline', 'color':'white'}}>Full-Stack Software Engineer</span> skilled in Ruby on Rails, JavaScript, and React.js.</p> 
                    <p style={{ 'font-weight': '500', 'color':'rgb(166, 166, 166)'}}>Adaptive and detail oriented individual, background in <span style={{'text-decoration':'underline', 'color':'white'}}>Hardware Engineering</span>.</p>
                    <p style={{ 'font-weight': '500', 'color':'rgb(166, 166, 166)'}}>Thrive in both collaborative and independent environment.</p>
                </div>
            </div>
        );
    }
}

export default Home;