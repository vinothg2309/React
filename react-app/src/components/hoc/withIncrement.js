// HOC is design pattern where function takes component as argument returns new enhanced/updated component with additional state and functionality

// const enhancedComponent = HOC(originalComponent)

import React from 'react'

const UpdatedComponent = (originalComponent) => {
    class NewComponent extends React.Component{

        constructor(props){
            super(props)
            state={count: 0}
            increment = () => {
                this.setState( prevState => {
                    return {count: prevState+1 }
                })
            }
        }
        

        render(){
            return(
                <originalComponent count={this.state.count} increment={this.increment} />
            )
        }
    }
    return NewComponent
}

export default UpdatedComponent