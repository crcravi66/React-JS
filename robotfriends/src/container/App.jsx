import React,{ Component } from "react";
import CardsList from "../component/CardsList"
import SearchBox from "../component/Searchbox"
import Scroll from "../component/Scroll"
import './App.css'
import ErrorBoundry from "../component/ErrorBoundry"


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
    const {robots, Searchfield} = this.state
    const filterRobots = robots.filter(robot => {
    return robot.name.toLocaleLowerCase().includes(Searchfield.toLocaleLowerCase())
    })
    return !robots.length ?
       <h1>Loading</h1> :
    (
      <div className="tc">
        <h1 className="f1 ">RoboFriends</h1>
          <SearchBox SearchChange ={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardsList robots={filterRobots} />
            </ErrorBoundry>
          </Scroll>
      </div>
    );      
  }   
}


export default App    