import React from 'react'

class NavItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }

    render () {

        let navItemStyle ={
            minWidth: this.props.width,
            padding: "20px",
            paddingLeft: this.props.paddingLeft,
            paddingRight: this.props.paddingRight,
        }

        let btnStyle={
            backgroundColor: "black",
            color: "white",
            border: "0px",
            fontSize: "100%",
            outline: "none",
            cursor: "pointer"
        }

        return (
            <div style={navItemStyle} className='navitem'>
                <button style={btnStyle} onClick={()=>this.props.changepage(this.props.page)}>
                    {this.props.content}
                </button>
            </div>
        )
            
    }
}

export default NavItem;
