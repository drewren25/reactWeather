import React, { Component } from "react"
import './Weather.css'
import './sbuttons.min.css'

class Weather extends Component{

  constructor(props){
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
      min: true,
      max: false,
      seeMore: false
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.minMax = this.minMax.bind(this);
    this.seeMore = this.seeMore.bind(this);
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

  minMax(){
    this.setState({
      min: !this.state.min,
      max: true
    })
  }

  seeMore(){
    this.setState({
      seeMore: !this.state.seeMore
    })
  }

  render(){

    var {isLoaded, items} = this.state;

    if(!isLoaded){
        return(
          <p>Loading...</p>
        );
    }else{

      if(items.name !== undefined){

        var location = items.name;
        var weather = items.weather[0].main;
        var tempC = items.main.temp.toFixed(0);
        var tempF = (items.main.temp * (9/5) + 32).toFixed(0);
        var tempHighC = items.main.temp_max.toFixed(0);
        var tempHighF = (items.main.temp_max * (9/5) + 32).toFixed(0);
        var tempLowC = items.main.temp_min.toFixed(0);
        var tempLowF = (items.main.temp_min * (9/5) + 32).toFixed(0);
        var windSpeedMeters = items.wind.speed;
        var windSpeedMiles = (items.wind.speed * 2.237).toFixed(2);
        var windDir = items.wind.deg;
        var humidity = items.main.humidity;

        return(
          <div>

            <div className = {`${this.state.min ? "box" : "boxMin"} ${this.state.max ? "boxMax" : ""}`}>

              <div className = "weather">

                <div className = "locationAndMinMaxButton">

                  <p className = "location">
                    {location}{'\u00A0'}
                  </p>
                  <a href="#" className="minMaxButton" onClick = {this.minMax}>-/+</a>

                </div>

                <p className = "weatherDescription">
                  {weather}
                </p>

                {this.state.min &&
                  <div className = {`${this.state.max ? "imgAndWeather imgandWeatherMax" : "imgAndWeather"}`}>
                    <img src = {'/images/'+weather+'.png'} alt = {weather}/>
                    <div className = "weathersAndWindSpeed">
                      <h1>
                        {tempC} C° | {tempF} F°
                      </h1>
                      <p>
                        H: {tempHighC} C° | {tempHighF} F° {'\u00A0'} L: {tempLowC} C° | {tempLowF} F°
                      </p><br/>

                      <a href="#" className="seeMore" onClick = {this.seeMore}>See more &darr;</a>
                    </div>
                  </div>
                }

              </div>

            </div>

            {this.state.seeMore &&
              <div className="box seeMoreBox">
                <div className = {`${this.state.seeMore ? "moreInfo" : "lessInfo"}`}>
                  <p>
                    Wind speed: {windSpeedMeters} m/s | {windSpeedMiles} m/h
                  </p>
                  <p>
                    Wind direction: {windDir}°
                  </p>
                  <p>
                    Humidity: {humidity}%
                  </p>
                </div>
              </div>
            }

          </div>

        );

      }else if(items.name === undefined){
        return (
          <p>
            It seems we don't have information for this location.
            This can be caused either because this is not a valid location or
            we don't have it in our systems. Please remember to check for correct
            spelling. Valid locations include: a city(e.g: San Francisco),
            state/province(e.g: California), country(e.g: United States),
            continent(e.g: North America), or Earth/Globe.
          </p>
        );
      }

    }
  }
}

export default Weather;
