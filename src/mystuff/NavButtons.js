import React from 'react';
import './NavButtons.css';

class NavButtons extends React.Component{
    
    render(){
        return(
            <div className="buttonHolder">
                <button onClick={this.props.buttonClickMinus}> &lt; Previous </button>
                <button onClick={this.props.buttonClickPlus}>Next &gt;</button>
            </div>
        )
    }
}
export default NavButtons;
