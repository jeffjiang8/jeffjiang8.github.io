import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className={this.props.view?`contact slider`:`contact slider closed`}>
                <h1 style={{'color': 'white'}}>Contacts</h1>
            </div>
        );
    }
}

export default Contact;