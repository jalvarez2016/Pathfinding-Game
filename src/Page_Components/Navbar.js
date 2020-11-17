import React from 'react'
import NavItem from './NavItem';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }

    render () {

        let navStyle ={
            maxHeight: "50px",
            color: "white",
            backgroundColor: "black",
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "space-around"
        }

        let itmContainer={
            float: "right",
            display: "flex",
            justifyContent: "flex-end"
        }

        return (
            <div style={navStyle} className='navbar'>
                <NavItem content="Path Finder" width="50px" paddingRight="30vw" page="home" changepage={this.props.changepage}/> 
                <div style={itmContainer}>
                    <NavItem content="About" width="50px" paddingRight="30px" page="about" changepage={this.props.changepage}/> 
                    {/* <NavItem content="Games" width="50px" paddingRight="30px" page="games" changepage={this.props.changepage}/>  */}
                    <NavItem content="Contact" width="50px" paddingRight="30px" page="contact" changepage={this.props.changepage}/> 
                </div>
            </div>
        )
            
    }
}

export default Navbar;