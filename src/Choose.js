import React, { Component } from "react"
import Weather from './Weather.js'
import './Choose.css'
import './sbuttons.min.css'

class Choose extends Component{

  constructor(props){
    super(props)
    this.state = {
      clicked: false,
      value: ''
    }
    this.revealWeather = this.revealWeather.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  revealWeather(){
    this.setState({
      clicked: !this.state.clicked
    });
  }

  handleChange(event){
   this.setState({value: event.target.value});
  }

  render(){
    return(
      <div className = "content">

        <div className = "choose">
          <h1 className = "withBlackBackground">Global Weather</h1>

          <div className = "enter">
            <h2 className = "withBlackBackground">Enter a location:</h2>

            <div className = "inputAndButton">
              <input type = "text" className = "choosePlace" value = {this.state.value}
              placeholder = "e.g: San Francisco" onChange = {this.handleChange} onSubmit = {this.revealWeather}/>
              <button className = "sbtn pink-btn" onClick = {this.revealWeather}>Submit</button>

            </div>
          </div>
        </div>
        {this.state.clicked && <Weather name = {this.state.value} />}

      </div>
    );
  }
}

export default Choose;
