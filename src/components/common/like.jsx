import React, { Component } from 'react';

class Like extends Component {
    
    render() {
        let classes = "fa fa-heart"
        if(!this.props.like){
            classes += "-o"
        }

        return ( 
            <React.Fragment>

                <i style={{cursor: "pointer"}} onClick={this.props.handleClick} className={classes}></i>
            </React.Fragment>
         );
    }
}
 
export default Like;