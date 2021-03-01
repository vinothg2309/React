import React, { Component } from 'react'

export default class RefsDemo extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: 'React'
        }
        this.inputRef = React.createRef();
    }

    render() {
        return (
            <input type="text" id="txt1" ref={this.inputRef}/>
        )
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }
}
