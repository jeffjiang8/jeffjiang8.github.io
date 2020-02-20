import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className={this.props.view?`home slider`:`home slider closed`}>
                <h1 className="header">I'm Jinfeng Jiang.</h1>
                <div className="home-desc">
                    <p style={{ 'font-weight': '500', 'color':'rgb(166, 166, 166)', 'font-size': "22px"}}><span style={{'text-decoration':'underline', 'color':'white'}}>Full-Stack Software Engineer</span> skilled in Ruby on Rails, JavaScript, and React.js.</p> 
                    <p style={{ 'font-weight': '500', 'color':'rgb(166, 166, 166)', 'font-size': "22px"}}>Adaptive and detail oriented individual, background in <span style={{'text-decoration':'underline', 'color':'white'}}>Hardware Engineering</span>.</p>
                    <p style={{ 'font-weight': '500', 'color':'rgb(166, 166, 166)', 'font-size': "22px"}}>Thrive in both <span style={{'text-decoration':'underline', 'color':'white'}}>collaborative</span> and <span style={{'text-decoration':'underline', 'color':'white'}}>independent</span> environment.</p>
                </div>
            </div>
        );
    }
}

export default Home;