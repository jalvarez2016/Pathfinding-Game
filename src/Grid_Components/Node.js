import React from 'react'

class Node extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            col: this.props.col,
            row: this.props.row,
            isWall: this.props.isWall,
            isEnd: this.props.isEnd,
            isStart: this.props.start
        }
    }

    render () {

        let nodeStyle ={
            height: "10px",
            width: "10px",
            border: "1px solid black",
        }

        if(this.state.isWall){
            nodeStyle.backgroundColor = "blue"
        } else if(this.state.isEnd){
            nodeStyle.backgroundColor = "green";
        } else if(this.state.isStart) {
            nodeStyle.backgroundColor = "red"
        }

        return (
            <div style={nodeStyle} className='node'>
            </div>
        )
            
    }
}

export default Node;