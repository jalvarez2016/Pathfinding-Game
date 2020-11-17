// import React, {Component} from 'react';
// // import Grid from './Grid_Components/Grid.js'
// // import Navbar from './Page_Components/Navbar.js'
// import './App.css';

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state={
//       page: "home"
//     }
//   }

//   changepage= (pickedPage)=>{
//     console.log(pickedPage);
//     this.setState({
//       page: pickedPage
//     });
//   }

//   reder(){
//     return (
//       <div className="App">
//         {/* <Navbar changepage={this.changepage}/> */}
//         <header className="App-header">
//           {/* <img src={logo} className="App-logo" alt="logo" /> */}
//           <p>
//             Path Finder Game
//           </p>
//         </header>
//         {/* <Grid/> */}
//       </div>
//     );
//   }
// }

// export default App;



  
// import logo from './logo.svg';
import './App.css';
import Grid from './Grid_Components/Grid.js'
import Navbar from './Page_Components/Navbar.js'
//import About from './About/index.js' //not implemented yet
//import Contact from './Contact/index.js' //not implemented yet
import React from "react";

export default class App extends React.Component{
    constructor(props){
      super(props);
      this.state={
        page: "home"
      }
    }
  
    changepage= (pickedPage)=>{
      console.log(pickedPage);
      this.setState({
        page: pickedPage
      });
    }
  render(){
    
  return (
    <div className="App">
      <Navbar changepage={this.changepage}/>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Grid/>
      </header>
    </div>
  );
  }
}

// export default App;