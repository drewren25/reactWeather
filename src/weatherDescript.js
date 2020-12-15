import React, { Component } from "react"
import './weatherDescript.css'
import './sbuttons.min.css'

class WeatherDescription extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    if(this.props.name !== ""){
      fetch("http://api.openweathermap.org/data/2.5/weather?q="+this.props.name+"&units=metric&APPID=a85bd598f0c31c516945fc7df8daa0b5")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      });
    }else{
     this.setState({
       isLoaded: true
     })
    }
  }

  render(){

    var {isLoaded, items} = this.state;
    var weather = items.weather[0].main;
    var tempC = items.main.temp.toFixed(0);
    var tempF = (items.main.temp * (9/5) + 32).toFixed(0);
    var tempHighC = items.main.temp_max.toFixed(0);
    var tempHighF = (items.main.temp_max * (9/5) + 32).toFixed(0);
    var tempLowC = items.main.temp_min.toFixed(0);
    var tempLowF = (items.main.temp_min * (9/5) + 32).toFixed(0);

    return(
      <div>
        <p className = "weatherDescription">
          {weather}
        </p>

        <div className = "imgAndWeather">
          <img src = {'/images/'+weather+'.png'} alt = {weather}/>
          <div className="mainAndHighLowWeathers">
            <h1>
              {tempC} C° | {tempF} F°
            </h1>
            <p>
              H: {tempHighC} C° | {tempHighF} F° {'\u00A0'} L: {tempLowC} C° | {tempLowF} F°
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherDescription;
