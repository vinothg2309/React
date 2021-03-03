import React, {Component} from 'react'
import UpdatedComponent from './withIncrement'

export class HoverComponent extends Component{

    render(){
        return(
            <div>
                const {count,increment} = this.props
                <h2 onMouseOver={this.increment}>Hovered {this.count} times</h2>
            </div>  
        )
    }
}

export default UpdatedComponent(HoverComponent)