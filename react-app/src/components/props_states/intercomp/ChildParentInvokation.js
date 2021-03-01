import React, { Component } from 'react'

export default class ChildParentInvokation extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: 'Initial Data'
        }
    }

    updateStateProp(event) {
        this.setState({data: event.target.value})
        console.log(event.target.value)
    }

    render() {
        return (
            <>  
                <h1 className="text-success">Parent Component</h1>
                <h1 className="text-danger bg-warning">{this.state.data}</h1>
                <br/>
                <h2>Child Component</h2>
                <br/>
                <Content myDataProp={this.state.data} updateStateProp={ (event) => this.updateStateProp(event) }></Content>

                <ContentSibling data={this.state.data}></ContentSibling>
            </>
        )
    }
}


const Content = (props) => {
    return(
        <>
            <input type="text" value={props.myDataProp} onChange={props.updateStateProp} id="txt" nname="txt"></input>
        </>
    )

}

const ContentSibling = (props) => {
    return(
        <div class="bg-info">
            <h4>{props.data}</h4>
        </div>
    )
}