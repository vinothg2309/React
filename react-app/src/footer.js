// Stateless Functional Component = SFC
import react from 'react'

export const Footer=(props) => {
    return(
        <div className="bg-dark text-info text-center">
                <h4>Copyright reserved to Vinoth</h4>
                {props.company}
        </div>
    );
}