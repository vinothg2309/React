import React, { Component } from 'react'
import {connect} from 'react-redux'

class App extends Component {
    render() {
        return (
            <div>
                <center>
                    <br />
                    <h2>Working with Redux Saga</h2>
                    <div>Your age is {this.props.age}</div>
                    <br/>
                    <button onClick={ this.props.onAgeUp }>Age Up</button>
                    <button onClick={ this.props.onAgeDown }>Age Down</button>
                </center>
            </div>
        )
    }
}

// state management
const maxStateToProps = (state) => {
    return {
        age: state.age
    }
}

//actions management
const matchDispatchToProps = (dispatch) => {
    return {
        onAgeUp: () => dispatch({type: 'AGE_UP', value: 1}),
        onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1})
    }

}


export default connect(maxStateToProps, matchDispatchToProps)(App)