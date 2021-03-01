// rcc React 
import React, { Component } from 'react'

export default class StatefulApp extends Component {

    constructor(props){
        super(props)    
        this.state = {
            data: [
                {
                    'id': 1,
                    'name': 'Vinoth',
                    'salary': 70000
                },
                {
                    'id': 2,
                    'name': 'Kiruba',
                    'salary': 80000
                },
                {
                    'id': 3,
                    'name': 'Arun',
                    'salary': 60000
                }
            ]
        } 
    }

    render() {
        return (
            <div>
                <h3 className="bg-danger">Enployee enrolled for React</h3>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Employee Name</td>
                            <td>Salary</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((row,index) => {
                               return(<TableRow rowdata={row} key={row.id}></TableRow>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
// Presentation component (SFC)
const TableRow = (props) => {
    return(
            <tr>
                <td>{props.rowdata.id}</td>
                <td>{props.rowdata.name}</td>
                <td>{props.rowdata.salary}</td>
            </tr>
    );


}