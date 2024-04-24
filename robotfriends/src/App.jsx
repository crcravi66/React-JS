import React,{ Component } from "react";
import CardsList from "./CardsList"
import SearchBox from "./Searchbox"


class App extends Component {
  constructor (){
    super()
    this.state = {
      robots : [],
      Searchfield : ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => {this.setState({robots : users})});
  }

  onSearchChange = (event) => {
    this.setState({Searchfield: event.target.value})
  }
  
  render(){    
    const filterRobots = this.state.robots.filter(robots => {
    return robots.name.toLocaleLowerCase().includes(this.state.Searchfield.toLocaleLowerCase())
    })
    if (this.state.robots.length === 0){
      return <h1>Loading</h1>
    }else{
      return (
        <div className="tc">
          <h1 className="f1 ">RoboFriends</h1>
            <SearchBox SearchChange ={this.onSearchChange}/>
            <CardsList robots={filterRobots} />

        </div>
      );
    }  
  }   
}


export default App    