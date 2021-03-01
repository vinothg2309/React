import React from 'react'

export default class Header extends React.Component{

    constructor(props){
        super(props)
        this.state = {name:'Vinoth'}
    }

    render(){
        return(
            <div>
                <h1 className="bg-success text-center">
                    {this.props.company}
                </h1>
            </div>
        );
    }
};

Header.defaultProps = {
    company: 'Murthy InfoTek'
};