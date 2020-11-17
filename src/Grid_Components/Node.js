import React from 'react'

class Node extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render () {

        let nodeStyle ={
            minHeight: "10px",
            minWidth: "10px",
            border: "1px solid black"
            // color: "white",
            // display: "flex",
            // justifyContent: "flex-start",
        }

        return (
            <div style={nodeStyle} className='node'>
            </div>
        )
            
    }
}

export default Node;