import Node from './Node.js'
import dijkstra from '../Algorithms/Dijkstra.js'
import React from 'react'


const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

const createNode = (col, row) => {
    return {
      col,
      row,
      isStart: row === START_NODE_ROW && col === START_NODE_COL,
      isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };

const getInitialGrid = () => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
        const currentRow = [];
        for (let col = 0; col < 50; col++) {
            currentRow.push(createNode(col, row));
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
            minHeight: "500px",
            minWidth: "600px",
            backgroundColor: "white",
            // display: "flex",
            // justifyContent: "flex-start",
            border: "2px solid black"
        }

        return (
            <div>
                <div style={gridStyle} className='grid'>
                    <Node/>
                    {/* finish constructing node component */}
                </div>
            </div>
        )
            
    }
}

export default Grid;