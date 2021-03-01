import React, { Component } from 'react'

export default class DataLoader extends Component {

    state={ data: [] }
    
    componentDidMount(){
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => this.setState(() => {
                return {data}
            }))
    }

    render() {
        return (
            <div>
                <ul>
                    { this.state.data.map( el => ( <li key={el.id}>{el.name}</li>)) }
                </ul>
            </div>
        )
    }
}
