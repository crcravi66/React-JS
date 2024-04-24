import React,{ Component } from "react";
import CardsList from "./CardsList"
import SearchBox from "./Searchbox"
import { robots } from './robots';


class App extends Component {
  constructor (){
    super()
    this.state = {
      robots : robots,
      Searchfield : ''
    }
  }

  onSearchChange = (event) => {
    this.setState({Searchfield: event.target.value})
  }
  
  render(){    
    const filterRobots = this.state.robots.filter(robots => {
    return robots.name.toLocaleLowerCase().includes(this.state.Searchfield.toLocaleLowerCase())
    })
    return (
      <div className="tc">
        <h1 className="f1 ">RoboFriends</h1>
          <SearchBox SearchChange ={this.onSearchChange}/>
          <CardsList robots={filterRobots} />

      </div>
    );
  }   
}


export default App    