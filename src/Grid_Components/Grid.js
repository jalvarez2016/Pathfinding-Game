import Node from './Node.js'
import dijkstra from '../Algorithms/Dijkstra.js'
import React from 'react'

const createNode = (col, row, end=false) => {
    if(col === 0 && row === 0){
        return <Node key={`${col}-${row}`} col={col} row={row} isWall={false} isEnd={false} start={true}/>
    }
    if(end){
        return <Node key={`${col}-${row}`} col={col} row={row} isWall={false} isEnd={true} start={false}/>
    }
    let wall = (Math.floor(Math.random() * 2500) > 2000) ? true: false;
    return <Node key={`${col}-${row}`} col={col} row={row} isWall={wall} isEnd={false} start={false}/>
  };

const getInitialGrid = () => {
    const grid = [];
    let end = {
        x: Math.floor(Math.random() * 50),
        y: Math.floor(Math.random() * 50)
    };
    for (let row = 0; row < 50; row++) {
        const currentRow = [];
        for (let col = 0; col < 50; col++) {
            if(row === end.x && col === end.y) {
                currentRow.push(createNode(col, row, end));
            } else {
                currentRow.push(createNode(col, row));
            }
        }
        grid.push(currentRow);
    }
    return grid;
};

class Grid extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            grid: [],
        }
    }

    componentDidMount() {
        const grid = getInitialGrid();
        this.setState({grid});
    }

    render () {

        let gridStyle ={
            height: "600px",
            width: "600px",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap",
            marginTop: "30px"
        }

        return (
            <div>
                <div style={gridStyle} className='grid'>
                    {this.state.grid}
                </div>
            </div>
        )
            
    }
}

export default Grid;