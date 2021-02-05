import React, { Component } from "react"
import Weather from './Weather.js'
import './Choose.css'
import './sbuttons.min.css'

class Choose extends Component{

  constructor(props){
    super(props)
    this.state = {
      number: 0,
      value: ''
    }
    this.revealWeather = this.revealWeather.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  revealWeather(){  //shows weather block: maximized, without show more
    if(this.state.number < 5){
      this.setState({
        number: this.state.number+=1
      });
    }
  }

  handleChange(event){
   this.setState({value: event.target.value});
  }

  enterKey(event){
    if(event.keyCode === 13){
      this.revealWeather();
    }
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
              placeholder = "e.g: San Francisco" onChange = {this.handleChange} onKeyDown={(e) => this.enterKey(e)}/>
              <button className = "sbtn pink-btn" onClick = {this.revealWeather} type = "submit">Submit</button>

            </div>
          </div>
        </div>
        {(this.state.number >= 1) && <Weather name = {this.state.value} />}
        {(this.state.number >= 2) && <Weather name = {this.state.value} />}
        {(this.state.number >= 3) && <Weather name = {this.state.value} />}
        {(this.state.number >= 4) && <Weather name = {this.state.value} />}
        {(this.state.number === 5) && <Weather name = {this.state.value} />}

      </div>
    );
  }
}

export default Choose;
