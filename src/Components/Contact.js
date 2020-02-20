import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className={this.props.view?`contact slider`:`contact slider closed`}>
                <div className="contact-details">
                    <div className="profile-pic">
                        <img src='./images/profilepic.png' alt='meh' className="pic"/>
                    </div>
                    <div className="desc-text">
                        <div className="about-me">
                            <h2 style={{'margin': '0'}}>About Me</h2>
                            <div className="underline" style={{'margin': '0'}}></div>
                            <p>
                                After acquiring a hardware engineering degree from Rutgers, 
                                I wanted to expand my knowledge and skills by venturing into another level of Electrical engineering, 
                                this has brought to the desire of becoming a software engineer. To me, the most exciting aspect about 
                                coding is the sense of achievement either when the snippet of code works right out of the box 
                                or when I find and fix the bug.
                                Aside from coding, I would spend most of my time watching TV shows and movies and playing video games, 
                                occasionally, hitting the gym and playing some basketball. 
                                I also love to travel, California and Hawaii are my next targets.
                            </p><br></br>
                            <h2 style={{'margin': '0'}}>Contact Details</h2>
                            <div className="underline" style={{'margin': '0'}}></div>
                            <p>
                                <span>Jinfeng Jiang</span><br></br>
                                <span>848 - 565 - 5125</span><br></br>
                                <span>East Brunswick, NJ, 08816</span><br></br>
                                <span>jeffjiang8@gmail.com</span>
                            </p>
                        </div>
                        <div className="resume">
                            <button className="download-btn">
                                <a href="./images/2020JIANG.pdf" target="_blank" className="resume-link">Download Resume</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;