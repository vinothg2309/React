// CLC(Component Life Cycle) works only with stateful component

import React, { Component } from 'react'

export default class CompLifecycle extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: 0,
            msg: 'Initial data'
        }
    }

    setNewNumber(event){
        this.setState({data: this.state.data+1 })
    }
    

    render() {
        return (
            <div>
                <button onClick={ (event) => this.setNewNumber(event)}>Increment</button>
                <Content myNumber={this.state.data}></Content>
            </div>
        )
    }
}

class Content extends Component {

    constructor(props){
        super(props)
        this.state={ name: 'Vinoth' }
        console.log(props.myNumber)
        // register custom event, get local storage
    }

    render() {
        return (
            <div>
                <h3 id="txt1">{ this.props.myNumber }</h3>
                <div id="txt2">hello</div>
            </div>
        )
    }

    componentDidMount(){
        // ajax call using fetch api
        // subscribe to custom events and web socket
        // fired only once
        console.log('In didMount : ' + this.state.myNumber)
    }

    static getDerivedStateFromProps(props, state){
        // props and state validations
        console.log('in getDerived State '+ props.myNumber)
        console.log(state.name)
        // ajax call based on search team coming from Parent
        // Augumentation - Adding new state dynamically to this component
        return {}
    }

    shouldComponentUpdate(props,state){
        console.log('Decide whether to re-render or not when state changes')
        if(props.myNumber > 5){
            return true
        }
        else {
            return false;
        }
    }

    componentDidMount(){
        console.log(document.getElementById("txt2").innerText)
    }

    componentDidCatch(error){
        console.log('Error : ' + error)
    }

    componentWillUnmount(){
        console.log("Unmounted")
    }

}