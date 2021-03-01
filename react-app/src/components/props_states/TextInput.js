import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

export default class TextInput extends Component {

    constructor(props){
        super(props)
        this.state = {inputText:'Vinoth' }
    }

    handleChange(event){
        this.setState({inputText:event.target.value})
        console.log('State is Changed')
    }

    render() {
        return (
            <div>
                Company: <input type="text" id="txt1" />
                <br/>
                Country: <input type="text" value="India" />
                <div>Enter Name</div>
                <input type="text" value={this.state.inputText} onChange= { (event) => this.handleChange(event)} />
                { this.state.inputText ?  <TextDisplay text={this.state.inputText} /> : <TextDisplay text="Enter name"/> }
            </div>      
          )
    }
}
