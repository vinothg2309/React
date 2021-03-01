/*
SFC : Presentation
SCC : Container
SFC : Presentation (small state)
*/

import React, { Component } from 'react'

export default class Button extends Component {
    state={buttonText: 'Please click me'}

    handleClick = () => {
        this.setState( () => {
            return {buttonText: 'Thanks, been clicked'}
        })
    }


    render() {
        const {buttonText}=this.state
        return (
            <div>
                <button onClick={this.handleClick}>{buttonText}</button>
            </div>
        )
    }
}
