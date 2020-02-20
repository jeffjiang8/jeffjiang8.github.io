import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className={this.props.view?`contact slider`:`contact slider closed`}>
                <div className="contact-details">
                    <div className="profile-pic">
                        <img src='http://localhost:3000/images/profilepic.png' alt='meh' className="pic"/>
                    </div>
                    <div className="resume">
                        <button className="download-btn">
                            <a href="http://localhost:3000/images/2020JIANG.pdf" target="_blank">Download Resume</a>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;