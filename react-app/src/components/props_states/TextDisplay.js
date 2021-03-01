import React, { Component } from 'react'

export default class TextDisplay extends Component {
    render() {
        let mystyle = {
            fontSize:20,
            color: 'blue',
            background: 'yellow'
        }
        
        return (
            <div>
                <h3 style={mystyle}>Welcome {this.props.text}</h3>
            </div>
        )
    }
}


// constructor is optional